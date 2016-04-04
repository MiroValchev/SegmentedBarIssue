"use strict";
var calendarModule = require("nativescript-telerik-ui-pro/calendar");
var Log = (function () {
    function Log(date, value) {
        this.date = date;
        this.sex = value;
    }
    Log.prototype.getEvent = function () {
        var event;
        var title = "Sex";
        var date = this.date.toDate();
        var end = this.date.toDate();
        event = new calendarModule.CalendarEvent(title, date, end);
        //todo currently not implemented by telerik
        event.isAllDay = true;
        return event;
    };
    Log.prototype.isDateInLog = function (date) {
        return date >= this.date;
    };
    return Log;
}());
exports.Log = Log;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxJQUFPLGNBQWMsV0FBVyxzQ0FBc0MsQ0FBQyxDQUFDO0FBRXhFO0lBSUksYUFBWSxJQUFvQixFQUFFLEtBQWM7UUFDNUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUVNLHNCQUFRLEdBQWY7UUFDSSxJQUFJLEtBQW1DLENBQUM7UUFFeEMsSUFBSSxLQUFLLEdBQVcsS0FBSyxDQUFDO1FBQzFCLElBQUksSUFBSSxHQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDcEMsSUFBSSxHQUFHLEdBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVuQyxLQUFLLEdBQUcsSUFBSSxjQUFjLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFM0QsMkNBQTJDO1FBQzNDLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBRXRCLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVNLHlCQUFXLEdBQWxCLFVBQW1CLElBQW1CO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQztJQUM3QixDQUFDO0lBQ0wsVUFBQztBQUFELENBQUMsQUEzQkQsSUEyQkM7QUEzQlksV0FBRyxNQTJCZixDQUFBIn0=