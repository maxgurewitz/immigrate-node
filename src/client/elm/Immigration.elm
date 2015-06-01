module Immigration where

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Signal exposing (Signal, Address, merge)
import History exposing (path)
import List exposing (head)
import String exposing (startsWith)

main : Signal Html
main =  
  Signal.map2 (view actions.address) path model

model : Signal Model
model =
  Signal.foldp update initialModel actions.signal

type alias Model =
  { field : String
  }

initialModel : Model
initialModel =
  { field = "foo"
  }

actions : Signal.Mailbox Action
actions =
  Signal.mailbox NoOp

type Action
  = NoOp
  | Update

type alias Route = (String, Component)

buildRouter : List(Route) -> Component -> String -> Component
buildRouter routes defaultPage path = case routes of
  [] -> defaultPage
  hd::tl -> if | (fst hd) == path -> snd hd 
               | otherwise -> buildRouter tl defaultPage path

router = buildRouter [ ("/", homePage) ] notFoundPage
  
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
  div [] [ navbar "home" address model
    , text model.field
    , text "bar"
    , button [ onClick address Update ] [ text "button" ]
  ]

notFoundPage : Component
notFoundPage address model =
  text "404"

navbar : String -> Component
navbar page address model =
  nav [ class "navbar navbar-default" ] [
    div [ class "container-fluid" ] [ 

      div [ class "navbar-header" ] [ 
        button [ attribute "type" "button", class "navbar-toggle collapsed" ] [
          span [ class "sr-only" ] [ text "Toggle Navigation" ]
          , span [ class "icon-bar" ] []
          , span [ class "icon-bar" ] []
          , span [ class "icon-bar" ] []
        ]
      ]

      , div [ class "collapse navbar-collapse" ] [
          ul [ class "nav navbar-nav" ] [
            li [] [ a [] [ text "Home" ] ]
          ]
      ]
    ]
  ]

update action model =
  case action of 
    NoOp -> model
    Update ->
      let value = 
        case model.field of
          "foo" -> "baz"
          "baz" -> "foo"
      in
         { model | field <- value }
