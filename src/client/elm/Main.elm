module Main where

import Html exposing (Html)
import Signal exposing (Signal, Address)
import Actions exposing (..)
import Model exposing (..)
import Router exposing (router)
import Update exposing (update)
import History
import List exposing (head)
import Task exposing (Task)
import Components exposing (baseLayout)

main : Signal Html
main =  
  Signal.map view model

model : Signal Model
model =
  Signal.foldp update initialModel actions.signal

port setPath : Signal (Task x ())
port setPath = 
  let setPath = 
    \currentModel currentPath -> 
      if currentModel.path == currentPath
      then (Task.succeed ())
      else History.setPath currentModel.path
  in Signal.map2 setPath model History.path

-- i want to listen to an action, execute a task, and then update the model with the result
-- https://groups.google.com/forum/#!topic/elm-discuss/3ZYgfqPE0Vw
-- why do i need to pass the address as an in the component ?

-- send : Address a -> a -> Task x ()
-- forwardTo : Address b -> (a -> b) -> Address a
-- filter : (a -> Bool) -> a -> Signal a -> Signal a
-- map : (a -> result) -> Signal a -> Signal result

view : Model -> Html
view model = baseLayout [ ((router model.path) model) ] -- actions.address
