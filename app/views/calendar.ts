import {vm} from "../view-models/calendar";
import view = require("ui/core/view");
import calendarModule = require("nativescript-telerik-ui-pro/calendar");

export function pageLoaded(args) { 
    var page = args.object;
    page.bindingContext = vm;        
    vm.loadCalendar();
}

export function navigatingFrom(args) {
    var page = args.object;
    page.bindingContext.saveSelectedDay();
}