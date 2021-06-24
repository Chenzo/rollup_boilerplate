
const app = require('express')();
const express = require("express");
const http = require("http").Server(app);

var PORT = process.env.PORT || 3002; 


export const expressModule = (() => {

  

  const initalizeServer = function() {

    app.use(express.static(__dirname + '/www'));
    //app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');
    app.set('views', __dirname + '/www');


    app.get('/', function(request, response, next) {
      let template = "index.html";
      response.render(template,{root: __dirname});
    });

    app.get("/ping", function(req, res) {

      res.send("pong");
      res.status(200).end();
    });

    http.listen(PORT, function() {
      console.log("server started!!");
    });

  };

  const getHTTP = function () {
      return http;
  }


  console.log("expressModule loaded...");

  return {
    initalizeServer: initalizeServer,
    getHTTP: getHTTP
  };
})();