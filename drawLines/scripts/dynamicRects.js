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
const Reactive = require('Reactive');

// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');

// To use variables and functions across files, use export/import keyword
// export const animationDuration = 10;

// Use import keyword to import a symbol from another file
// import { animationDuration } from './script.js'

(async function () {  // Enables async/await in JS [part 1]
  const canvas0 = await Scene.root.findFirst("canvas0");

  Scene.root.findByPath('Device/Camera/canvas0/rectangle0').then((results) => {
    var r0 = results[0];
    // Diagnostics.log('r0 is ' + r0.toString());
  });

  // #2 still fails in the catch 
  try{ // try not Promise all but only one #1
    const dynamicRectangle = await Promise.all([
      Scene.create("Plane", {
        "name": "Rectangle",
      })]
    ); //.then((values) => Diagnostics.log(values));
    // canvas0.addChild(dynamicRectangle);
    
  }catch(e){
    Diagnostics.log(e.toString());
  }


  // Add the dynamic objects as children of objects in the Scene panel - they will not be rendered in the effect otherwise
  //focalDistance.addChild(dynamicCanvas);
  

  /*
  if(typeof(rectangle1) === undefined)
    Diagnostics.log('becali');
  else{
    Diagnostics.log('r1 is ' + rectangle1.toString());
    canvas0.addChild(rectangle1);
  }
  */
  // To access scene objects
  // const [directionalLight] = await Promise.all([
  //   Scene.root.findFirst('directionalLight0')
  // ]);

  // To access class properties
  // const directionalLightIntensity = directionalLight.intensity;

  // To log messages to the console
  // Diagnostics.log('Console message logged from the script.');

})(); // Enables async/await in JS [part 2]
