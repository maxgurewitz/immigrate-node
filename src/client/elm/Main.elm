module Main where

import Html exposing (Html)
import Signal exposing (Signal, Address)
import Actions exposing (..)
import Model exposing (..)
import Router exposing (router)
import Update exposing (update)
import Task exposing (Task)
import Components exposing (baseLayout)

main : Signal Html
main =  
  Signal.map view model

model : Signal Model
model =
  Signal.foldp update initialModel actions.signal

port asyncPort : Signal (Task x ())
port asyncPort = asyncActions.signal

view : Model -> Html
view model = baseLayout [ ((router model.path) model) ]
