#! /usr/bin/env node

const {bold, blueBright, white, blue} = require('colorette');
const boxen = require('boxen');
const options = {
    padding: 1,
    margin: 0,
    borderStyle: 'double'
  }


const work = white(`Founding Fellow @ ${blueBright('TrustWorks')}`);
const linkebIn = blueBright('https://www.linkedin.com/in/areeb-vohra');
const github = blueBright('https://github.com/areebvohra');
const fiverr = blueBright('https://www.fiverr.com/areebvohra');
const gmail = blueBright('areebvohra@gmail.com');
const npm = blueBright('https://www.npmjs.com/~areebvohra');
const npx = white('npx areebvohra')

const newLine =     '\n';
const heading =     `${white(bold('                     Areeb Vohra'))}`;
const working =     `${white(bold('         Work'))}        ${work}`; 
const linkedIning = `${white(bold('         LinkinIn'))}    ${linkebIn}`;
const githubing =   `${white(bold('         Guthub'))}      ${github}`;
const fiverring =   `${white(bold('         Fiverr'))}      ${fiverr}`;
const gmailing =    `${white(bold('         Gmail'))}       ${gmail}`;
const npming =      `${white(bold('         NPM'))}         ${npm}`;
const npxing =      `${white(bold('         Card'))}        ${npx}`;

let output = `${newLine} ${newLine} ${heading}${newLine} ${newLine} ${working} ${newLine} ${linkedIning} ${newLine} ${githubing} ${newLine} ${fiverring} ${newLine} ${gmailing} ${newLine} ${npming} ${newLine} ${newLine} ${npxing} ${newLine} ${newLine}`;
output =  blue(boxen(output,options));
console.log(output);
