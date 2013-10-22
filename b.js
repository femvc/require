'use strict';
document.getElementById('log').innerHTML += String('hello world');
// b will use in c.js
var b;

function a(){
    b = '123';
}
a();

function c(){
    document.getElementById('log').innerHTML += String('b.js - b = '+b);
}
c();