import calendarModule = require("nativescript-telerik-ui-pro/calendar");
import {Observable, EventData} from "data/observable";
import {Log} from "../models/log";
import {Day} from "../models/day";
import moment = require("moment");
import frames = require ("ui/frame");

export class CalendarViewModel extends Observable {
    constructor() {
        super();                
    }

    public logs: Array<Log>;       
    public selectionMode: string;
    public events: Array<calendarModule.CalendarEvent>;            
    public selectedDay: Day;    
    
    public loadCalendar(): void {
        this.set("selectionMode", calendarModule.CalendarSelectionMode.Single);
        this.setEvents();
        this.daySelected({ args: moment().startOf('day') });                    
    }    
    
    private setEvents(): void {        
        var events: Array<calendarModule.CalendarEvent> = [];

        var logs: Array<Log> = [];        
        for (var j = 0; j < 28; j++) {           
            if (Math.floor((Math.random() * 2) + 1) == 2) {
                logs.push(new Log(moment().startOf('day').subtract(j, 'days'), 2));
            }            
        }                
        this.logs = logs;

        for (var log of logs) {
            events.push(log.getEvent());
        }
                
        this.set("events", events);
    }
    
    public daySelected(args: any): void {        
        var date: moment.Moment = moment(args.date);                            
        var day: Day = new Day();
        day.date = date;
        
        var logs: Array<Log> = this.logs.filter(function(l) {
            return (l.isDateInLog(date));
        });

        day.sex = 0;
        logs.forEach(log => {
            day.sex = log.sex;
        });
        
        this.set("selectedDay", day);        
    }

    public sexSelected(args: any): void {        
        console.log("Args.newIndes: " + args.newIndex + " - selectedDay.sex: " + this.selectedDay.sex);
    }        
}

export var vm: CalendarViewModel = new CalendarViewModel();