module Main where

import Html exposing (Html)
import Signal exposing (Signal, Address)
import Actions exposing (..)
import Model exposing (..)
import Router exposing (router)
import Update exposing (update)
import History
import Task exposing (Task)
import Components exposing (baseLayout)

main : Signal Html
main =  
  Signal.map (view actions.address) model

model : Signal Model
model =
  Signal.foldp update initialModel actions.signal

port pathFromModel : Signal (Task x ())
port pathFromModel = 
  let setPathFromModel = \currentModel -> 
        History.setPath currentModel.path
  in  Signal.map setPathFromModel model

view : Address Action -> Model -> Html
view address model = baseLayout [ ((router model.path) address model) ] 
