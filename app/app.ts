import application = require("application");
application.mainModule = "views/calendar";

application.onLaunch = function (context: any) {
    console.log("Application launched.");
    
    //console.log("Device model: " + platform.device.model);
    //console.log("Device type: " + platform.device.deviceType);
    //console.log("OS: " + platform.device.os);
    //console.log("OS version: " + platform.device.osVersion);
    //console.log("SDK Version: " + platform.device.sdkVersion);

    //console.log("Screen width: " + platform.screen.mainScreen.widthPixels);
    //console.log("Screen height: " + platform.screen.mainScreen.heightPixels);
    //console.log("Screen scale: " + platform.screen.mainScreen.scale);        
}

application.onSuspend = function () {
    console.log("Application suspended.");
}

application.onResume = function () {
    console.log("Application resumed.");
}

application.onExit = function () {
    console.log("Application will exit.");
}

application.onLowMemory = function () {
    console.log("Memory is low.");
}

application.onUncaughtError = function (error: application.NativeScriptError) {        
    console.log("App ERROR: " + error.name + "; " + error.message + "; " + error.nativeError);
    console.error(error);
}

application.start();