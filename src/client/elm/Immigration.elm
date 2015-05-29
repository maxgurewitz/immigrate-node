module Immigration where

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Signal exposing (Signal, Address, merge)
-- import Router exposing (Route, match, (:->))
-- import Router exposing (match)
import History exposing (path)
import String

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


type alias View = Address Action -> String -> Model -> Html
view : View
view address path model =
  div []
    [ text model.field
    , text "bar"
    , button 
      [ onClick address Update ]
      [ text "button" ]
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
