Elm.Native.Main = {};
Elm.Native.Main.make = function(elm) { 
    elm.Native = elm.Native || {};
    elm.Native.Main = elm.Native.Main || {};
    if (elm.Native.Main.values) { return elm.Native.Main.values; }; 

    return { 
      initialPath: window.location.pathname 
    }; 
};
