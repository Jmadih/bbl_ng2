'use strict';

var express = require('express'),
  bodyParser = require('body-parser'),
  http = require('http'),
  path = require('path'),
  api = require('./routes/api'),
  cors = require('cors');

var app = express();

app.set('port', process.env.PORT || 9000);
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "PUT, DELETE");
  next();
});

// JSON API

/**
 * Introduction
 */
app.get('/api/intro', api.getIntro);
app.put('/api/intro', api.updateIntro);

/**
 *  Experiences
 */
app.get('/api/exp', api.getExp);
app.put('/api/exp/:id',api.updateExp);
app.post('/api/exp', api.addExp);
app.delete('/api/exp/:id', api.deleteExp);

/**
 *  Skills
 */
app.get('/api/skills', api.getSkills);
app.put('/api/skills/:id', api.updateSkill);
app.post('/api/skills', api.addSkill);
app.delete('/api/skills/:id', api.deleteSkill);

/**
 * Education
 */
app.get('/api/educ',api.getEduc);
app.put('/api/educ/:id',api.updateEduc);
app.post('/api/educ',api.addEducation);
app.delete('/api/educ/:id',api.deleteEducation);

app.listen(app.get('port'), function () {
  console.log('✔Express server listening on http://localhost:%d/', app.get('port'));
});
