"use strict";

var _ = require("./01.js");

//2 调用方法
(0, _.getList)(); //调用01.js文件方法
//1 引入01.js方法(默认找js文件，可不加后缀)

(0, _.save)();