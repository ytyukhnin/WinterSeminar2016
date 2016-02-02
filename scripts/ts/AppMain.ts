/// <reference path="../../tools/typings/requirejs/require.d.ts" />

requirejs.config({
    //baseUrl: 'wwwroot',
    paths : {
        "react": "../lib/react/react",
        "react-dom": "../lib/react/react-dom",
        "jquery": "../lib/jquery/dist/jquery", 
        "lodash": "../lib/lodash/dist/lodash",
        "react-bootstrap": "../lib/react-bootstrap/react-bootstrap",
        "bootstrap": "../lib/bootstrap/dist/js/bootstrap.js"
    }
});

require(["./App"]);