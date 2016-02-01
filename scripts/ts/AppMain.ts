/// <reference path="../../tools/typings/requirejs/require.d.ts" />

requirejs.config({
    //baseUrl: 'wwwroot',
    paths : {
        "react": "../lib/react/react",
        "react-dom": "../lib/react/react-dom",
        "jquery": "../lib/jquery/dist/jquery", // loaded with Bootstrap
        "lodash": "../lib/lodash/dist/lodash"
    }
});

require(["./App"]);