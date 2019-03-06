(() => {
    'use strict';

    const Nanocomponent = require('nanocomponent');
    const html = require('nanohtml');
    const raw = require('nanohtml/raw');
    const css = require('sheetify');

    const style = css`
        :host {
            flex-basis: 80%;
            flex-grow: 1;
            flex-shrink: 0;

            display: flex;
            flex-direction: column;
        }

        :host .month-head {
            display: flex;
            padding: 4px;
            border-bottom: 1px solid #dedede;
        }

        :host .month-head span {
            flex-basis: 30px;
            flex-shrink: 0;
            flex-grow: 0;
            padding: 0 10px;
            cursor: pointer;
        }

        :host .month-head h3 {
            margin: 0;
            padding: 0;
            font-size: 110%;
            flex-grow: 1;
            flex-shrink: 1;
        }

        :host .weeks {
            position: relative;
            flex-shrink: 1;
            flex-grow: 1;

            display: flex;
            flex-direction: column;
        }

        :host .weeks .weekdays {
            display: flex;
            display: grid;
            grid-template-columns: 20px repeat(7, minmax(20px, 1fr));
        }

        :host .weeks .weekdays div {
            flex-grow: 1;
            flex-shrink: 1;
            text-align: center;
            color: #a0a0a0;
        }

        :host .weeks .week {
            flex-shrink: 1;
            flex-grow: 1;
        }
    `;

    const Week = require('./week.js');

    function getWeekNumber (d) {
        d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
        d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
        var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
        var weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
        return [d.getUTCFullYear(), weekNo];
    }

    function getDaysInMonth (month, year) {
        var date = new Date(year, month, 1);
        var days = [];
        while (date.getMonth() === month) {
            days.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }
        return days;
    }

    function isSameDay (d1, d2) {
        return d1.getFullYear() === d2.getFullYear() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getDate() === d2.getDate();
    }

    class Calendar extends Nanocomponent {
        constructor (schedules = []) {
            super();

            const currentDate = new Date();

            this.currentMonth = currentDate.getMonth();
            this.currentYear = currentDate.getFullYear();

            this.schedules = schedules;
            this.currentMonthDays = [];

            this.changeMonth = this.changeMonth.bind(this);
        }

        changeMonth (direction) {
            this.currentMonth = (direction === 'previous') ? this.currentMonth - 1 : this.currentMonth + 1;

            // reset
            if (this.currentMonth > 11) {
                this.currentMonth = 0;
                this.currentYear = ++this.currentYear;
            }

            if (this.currentMonth < 0) {
                this.currentMonth = 11;
                this.currentYear = --this.currentYear;
            }

            this.rerender();
        }

        createElement (month) {
            const self = this;
            if (month) {
                self.currentMonth = month;
            }

            self.currentMonthDays = getDaysInMonth(self.currentMonth, self.currentYear);

            const formattedMonth = self.currentMonthDays[0].toLocaleString('de-DE', { month: 'long', year: 'numeric' });
            const packAsWeek = self.currentMonthDays
                .reduce((store, day) => {
                    const weekNumber = getWeekNumber(day);
                    if (!store[weekNumber]) {
                        store[weekNumber] = [];
                    }

                    store[weekNumber].push(day);

                    return store;
                }, {});
            const $weeks = Object.keys(packAsWeek)
                .map((weekNumber) => {
                    const currentWeekDays = packAsWeek[weekNumber];
                    const currentWeekSchedules = currentWeekDays
                        .map((day) => self.schedules
                            .filter((scheduleDay) => isSameDay(new Date(scheduleDay.date), day))
                        );

                    let week = new Week(currentWeekSchedules);
                    return week.render(currentWeekDays, weekNumber);
                });

            return html`<div class="month ${style}">
                <div class="month-head">
                    <span onclick=${() => self.changeMonth('previous')}>${raw('&lt;')}</span>
                    <h3>${formattedMonth}</h3>
                    <span onclick=${() => self.changeMonth('next')}>${raw('&gt;')}</span>
                </div>
                <div class="weeks">
                    <div class="weekdays">
                        <div></div>
                        <div>Mo</div>
                        <div>Di</div>
                        <div>Mi</div>
                        <div>Do</div>
                        <div>Fr</div>
                        <div>Sa</div>
                        <div>So</div>
                    </div>
                    ${$weeks}
                </div>
            </div>`;
        }

        // Implement conditional rendering
        update () {
            return true;
        }
    }

    module.exports = Calendar;
})();
