"use strict";
var calendar_1 = require("../view-models/calendar");
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = calendar_1.vm;
    calendar_1.vm.loadCalendar();
}
exports.pageLoaded = pageLoaded;
function navigatingFrom(args) {
    var page = args.object;
    page.bindingContext.saveSelectedDay();
}
exports.navigatingFrom = navigatingFrom;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYWxlbmRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEseUJBQWlCLHlCQUF5QixDQUFDLENBQUE7QUFJM0Msb0JBQTJCLElBQUk7SUFDM0IsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixJQUFJLENBQUMsY0FBYyxHQUFHLGFBQUUsQ0FBQztJQUN6QixhQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7QUFDdEIsQ0FBQztBQUplLGtCQUFVLGFBSXpCLENBQUE7QUFFRCx3QkFBK0IsSUFBSTtJQUMvQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxFQUFFLENBQUM7QUFDMUMsQ0FBQztBQUhlLHNCQUFjLGlCQUc3QixDQUFBIn0=