const fs = require("fs")
const inquirer = require("inquirer")
let renderFile = require("./render")
const generateManager = renderFile.createManager
const generateEngineer = renderFile.createEngineer
const generateIntern = renderFile.createIntern
const renderHTML = renderFile.renderMain