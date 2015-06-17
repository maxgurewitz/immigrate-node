module Components where

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Signal exposing (Address, message)
import Actions exposing (..)
import Model exposing (Model)
import Constants exposing (..)
import Dict
import Maybe
import String

type alias Layout = List(Html) -> Html

baseLayout : Layout
baseLayout content =
  div [ class "app" ] content

pageLayout : Model -> Layout
pageLayout model content = 
  div 
    [ class "page-container" ] 
    [ navbar model
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

type alias Component = Model -> Html

homePage : Component
homePage model = pageLayout model 
  [ div 
      [ class "home" ] 
      [ text model.field
      , text "bar"
      , button [ onClick actions.address Update ] [ text "button" ]
      ]
  ]

profileFormInput : Model -> String -> String -> Html
profileFormInput model labelName name = 
  let updateField = 
        (\text -> message actions.address (ProfileFormChange name text))
      currentValue = Dict.get name model.profileForm |> Maybe.withDefault ""
  in  div 
        [ class "form-group" ] 
          [ label 
              [ attribute "for" name 
              , class "col-xs-offset-1"
              ] [ text labelName ]
          , input 
              [ class "immigration-input col-xs-10 col-xs-offset-1" 
              , id name
              , on "input" targetValue updateField
              , value currentValue
              ] 
              [] 
          ]

immigratePage : Component
immigratePage model = 
  let inp = profileFormInput model
  in  pageLayout model
        [ inp "First Name" "firstName"
        , inp "Last Name" "lastName"
        , inp "Age" "age"
        , inp "Country of Origin" "countryOfOrigin"
        , button 
            [ onClick actions.address SubmitProfileForm 
            , class "btn btn-default form-submit"
            , attribute "type" "submit"
            ] 
            [ text "submit" ]
        ]

brk : Html
brk = br [] []

aboutPage : Component
aboutPage model = pageLayout model
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
notFoundPage model =
  text "404"

navbar : Component
navbar model =
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
            ] [ navbarLinks model ]
        ]
    ]

navbarLinks : Component
navbarLinks model =
  let pathsAndNames = [ ("/", "Home")
                      , ("/immigrate", "Immigrate")
                      , ("/about", "About")
                      ]
      pathToLink = \(path, name) ->
        li [ if path == model.path then class "active" else class "" ] 
        [ a [ onClick actions.address (PathChange path) ] [ text name ] ]
      links = List.map pathToLink pathsAndNames
  in 
      ul [ class "nav navbar-nav" ] links
