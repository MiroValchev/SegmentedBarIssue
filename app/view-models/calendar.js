"use strict";
var calendarModule = require("nativescript-telerik-ui-pro/calendar");
var observable_1 = require("data/observable");
var log_1 = require("../models/log");
var day_1 = require("../models/day");
var moment = require("moment");
var CalendarViewModel = (function (_super) {
    __extends(CalendarViewModel, _super);
    function CalendarViewModel() {
        _super.call(this);
    }
    CalendarViewModel.prototype.loadCalendar = function () {
        this.set("selectionMode", calendarModule.CalendarSelectionMode.Single);
        this.setEvents();
        this.daySelected({ args: moment().startOf('day') });
    };
    CalendarViewModel.prototype.setEvents = function () {
        var events = [];
        var logs = [];
        for (var j = 0; j < 28; j++) {
            if (Math.floor((Math.random() * 2) + 1) == 2) {
                logs.push(new log_1.Log(moment().startOf('day').subtract(j, 'days'), 2));
            }
        }
        this.logs = logs;
        for (var _i = 0, logs_1 = logs; _i < logs_1.length; _i++) {
            var log = logs_1[_i];
            events.push(log.getEvent());
        }
        this.set("events", events);
    };
    CalendarViewModel.prototype.daySelected = function (args) {
        var date = moment(args.date);
        var day = new day_1.Day();
        day.date = date;
        var logs = this.logs.filter(function (l) {
            return (l.isDateInLog(date));
        });
        day.sex = 0;
        logs.forEach(function (log) {
            day.sex = log.sex;
        });
        this.set("selectedDay", day);
        this.set("selectedDay.sex", day.sex);
    };
    CalendarViewModel.prototype.sexSelected = function (args) {
        console.log("Args.newIndes: " + args.newIndex + " - selectedDay.sex: " + this.selectedDay.sex);
    };
    return CalendarViewModel;
}(observable_1.Observable));
exports.CalendarViewModel = CalendarViewModel;
exports.vm = new CalendarViewModel();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYWxlbmRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBTyxjQUFjLFdBQVcsc0NBQXNDLENBQUMsQ0FBQztBQUN4RSwyQkFBb0MsaUJBQWlCLENBQUMsQ0FBQTtBQUN0RCxvQkFBa0IsZUFBZSxDQUFDLENBQUE7QUFDbEMsb0JBQWtCLGVBQWUsQ0FBQyxDQUFBO0FBQ2xDLElBQU8sTUFBTSxXQUFXLFFBQVEsQ0FBQyxDQUFDO0FBR2xDO0lBQXVDLHFDQUFVO0lBQzdDO1FBQ0ksaUJBQU8sQ0FBQztJQUNaLENBQUM7SUFPTSx3Q0FBWSxHQUFuQjtRQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFTyxxQ0FBUyxHQUFqQjtRQUNJLElBQUksTUFBTSxHQUF3QyxFQUFFLENBQUM7UUFFckQsSUFBSSxJQUFJLEdBQWUsRUFBRSxDQUFDO1FBQzFCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDMUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksU0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkUsQ0FBQztRQUNMLENBQUM7UUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUVqQixHQUFHLENBQUMsQ0FBWSxVQUFJLEVBQUosYUFBSSxFQUFKLGtCQUFJLEVBQUosSUFBSSxDQUFDO1lBQWhCLElBQUksR0FBRyxhQUFBO1lBQ1IsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUMvQjtRQUVELElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFTSx1Q0FBVyxHQUFsQixVQUFtQixJQUFTO1FBQ3hCLElBQUksSUFBSSxHQUFrQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLElBQUksR0FBRyxHQUFRLElBQUksU0FBRyxFQUFFLENBQUM7UUFDekIsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFFaEIsSUFBSSxJQUFJLEdBQWUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBUyxDQUFDO1lBQzlDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztRQUVILEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ1osSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7WUFDWixHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU0sdUNBQVcsR0FBbEIsVUFBbUIsSUFBUztRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuRyxDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQUFDLEFBdkRELENBQXVDLHVCQUFVLEdBdURoRDtBQXZEWSx5QkFBaUIsb0JBdUQ3QixDQUFBO0FBRVUsVUFBRSxHQUFzQixJQUFJLGlCQUFpQixFQUFFLENBQUMifQ==