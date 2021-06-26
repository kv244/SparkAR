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
var insults = ['Sa te fut','Ma cac in gura ta', 'Mwe ba','Cacatule', 'Boule'];
var authors = ['Ponta', 'Sebi Ghita', 'Cetin', 'Zoso', 'Becali', 'Adrian Paunescu'];

// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');

// To use variables and functions across files, use export/import keyword
// export const animationDuration = 10;

// Use import keyword to import a symbol from another file
// import { animationDuration } from './script.js'
/**
 * @param {any[]} a
 */
function getItem(a){
  return a[Math.floor(Math.random() * a.length)];
}

(async function () {  // Enables async/await in JS [part 1]

  // To access scene objects
   const [text2D, copy] = await Promise.all([
     Scene.root.findFirst('2dText0'), 
     Scene.root.findFirst('2dText1')
   ]);
   // another way to access scene objects
    Scene.root.findByPath('Device/Camera/canvas0/2dText0').then((results) => {
      const txtWidget = results[0]; // type is PlanarText
      // Diagnostics.log(txt.text.pin());
      // txt.text is a StringSignal
      const txtValue = txtWidget.text;
      // Diagnostics.watch('becali=> ', txtValue); // ok this works, but how to set it
      // txtWidget.text = 'Cacat'; // ok this works and it is trapped by watch above as well
      var txtShow = getItem(authors) + ' zice: ' + getItem(insults);
      Diagnostics.log(txtShow);
      txtWidget.text = txtShow;
  });
   
  
  // To access class properties
  // const directionalLightIntensity = directionalLight.intensity;

  // To log messages to the console
  // Diagnostics.log('Console message logged from the script.');

})(); // Enables async/await in JS [part 2]
