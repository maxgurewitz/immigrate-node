module Actions where

import Signal exposing (Mailbox, Address)

actions : Mailbox Action
actions =
  Signal.mailbox NoOp

type Action
  = NoOp
  | Update
  | PathChange String
  | ProfileFormChange String String
