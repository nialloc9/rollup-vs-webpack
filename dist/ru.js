'use strict';

const foo = () => {console.log("foo");};

const bar = () => { foo(); };

module.exports = bar;
