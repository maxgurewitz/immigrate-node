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
  Signal.map (\currentModel -> History.setPath currentModel.path) model

-- i want to listen to an action, execute a task, and then update the model with the result
-- https://groups.google.com/forum/#!topic/elm-discuss/3ZYgfqPE0Vw
-- why do i need to pass the address as an in the component ?

-- port executeTasks : Signal (Task x ())
-- port executeTasks = 
--   let isCreateTask = 
--         \action -> case action of
--           CreateTask -> True
--           _ -> False

--       createTasks = Signal.filter 
--   in Signal.map updateTasks createTasks


-- send : Address a -> a -> Task x ()
-- forwardTo : Address b -> (a -> b) -> Address a
-- filter : (a -> Bool) -> a -> Signal a -> Signal a
-- map : (a -> result) -> Signal a -> Signal result

view : Model -> Html
view model = baseLayout [ ((router model.path) model) ] -- actions.address
