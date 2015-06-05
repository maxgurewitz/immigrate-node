module Model where

import Native.Main

initialPath : String
initialPath = Native.Main.initialPath

type alias Model =
  { field : String
  , path : String
  }

initialModel : Model
initialModel =
  { field = "foo"
  , path = initialPath
  }
