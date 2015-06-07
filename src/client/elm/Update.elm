module Update where

import Actions exposing (..)
import Model exposing (Model)

update : Action -> Model -> Model
update action model = case action of 
  NoOp -> model
  PathChange newPath -> { model | path <- newPath }
  ToggleNavbar -> { model | navbarCollapsed <- (not model.navbarCollapsed) }
  Update ->
    let value = 
      case model.field of
        "foo" -> "baz"
        "baz" -> "foo"
    in
       { model | field <- value }
