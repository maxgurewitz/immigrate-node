module Model where
import Dict

import Native.Main

initialPath : String
initialPath = Native.Main.initialPath

type alias Model =
  { field : String
  , path : String
  , profileForm : Dict.Dict String String
  }

initialModel : Model
initialModel =
  { field = "foo"
  , path = initialPath
  , profileForm = Dict.fromList []
  }
