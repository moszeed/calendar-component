(() => {
    'use strict';

    require('@babel/polyfill');

    const Nanocomponent = require('nanocomponent');
    const html = require('nanohtml');
    const css = require('sheetify');

    const style = css`
        :host {
            display: flex;
            flex-direction: column;

            height: 100%;
            width: 100%;

            font-size: 1em;
            font-family: Arial, Helvetica, sans-serif;
        }
    `;

    const CalendarView = require('./modules/calendar/month.js');
    const TimelineView = require('./modules/timeline/index.js');

    class Calendar extends Nanocomponent {
        constructor (schedules = []) {
            super();

            this.schedules = schedules;
            this.calendarView = new CalendarView(this.schedules);
            this.timelineView = new TimelineView(this.schedules);
        }

        createElement () {
            return html`<div class=${style}>
                ${this.calendarView.render()}
            </div>`;
        }

        // Implement conditional rendering
        update () {
            return true;
        }
    }

    module.exports = Calendar;
})();
