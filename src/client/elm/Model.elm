module Model where

import Native.Main

initialPath : String
initialPath = Native.Main.initialPath

type alias Model =
  { field : String
  , path : String
  , profileForm : ProfileForm
  }

initialModel : Model
initialModel =
  { field = "foo"
  , path = initialPath
  , profileForm = 
      { firstName = Nothing
      , lastName = Nothing
      }
  }

type alias ProfileForm =
  { firstName : Maybe(String)
  , lastName : Maybe(String)
  }
