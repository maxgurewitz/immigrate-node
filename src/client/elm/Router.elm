module CustomRouter where

-- import Regex 
import String exposing (contains)
import List exposing (foldl)
import Maybe

-- type RoutePath = String | Regex
type alias RoutePath = String

type alias Route a = (RoutePath, a)

match : List(Route a) -> Route a -> String -> a
match routes defaultRoute path = 
  let matchRoute = \route memoized ->
        let (routePath, _) = route
        in
            case memoized of
              Just memoizedMatch -> Just memoizedMatch
              Nothing -> if contains path routePath then Just route else Nothing

      matchedRoute = foldl matchRoute Nothing routes
      (_, matchedView) = case matchedRoute of
        Just matchedView -> matchedView
        Nothing -> defaultRoute
  in 
      matchedView
