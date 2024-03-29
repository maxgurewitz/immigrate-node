module Tasks where

import History
import Task exposing (..)
import Signal exposing (send)
import Actions exposing (..)

setPath : String -> Task x ()
setPath path =
  History.setPath path
  `andThen` \_ ->
    send actions.address (PathChange path)
