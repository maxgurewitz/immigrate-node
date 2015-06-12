module Model where
import Dict exposing (Dict, fromList)

import Native.Main

initialPath : String
initialPath = Native.Main.initialPath

type alias Model =
  { field : String
  , path : String
  , profileForm : Dict String String
  }

initialModel : Model
initialModel =
  { field = "foo"
  , path = initialPath
  , profileForm = 
      fromList
        [ ("firstName", "")
        , ("lastName", "")
        ]
  }
