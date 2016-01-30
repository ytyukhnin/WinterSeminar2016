/// <reference path="../../tools/typings/requirejs/require.d.ts" />

requirejs.config({
    //baseUrl: 'wwwroot',
    paths : {
        "react": "../lib/react/react",
        "react-dom": "../lib/react/react-dom"
    }
});

require(["./App"]);