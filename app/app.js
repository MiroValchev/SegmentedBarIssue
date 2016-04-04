"use strict";
var application = require("application");
application.mainModule = "views/calendar";
application.onLaunch = function (context) {
    console.log("Application launched.");
    //console.log("Device model: " + platform.device.model);
    //console.log("Device type: " + platform.device.deviceType);
    //console.log("OS: " + platform.device.os);
    //console.log("OS version: " + platform.device.osVersion);
    //console.log("SDK Version: " + platform.device.sdkVersion);
    //console.log("Screen width: " + platform.screen.mainScreen.widthPixels);
    //console.log("Screen height: " + platform.screen.mainScreen.heightPixels);
    //console.log("Screen scale: " + platform.screen.mainScreen.scale);        
};
application.onSuspend = function () {
    console.log("Application suspended.");
};
application.onResume = function () {
    console.log("Application resumed.");
};
application.onExit = function () {
    console.log("Application will exit.");
};
application.onLowMemory = function () {
    console.log("Memory is low.");
};
application.onUncaughtError = function (error) {
    console.log("App ERROR: " + error.name + "; " + error.message + "; " + error.nativeError);
    console.error(error);
};
application.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFPLFdBQVcsV0FBVyxhQUFhLENBQUMsQ0FBQztBQUM1QyxXQUFXLENBQUMsVUFBVSxHQUFHLGdCQUFnQixDQUFDO0FBRTFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsVUFBVSxPQUFZO0lBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUVyQyx3REFBd0Q7SUFDeEQsNERBQTREO0lBQzVELDJDQUEyQztJQUMzQywwREFBMEQ7SUFDMUQsNERBQTREO0lBRTVELHlFQUF5RTtJQUN6RSwyRUFBMkU7SUFDM0UsMkVBQTJFO0FBQy9FLENBQUMsQ0FBQTtBQUVELFdBQVcsQ0FBQyxTQUFTLEdBQUc7SUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBQzFDLENBQUMsQ0FBQTtBQUVELFdBQVcsQ0FBQyxRQUFRLEdBQUc7SUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBQ3hDLENBQUMsQ0FBQTtBQUVELFdBQVcsQ0FBQyxNQUFNLEdBQUc7SUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBQzFDLENBQUMsQ0FBQTtBQUVELFdBQVcsQ0FBQyxXQUFXLEdBQUc7SUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ2xDLENBQUMsQ0FBQTtBQUVELFdBQVcsQ0FBQyxlQUFlLEdBQUcsVUFBVSxLQUFvQztJQUN4RSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDMUYsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN6QixDQUFDLENBQUE7QUFFRCxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUMifQ==