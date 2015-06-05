module Router where

import Components exposing (..)

type alias Route = (String, Component)

buildRouter : List(Route) -> Component -> String -> Component
buildRouter routes defaultPage path = case routes of
  [] -> defaultPage
  hd::tl -> if | (fst hd) == path -> snd hd 
               | otherwise -> buildRouter tl defaultPage path

router : String -> Component
router = buildRouter [ ("/", homePage)
                     , ("/about", aboutPage) 
                     , ("/immigrate", immigratePage) 
                     ] notFoundPage
