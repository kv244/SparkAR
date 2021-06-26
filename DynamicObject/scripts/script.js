// Load in the required modules
const Scene = require('Scene');
const Reactive = require('Reactive');
const Diagnostic = require('Diagnostics');
const Time = require("Time");
const Materia = require("Materials");

// Enables async/await in JS [part 1]
(async function() {

    // Locate the focal distance object in the scene
    const focalDistance = await Scene.root.findFirst("Focal Distance");
    Diagnostic.log("Started");

    try {
        // Create a single instance of each scene object supported by dynamic instantiation
        const [dynamicPlane, dynamicCanvas, dynamicRectangle, materia] =
        await Promise.all([
            Scene.create("Plane", {
                "name": "Plane",
                "width": 0.1,
                "height": 0.1,
                "y": -0.2,
                "hidden": false,
            }),
            Scene.create("Canvas", {
                "name": "Canvas",
            }),
            Scene.create("PlanarImage", {
                "name": "Rectangle"
            }),

            Materia.create("DefaultMaterial", {
                "name": "Default Material",
                "blendMode": "ALPHA",
                "opacity": 1.0
            }),
        ]);

        //const mat = Materia.findFirst("material0");
        dynamicRectangle.material = materia;
        Diagnostic.log("Materia " + materia.toString());

        const refresh = 500;
        const interval = Time.setInterval(changeRectSize, refresh);

        // Add the dynamic objects as children of objects in the Scene panel - they will not be rendered in the effect otherwise
        focalDistance.addChild(dynamicCanvas);
        dynamicCanvas.addChild(dynamicRectangle);

        // change size of displayed rectangle
        function changeRectSize() {
            if (Math.random() * 10 > 5) {
                dynamicRectangle.height = Reactive.val(-1);
                dynamicRectangle.width = Reactive.val(-1);
                Diagnostic.log("RND USR ");
            } else {
                dynamicRectangle.height = Reactive.val(Math.random() * 50);
                dynamicRectangle.width = Reactive.val(Math.random() * 50);
            }
        }
    } catch (x) {
        Diagnostic.log("Exception " + x.toString());
    }
    // Enables async/await in JS [part 2]
})();