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

type alias Route = (String, Page)
buildRouter : List(Route) -> Page -> String -> Page
buildRouter routes defaultPage path = 
  case routes of
     [] -> defaultPage
     hd::tl -> if | startsWith (fst hd) path -> snd hd 
                  | otherwise -> buildRouter tl defaultPage path

router = buildRouter [ ("/home", homePage) ] notFoundPage
  
type alias View = Address Action -> String -> Model -> Html
view : View
view address path model = (router path) address model

type alias Page = Address Action -> Model -> Html

homePage : Page
homePage address model =
  div []
    [ text model.field
    , text "bar"
    , button 
      [ onClick address Update ]
      [ text "button" ]
    ]

notFoundPage : Page
notFoundPage address model =
  text "404"

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
