var util = require('util');


(function (root) {

    var original_console_log = console.log;

    function _wrap_console(opts) {
        return function (value) {
            let argumentArr = Array.prototype.slice.call(arguments,0) || [];
            for (var i = 0,len = argumentArr.length; i < len; i++) {
                if (typeof argumentArr[i] !== 'object') continue;
                argumentArr[i] = util.inspect(argumentArr[i],opts)
            }
            return original_console_log.apply(null,argumentArr);
        }
    }

    function _inspect(opts) {

        opts = Object.assign({
            showHidden: true,
            depth: null,
            colors: true,
            maxArrayLength: 1000
        },opts);

        if (typeof window === 'object') {
            return window.console.log = _wrap_console(opts);
        }

        console.log = _wrap_console(opts);

    }

    if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = _inspect;
    } else if (typeof define === 'function' && define.amd) {
        define("consoleWrap",[],function () {
            return _inspect;
        })
    } else {
        root['consoleWrap'] = _inspect;
    }

})(this);