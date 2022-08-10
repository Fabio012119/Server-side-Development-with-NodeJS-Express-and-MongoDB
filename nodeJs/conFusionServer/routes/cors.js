const express = require('express');
const cors = require('cors');
const app = express();

const whitelist = ['http://127.0.0.1:3000','https://127.0.0.1:3443'];
var corsOptionsDelegate = (req,callback) =>{
  var corsOptions;

  if(whitelist.indexOf(req.header('Origin'))!==-1) {
    corsOptions = { origin:true };
  }
  else {
    corsOptions = { origin:false };
  }
  callback(null,corsOptions);
  };
exports.cors=cors();
exports.corsWithOptions = cors(corsOptionsDelegate);
