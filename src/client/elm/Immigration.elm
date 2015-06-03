module Immigration where

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Signal exposing (Signal, Address, merge)
import History
import List exposing (head)
import String exposing (startsWith)
import Dict
import Task exposing (Task)

main : Signal Html
main =  
  Signal.map2 (view actions.address) History.path model

model : Signal Model
model =
  Signal.foldp update initialModel actions.signal

mergedSignals = Signal.mergeMany [ actions.signal
                                 , pathChanges
                                 ]

pathChanges = Signal.map (\path -> PathChange path) History.path

port pathToAction : Signal (Task x ())
port pathToAction = 
  let setPathFromModel = \currentModel -> 
        History.setPath currentModel.path
  in  Signal.map setPathFromModel model
  
type alias Model =
  { field : String
  , path : String
  }

initialModel : Model
initialModel =
  { field = "foo"
  , path = "/"
  }

actions : Signal.Mailbox Action
actions =
  Signal.mailbox NoOp

type Action
  = NoOp
  | Update
  | PathChange String

type alias Route = (String, Component)

buildRouter : List(Route) -> Component -> String -> Component
buildRouter routes defaultPage path = case routes of
  [] -> defaultPage
  hd::tl -> if | (fst hd) == path -> snd hd 
               | otherwise -> buildRouter tl defaultPage path

router = buildRouter [ ("/", homePage)
                     , ("/about", aboutPage) 
                     ] notFoundPage
  
type alias View = Address Action -> String -> Model -> Html

view : View
view address path model = baseLayout ((router path) address model)

type alias Layout = Html -> Html

baseLayout : Layout
baseLayout content =
  div [ class "app" ] [ content ]

type alias Component = Address Action -> Model -> Html

homePage : Component
homePage address model =
  div [ class "home" ] [ navbar "/" address model
    , text model.field
    , text "bar"
    , button [ onClick address Update ] [ text "button" ]
  ]

aboutPage : Component
aboutPage address model =
  div [ class "about" ] [ navbar "/about" address model
    , text model.field
    , text "dook"
    , button [ onClick address Update ] [ text "button" ]
  ]

notFoundPage : Component
notFoundPage address model =
  text "404"

navbar : String -> Component
navbar currentPath address model =
  nav [ class "navbar navbar-default" ] [
    div [ class "container-fluid" ] [ 

      div [ class "navbar-header" ] [ 
        button [ attribute "type" "button"
               , attribute "data-toggle" "collapse"
               , attribute "data-target" "#js-navbar-collapse"
               , class "navbar-toggle collapsed" 
        ] [
          span [ class "sr-only" ] [ text "Toggle Navigation" ]
          , span [ class "icon-bar" ] []
          , span [ class "icon-bar" ] []
          , span [ class "icon-bar" ] []
        ]
      ]

      , div [ class "collapse navbar-collapse" ] [
          ul [ class "nav navbar-nav" ] (navbarLinks currentPath address)
        ]
    ]
  ]

navbarLinks : String -> Address Action -> List(Html)
navbarLinks currentPath address =
  let pathToLinkName = Dict.fromList [ ("/", "Home")
                                 , ("/about", "About")
                                 ]
      pathToLink = \path -> case (Dict.get path pathToLinkName) of
        Just linkName -> li [] [ a [ onClick address (PathChange path) ] [ text linkName ] ]
        Nothing -> text "Not Found"
  in 
      List.map pathToLink (Dict.keys pathToLinkName)

update action model = case action of 
  NoOp -> model
  PathChange newPath -> { model | path <- newPath }
  Update ->
    let value = 
      case model.field of
        "foo" -> "baz"
        "baz" -> "foo"
    in
       { model | field <- value }
