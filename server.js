#!/usr/bin/env node

// server.s

'use strict';

var express = require('express'),
    app = express(),
    pug = require('pug'),
    spawn = require('child_process').spawn, child,
    data = require('./data/data.json'),
    path = require('path'),
    bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get("/", function (request, response) {
    response.render('dropdowndemo', {
        Skills: data['Skills'],
    })
});

app.post("/SkillOpted" , function(request, response){
    response.render('SkillOpted',{
        skill: request.body.dropDown
    })
})

app.get("")

app.listen(3000)
console.log("Your application is running in port 3000")