cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "id": "cordova-plugin-fcm.FCMPlugin",
        "file": "plugins/cordova-plugin-fcm/www/FCMPlugin.js",
        "pluginId": "cordova-plugin-fcm",
        "clobbers": [
            "FCMPlugin"
        ]
    },
    {
        "id": "cordova-plugin-powermanagement.powermanagement",
        "file": "plugins/cordova-plugin-powermanagement/www/powermanagement.js",
        "pluginId": "cordova-plugin-powermanagement",
        "clobbers": [
            "window.powermanagement"
        ]
    },
    {
        "id": "cordova-plugin-screen-orientation.screenorientation",
        "file": "plugins/cordova-plugin-screen-orientation/www/screenorientation.js",
        "pluginId": "cordova-plugin-screen-orientation",
        "clobbers": [
            "cordova.plugins.screenorientation"
        ]
    },
    {
        "id": "cordova-plugin-screen-orientation.screenorientation.android",
        "file": "plugins/cordova-plugin-screen-orientation/www/screenorientation.android.js",
        "pluginId": "cordova-plugin-screen-orientation",
        "merges": [
            "cordova.plugins.screenorientation"
        ]
    },
    {
        "id": "cordova-plugin-facebook4.FacebookConnectPlugin",
        "file": "plugins/cordova-plugin-facebook4/www/facebook-native.js",
        "pluginId": "cordova-plugin-facebook4",
        "clobbers": [
            "facebookConnectPlugin"
        ]
    },
    {
        "id": "cordova-plugin-sim.Sim",
        "file": "plugins/cordova-plugin-sim/www/sim.js",
        "pluginId": "cordova-plugin-sim",
        "merges": [
            "window.plugins.sim"
        ]
    },
    {
        "id": "cordova-plugin-sim.SimAndroid",
        "file": "plugins/cordova-plugin-sim/www/android/sim.js",
        "pluginId": "cordova-plugin-sim",
        "merges": [
            "window.plugins.sim"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.0",
    "cordova-plugin-splashscreen": "4.0.0",
    "cordova-plugin-fcm": "1.1.4",
    "cordova-plugin-powermanagement": "1.0.5",
    "cordova-plugin-screen-orientation": "1.4.2",
    "cordova-plugin-facebook4": "1.7.4",
    "cordova-plugin-sim": "1.3.0"
};
// BOTTOM OF METADATA
});