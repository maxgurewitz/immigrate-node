module Components where

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Signal exposing (Address, message)
import Actions exposing (..)
import Model exposing (Model)
import Constants exposing (..)
import Graphics.Input.Field exposing (field, defaultStyle)
-- import Graphics.Input exposing (button)

type alias Layout = List(Html) -> Html

baseLayout : Layout
baseLayout content =
  div [ class "app" ] content

pageLayout : Address Action -> Model -> Layout
pageLayout address model content = 
  div 
    [ class "page-container" ] 
    [ navbar address model
    , div 
        [ class "row" ] 
        [ div 
            [ class "panel panel-default col-md-6 col-md-offset-3" ] 
            [ div 
                [ class "panel-body row" ] 
                content 
            ] 
        ]
    ]

type alias Component = Address Action -> Model -> Html

homePage : Component
homePage address model = pageLayout address model 
  [ div 
      [ class "home" ] 
      [ text model.field
      , text "bar"
      , button [ onClick address Update ] [ text "button" ]
      ]
  ]

-- button : Signal.Message -> String -> Element
-- field : Style -> (Content -> Signal.Message) -> String -> Content -> Element
-- send : Address a -> a -> Task x ()
-- message : Address a -> a -> Message
-- fromElement : Element -> Html
-- on : String -> Json.Decoder a -> (a -> Signal.Message) -> Attribute
immigrateInput : Address Action -> String -> Action -> Html
immigrateInput address name updateAction = 
  div 
    [ class "form-group" ] 
    [ label 
        [ attribute "for" name 
        , class "col-xs-offset-1"
        ] [ text name ]
    , input 
        [ class "immigration-input col-xs-10 col-xs-offset-1" 
        , id name
        , on "input" targetValue (\text -> message address (updateAction text))
        ] []
    ]

immigratePage : Component
immigratePage address model = 
  let inputWithAddress = immigrateInput address
  in  (pageLayout address model)
        [ inputWithAddress "First Name" UpdateFirstName
        , inputWithAddress "Last Name" UpdateLastName
        ]

brk : Html
brk = br [] []

aboutPage : Component
aboutPage address model = pageLayout address model
  [ div 
      [ class "col-xs-offset-1" ]
      [ text ("At " ++ companyName ++ " we're all about helping you build a better life.")
        , brk
        , brk
        , text "If you have had trouble with expensive immigration 
        lawyers and confusing governmental bureaucracies give us a try.  
        We will make naturalization easy!"
      ]
  ]

notFoundPage : Component
notFoundPage address model =
  text "404"

navbar : Component
navbar address model =
  nav 
    [ class "navbar navbar-default" ] 
    [ div 
        [ class "container-fluid" ] 
        [ div
            [ class "navbar-header" ] 
            [ button 
                [ attribute "type" "button"
                 , attribute "data-toggle" "collapse"
                 , attribute "data-target" "#js-navbar-collapse"
                 , attribute "aria-controls" "js-navbar-collapse"
                 , attribute "aria-expanded" "true"
                 , class "navbar-toggle collapsed" 
                 ] 
                 [ span [ class "sr-only" ] [ text "Toggle Navigation" ]
                 , span [ class "icon-bar" ] []
                 , span [ class "icon-bar" ] []
                 , span [ class "icon-bar" ] []
                 ]  
            , a 
                [ class "navbar-brand", href "#" ] 
                [ text companyName ]
            ]
        , div 
            [ class "collapse navbar-collapse"
            , attribute "aria-expanded" "false" 
            , id "js-navbar-collapse"
            , attribute "role" "presentation"
            ] [ navbarLinks address model ]
        ]
    ]

navbarLinks : Component
navbarLinks address model =
  let pathsAndNames = [ ("/", "Home")
                      , ("/immigrate", "Immigrate")
                      , ("/about", "About")
                      ]
      pathToLink = \(path, name) ->
        li [ if path == model.path then class "active" else class "" ] 
        [ a [ onClick address (PathChange path) ] [ text name ] ]
      links = List.map pathToLink pathsAndNames
  in 
      ul [ class "nav navbar-nav" ] links
