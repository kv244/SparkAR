/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//
// For projects created with v87 onwards, JavaScript is always executed in strict mode.
//==============================================================================

// How to load in modules
const Scene = require('Scene');

// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');
export const Locale = require('Locale');

// To use variables and functions across files, use export/import keyword
// export const animationDuration = 10;

// Use import keyword to import a symbol from another file
// import { animationDuration } from './script.js'

(async function () {  // Enables async/await in JS [part 1]

  // To access scene objects
  const [t3dText0] = await Promise.all([
     Scene.root.findFirst('t3dText0')
  ]); Diagnostics.log([t3dText0.name]); // how do you set the text property

  // To access class properties
  // const directionalLightIntensity = directionalLight.intensity;
  // if (navigator.geolocation) {
  // supported
  // }
  // To log messages to the console
  Locale.language.monitor({ fireOnInitialValue: true }).subscribe(function(/** @type {{ newValue: string; }} */ e) {
    Diagnostics.log("Device language is '" + e.newValue + "'.");
});

})(); // Enables async/await in JS [part 2]
