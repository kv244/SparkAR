const Animation = require('Animation');
const Scene = require('Scene');
const TouchGestures = require('TouchGestures');

const sceneRoot = Scene.root;

// NOT COMPLETE, FROM HERE:
// https://sparkar.facebook.com/ar-studio/learn/tutorials/scripting#scaling-the-boombox-with-pinch-gestures
Promise.all([
    sceneRoot.findFirst('base_jnt'),
    sceneRoot.findFirst('speaker_left_jnt'),
    sceneRoot.findFirst('speaker_right_jnt'), 
    sceneRoot.findFirst('planeTracker0')
])
.then(function(objects) {
    const base = objects[0];
    const speakerLeft = objects[1];
    const speakerRight = objects[2];
    const planeTracker = objects[3];
    
    TouchGestures.onPan().subscribe(function(gesture) {
      planeTracker.trackPoint(gesture.location, gesture.state);
    });

    const baseDriverParameters = {
        durationMilliseconds: 400,
        loopCount: Infinity,
        mirror: true
    };

    const baseDriver = Animation.timeDriver(baseDriverParameters);
    baseDriver.start();

    const baseSampler = Animation.samplers.easeInQuint(0.9,1);
    const baseAnimation = Animation.animate(baseDriver,baseSampler);
    const baseTransform = base.transform;

    baseTransform.scaleX = baseAnimation;
    baseTransform.scaleY = baseAnimation;
    baseTransform.scaleZ = baseAnimation;
    
    const speakerDriverParameters = {
        durationMilliseconds: 200,
        loopCount: Infinity,
        mirror: true
    };

    const speakerDriver = Animation.timeDriver(speakerDriverParameters);
    speakerDriver.start();

    const speakerSampler = Animation.samplers.easeOutElastic(0.7,0.85);
    const speakerAnimation = Animation.animate(speakerDriver,speakerSampler);
    const speakerLeftTransform = speakerLeft.transform;

    speakerLeftTransform.scaleX = speakerAnimation;
    speakerLeftTransform.scaleY = speakerAnimation;
    speakerLeftTransform.scaleZ = speakerAnimation;

    const speakerRightTransform = speakerRight.transform;

    speakerRightTransform.scaleX = speakerAnimation;
    speakerRightTransform.scaleY = speakerAnimation;
    speakerRightTransform.scaleZ = speakerAnimation;
});