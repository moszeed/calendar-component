(() => {
    'use strict';

    const Nanocomponent = require('nanocomponent');
    const html = require('nanohtml');
    const css = require('sheetify');

    const Day = require('./day.js');

    const style = css`
        :host {
            display: flex;
            display: grid;
            grid-template-columns: 20px repeat(7, minmax(20px, 1fr));
        }

        :host .week-kw {
            flex-basis: 20px;
            padding: 2px;
            font-size:80%;
            background-color: #a0a0a0;
        }
    `;

    function flatten (arr) {
        return [].concat.apply([], arr);
    }

    function isSameDay (d1, d2) {
        return d1.getFullYear() === d2.getFullYear() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getDate() === d2.getDate();
    }

    class Week extends Nanocomponent {
        constructor (schedules = []) {
            super();
            this.currentWeek = [];
            this.currentWeekNumber = null;

            this.schedules = schedules;

            this.currentWeekDayOrder = [1, 2, 3, 4, 5, 6, 0];
        }

        createElement (week, weekNumber) {
            const self = this;

            self.currentWeekNumber = weekNumber;
            self.currentWeek = week;

            const $days = self.currentWeekDayOrder
                .map((i) => {
                    const currentDay = self.currentWeek.find((weekDay) => weekDay.getDay() === i);
                    if (!currentDay) {
                        return new Day().render();
                    }

                    const currentDaySchedules = self.schedules.map(
                        (scheduleItem) => scheduleItem.filter(
                            (scheduleArrayItem) => isSameDay(new Date(scheduleArrayItem.date), currentDay)
                        )
                    );

                    const day = new Day(flatten(currentDaySchedules));
                    return day.render(currentDay);
                });

            return html`<div class="week ${style}">
                <div class="week-kw">${self.currentWeekNumber.split(',').pop()}</div>
                ${$days}
            </div>`;
        }

        // Implement conditional rendering
        update () {
            return true;
        }
    }

    module.exports = Week;
})();
