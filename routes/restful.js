const path 					= require("path");
const ejs 					= require('ejs');
const url 					= require('url');
const os						= require('os');
const fs						= require('fs');
const async					= require('async');
const crypto				= require('crypto');
const iconv = require("iconv-lite");
const func				= require("./../custom_module/func.js");
const db_ 					= require("./../custom_module/db_query.js");