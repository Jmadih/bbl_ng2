'use strict';

var _ = require('underscore');
var INTRODUCTION = require('./data/introduction').introduction;
var EXPERIENCES = require('./data/workExperience').workExperiences;
var SKILLS = require('./data/skills').skills;
var EDUCATION = require('./data/education').education;

exports.getIntro = function (req, res) {
    console.log('List introduction');
    return res.status(200).json(INTRODUCTION);
}

exports.updateIntro = function (req, res) {
    console.log("Update introduction");
    var introduction = req.body;
    INTRODUCTION = introduction;
    return res.status(200).json(introduction);
}

exports.getExp = function (req, res) {
    console.log("List experiences");
    return res.status(200).json(EXPERIENCES);
}

exports.updateExp = function (req, res) {
    var id = getId(req);
    console.log("Update experience: id = "+ id);
    var exp = req.body;
    var index = _.findIndex(EXPERIENCES, function (p) {
        return p._id === id;
    });
    if (index === -1) {
        return res.status(404).json({error: 'The Experience with id "' + id + '" doesn\'t exist.'});
    }
    var oldExp = EXPERIENCES[index];
    for(var prop in exp) {
        oldExp[prop] = exp[prop]
    }
    EXPERIENCES[index] = oldExp;
    return res.status(200).json(EXPERIENCES);
}

exports.addExp = function (req, res) {
    var exp = req.body;
    exp._id = createId();
    var size = EXPERIENCES.length;
    EXPERIENCES[size] = exp;
    return res.status(200).json(EXPERIENCES);
}

exports.deleteExp = function (req, res) {
    var id = getId(req);
    console.log('Delete experience : id=' + id);

    var index = _.findIndex(EXPERIENCES, function (p) {
        return p._id === id;
    });

    if (index === -1) {
        return res.status(404).json({error: 'The experience with id "' + id + '" doesn\'t exist.'});
    }

    EXPERIENCES.splice(index, 1);
    return res.status(200).json(EXPERIENCES);
}

exports.getSkills = function (req, res) {
    console.log("List skills");
    return res.status(200).json(SKILLS);
}

exports.updateSkill = function (req, res) {
    var id = getId(req);
    console.log("Update skill: id = "+ id);
    var skill = req.body;
    var index = _.findIndex(SKILLS, function (p) {
        return p._id === id;
    });
    if (index === -1) {
        return res.status(404).json({error: 'The Skill with id "' + id + '" doesn\'t exist.'});
    }
    var oldSkill = SKILLS[index];
    for(var prop in skill) {
        oldSkill[prop] = skill[prop]
    }
    SKILLS[index] = oldSkill;
    return res.status(200).json(SKILLS);
}

exports.addSkill = function (req, res) {
    var exp = req.body;
    exp._id = createId();
    var size = SKILLS.length;
    SKILLS[size] = exp;
    return res.status(200).json(SKILLS);
}

exports.deleteSkill = function (req, res) {
    var id = getId(req);
    console.log('Delete skill : id=' + id);

    var index = _.findIndex(SKILLS, function (p) {
        return p._id === id;
    });

    if (index === -1) {
        return res.status(404).json({error: 'The skill with id "' + id + '" doesn\'t exist.'});
    }

    SKILLS.splice(index, 1);
    return res.status(200).json(SKILLS);
}

exports.getEduc = function (req, res) {
    console.log("List education");
    return res.status(200).json(EDUCATION);
}

exports.updateEduc = function (req, res) {
    var id = getId(req);
    console.log("Update education: id = "+ id);
    var education = req.body;
    var index = _.findIndex(EDUCATION, function (p) {
        return p._id === id;
    });
    if (index === -1) {
        return res.status(404).json({error: 'The education with id "' + id + '" doesn\'t exist.'});
    }
    var oldEduc = EDUCATION[index];
    for(var prop in education) {
        oldEduc[prop] = education[prop]
    }
    EDUCATION[index] = oldEduc;
    return res.status(200).json(EDUCATION);
}

exports.addEducation = function (req, res) {
    var exp = req.body;
    exp._id = createId();
    var size = EDUCATION.length;
    EDUCATION[size] = exp;
    return res.status(200).json(EDUCATION);
}

exports.deleteEducation = function (req, res) {
    var id = getId(req);
    console.log('Delete education : id=' + id);

    var index = _.findIndex(EDUCATION, function (p) {
        return p._id === id;
    });

    if (index === -1) {
        return res.status(404).json({error: 'The education with id "' + id + '" doesn\'t exist.'});
    }

    EDUCATION.splice(index, 1);
    return res.status(200).json(EDUCATION);
}

function getParam(req, param) {
    return req.params[param];
}

function getId(req) {
    var param = getParam(req, 'id');
    return param;
}

function createId() {
    return new Date().getTime()+"";
}
