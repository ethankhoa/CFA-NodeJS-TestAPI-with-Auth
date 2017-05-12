var express = require('express');
var jsw = require('jwt');

const authApi = (req, res, next) => {

  console.log("authenticating API request")

  const key = req.body.key ||
    req.query.key ||
    req.headers['x-access-token'];

    var decoded = jsw.verify(key, 'secret');
    console.log(decoded.email)
    let found = false;




    if (key === "1234") {
      next();
    } else {
      res.json(401, {
        success: false,
        message: 'Not Authorized',
      });
    }

  // const key = req.query.key;

  // res.json(401, {
  //   success: false,
  //   message: 'Not Authorized',
  // });

  // next();

};

module.exports = authApi;
