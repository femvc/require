'use strict';
define('./c.js',['./b.js'], function(exports){
    document.getElementById('log').innerHTML += String('c.js - b = ' + b);
    exports.todo = 'todo';
})
