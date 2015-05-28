module Immigration where

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Signal exposing (Signal, Address)
import String

main : Signal Html
main =
  Signal.map (view actions.address) model

model : Signal Model
model =
  Signal.foldp update initialModel actions.signal

type alias Model =
  { field : String
  }

initialModel : Model
initialModel =
  { field = "Foo"
  }

actions : Signal.Mailbox Action
actions =
  Signal.mailbox NoOp

type Action
    = NoOp
    | Update

view : Address Action -> Model -> Html
view address model =
    div []
      [ text model.field
      , text "bar"
      , button 
        [ onClick address (Update)]
        [ text "button" ]
      ]

update action model =
    case action of 
      NoOp -> model
      Update ->
        { model | field <- "baz" }
