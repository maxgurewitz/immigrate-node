module Actions where

import Signal exposing (Mailbox, Address)
import Task

actions : Mailbox Action
actions =
  Signal.mailbox NoOp

type Action
  = NoOp
  | Update
  | PathChange String
  | ProfileFormChange String String
  | SubmitProfileForm

asyncActions : Mailbox (Task.Task x ())
asyncActions = Signal.mailbox (Task.succeed ())
