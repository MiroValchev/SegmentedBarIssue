import moment = require("moment");
import calendarModule = require("nativescript-telerik-ui-pro/calendar");

export class Log {    
    public date: moment.Moment;            
    public sex: number;

    constructor(date?: moment.Moment, value?: number) {                                
        this.date = date;            
        this.sex = value;
    }
    
    public getEvent(): calendarModule.CalendarEvent {
        var event: calendarModule.CalendarEvent;

        var title: string = "Sex";
        var date: Date = this.date.toDate();
        var end: Date = this.date.toDate();                        
        
        event = new calendarModule.CalendarEvent(title, date, end);

        //todo currently not implemented by telerik
        event.isAllDay = true;

        return event;
    }

    public isDateInLog(date: moment.Moment): boolean {        
        return date >= this.date;
    }
}   