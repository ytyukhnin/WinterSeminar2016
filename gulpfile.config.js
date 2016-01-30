'use strict';

var GulpConfig = (function () {
    function gulpConfig() {
        this.source = './scripts';
        this.wwwRoot = './wwwroot';

        this.tsOutputPath = this.wwwRoot + '/js';
        
        this.allJavaScript = [this.wwwRoot + '/js/**/*.js'];
        this.allTypeScript = [this.source + '/ts/**/*.tsx', this.source + '/ts/**/*.ts'];

        this.typings = './tools/typings';
        this.libraryTypeScriptDefinitions = [this.typings + '/**/*.ts'];
    }
    return gulpConfig;
})();

module.exports = GulpConfig;