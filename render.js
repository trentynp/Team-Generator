const fs = require("fs")
const path = require("path")
const templateDir = "./templates/"
const employeeGen = require("./lib/employee")
const Engineer = require("./lib/engineer")
const Intern = require("./lib/intern")
const Manager = require("./lib/manager")
let teamMembers = ""

const renderManager = manager => {
    let template = fs.readFileSync(path.resolve(templateDir, "manager.html"), "utf8");
    var managerHtml = ""
    managerHtml = managerHtml + template.replace(/{{ name }}/g, manager.getName())
        .replace(/{{ role }}/g, manager.getRole())
        .replace(/{{ email }}/g, manager.getEmail())
        .replace(/{{ id }}/g, manager.getId())
        .replace(/{{ officeNumber }}/g, manager.getOfficeNumber())
    teamMembers = teamMembers + managerHtml;
    console.log(managerHtml)
};

const renderEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(templateDir, "engineer.html"), "utf8");
    var engineerHtml = ""
    engineerHtml = engineerHtml + template.replace(/{{ name }}/g, engineer.getName())
        .replace(/{{ role }}/g, engineer.getRole())
        .replace(/{{ email }}/g, engineer.getEmail())
        .replace(/{{ id }}/g, engineer.getId())
        .replace(/{{ github }}/g, engineer.getGithub())
    teamMembers = teamMembers + engineerHtml;
    console.log(engineerHtml)
};

const renderIntern = intern => {
    let template = fs.readFileSync(path.resolve(templateDir, "intern.html"), "utf8");
    var internHtml = ""
    internHtml = internHtml + template.replace(/{{ name }}/g, intern.getName())
        .replace(/{{ role }}/g, intern.getRole())
        .replace(/{{ email }}/g, intern.getEmail())
        .replace(/{{ id }}/g, intern.getId())
        .replace(/{{ school }}/g, intern.getSchool())
    teamMembers = teamMembers + internHtml;
    console.log(internHtml)
};

