module Actions where

import Signal exposing (Signal, Mailbox, Address)

actions : Mailbox Action
actions =
  Signal.mailbox NoOp

type Action
  = NoOp
  | Update
  | PathChange String
