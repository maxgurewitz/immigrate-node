module Update where

import Actions exposing (..)
import Model exposing (Model)
import Maybe
import Dict

update : Action -> Model -> Model
update action model = case action of 

  NoOp -> model

  PathChange newPath -> { model | path <- newPath }

  ProfileFormChange key value -> 
    let updatedForm = Dict.insert key value model.profileForm
    in { model | profileForm <- updatedForm }

  Update ->
    let value = 
      case model.field of
        "foo" -> "baz"
        "baz" -> "foo"
    in
       { model | field <- value }

