module Main where

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Signal exposing (Signal, Address, Mailbox)
import History
import Task exposing (Task)
import Constants exposing (..)
import Components exposing (..)
import Actions exposing (..)
import Model exposing (..)
import Update exposing (update)

main : Signal Html
main =  
  Signal.map (view actions.address) model

port pathFromModel : Signal (Task x ())
port pathFromModel = 
  let setPathFromModel = \currentModel -> 
        History.setPath currentModel.path
  in  Signal.map setPathFromModel model

type alias Route = (String, Component)

model : Signal Model
model =
  Signal.foldp update initialModel actions.signal

buildRouter : List(Route) -> Component -> String -> Component
buildRouter routes defaultPage path = case routes of
  [] -> defaultPage
  hd::tl -> if | (fst hd) == path -> snd hd 
               | otherwise -> buildRouter tl defaultPage path

router = buildRouter [ ("/", homePage)
                     , ("/about", aboutPage) 
                     , ("/immigrate", immigratePage) 
                     ] notFoundPage
  
type alias View = Address Action -> Model -> Html

view : View
view address model = baseLayout [ ((router model.path) address model) ] 
