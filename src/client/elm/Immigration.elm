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
  Signal.map (view actions.address) model

model : Signal Model
model =
  Signal.foldp update initialModel actions.signal

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
  
type alias View = Address Action -> Model -> Html

view : View
view address model = baseLayout ((router model.path) address model)

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

      , div [ class "collapse navbar-collapse" ] [ navbarLinks address model ]
    ]
  ]

navbarLinks : Component
navbarLinks address model =
  let pathsAndNames = [ ("/", "Home")
                     , ("/about", "About")
                     ]
      pathToLink = \(path, name) ->
        li [] [ a [ onClick address (PathChange path) ] [ text name ] ]
      links = List.map pathToLink pathsAndNames
  in 
      ul [ class "nav navbar-nav" ] links
 
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
