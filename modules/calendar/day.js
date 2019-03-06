(() => {
    'use strict';

    const Nanocomponent = require('nanocomponent');
    const html = require('nanohtml');
    const css = require('sheetify');

    const style = css`
        :host {
            flex-grow: 1;
            flex-shrink: 1;
            border: 1px solid #dedede;
            font-size: 90%;
        }

        :host.empty {
            background-color: #ededed;
        }

        :host.current .day-no {
            background-color: #42b9ff;
            padding: 2px 6px;
            border-radius: 100%;
            margin-right: -5px;
            color: #fefefe;
            border: 1px solid #595959;
        }

        :host .day-inner-content{
            position: relative;
            height: 100%;
            width: 100%;
        }

        :host .day-description {
            position: absolute;
            bottom: 5%;
            right: 10%;
        }

        :host .day-schedule {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: calc(5% + 20px);

            display: flex;
            flex-direction: column;
            overflow-x: hidden;
            overflow-y: auto;
        }

        :host .day-schedule .day-schedule-item {
            margin: 2px;
            font-size: 70%;
            white-space: nowrap;
            border-bottom: 1px solid #dedede;
        }

        :host .day-schedule-details {
            position: absolute;
            top: 50%;
            left: 50%;
            right: 50%;
            bottom: 50%;

            display: flex;
            justify-content: center;
            align-items: center;

            z-index: 99999;
        }

        :host .schedules-list {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            z-index: 999;
            background-color: #fefefe;
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }

        :host .schedules-list .schedules-list-head {
            position: relative;
            flex-basis: 20px;
            flex-grow: 0;
            flex-shrink: 0;
        }

        :host .schedules-list .schedules-list-head svg {
            position: absolute;
            cursor: pointer;
            right: 20px;
            top: 5px;
        }

        :host .schedules-list .schedules-list-items {
            overflow: auto;
            flex-grow: 1;
            flex-shrink: 1;
        }

        :host .schedules-list .schedules-list-item {
            display: flex;
            flex-direction: column;
            padding: 8px;
            font-size: 90%;
            margin-bottom: 8px;
        }

        :host .schedules-list .schedules-list-item .schedule-list-item-head {
            background-color: #dedede;
            border-radius: 4px;
            padding: 4px;
        }

        :host .schedules-list .schedules-list-item .schedule-list-item-head .schedule-time {
            font-weight: bold;
        }

        :host .schedules-list .schedules-list-item .schedule-list-item-description {
            padding: 4px;
            border-left: 1px solid #dedede;
        }
    `;

    function isSameDay (d1, d2) {
        return d1.getFullYear() === d2.getFullYear() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getDate() === d2.getDate();
    }

    class Day extends Nanocomponent {
        constructor (schedules = []) {
            super();

            this.schedules = schedules;
            this.scheduleListVisible = false;

            this.actualDay = new Date();

            this.currentDay = [];
            this.currentLocation = 'de-DE';

            this.localeDateWeekdayOptions = {
                weekday: 'short'
            };

            this.localeDateDayOptions = {
                day: 'numeric'
            };
        }

        createElement (day) {
            const self = this;
            self.currentDay = day;
            if (!self.currentDay) {
                return html`<div class="day ${style} empty"></div>`;
            }

            let actualDayClass = '';
            if (isSameDay(self.actualDay, self.currentDay)) {
                actualDayClass = 'current';
            }

            const formattedDay = self.currentDay.toLocaleString(self.currentLocation, self.localeDateDayOptions);

            let $schedules = '';
            if (self.schedules.length !== 0) {
                const $scheduleItems = self.schedules
                    .map((scheduleItem) => html`<div class="day-schedule-item">${scheduleItem.title}</div>`);

                $schedules = html`<div class="day-schedule">
                    ${$scheduleItems}
                </div>`;
            }

            let $schedulesList = '';
            if (self.scheduleListVisible) {
                const $schedulesListItems = self.schedules.map((scheduleItem) => {
                    const scheduleTime = new Date(scheduleItem.date).toLocaleTimeString(self.currentLocation);
                    return html`<div class="schedules-list-item">
                        <div class="schedule-list-item-head"><span class="schedule-time">${scheduleTime}</span> - ${scheduleItem.title}</div>
                        <div class="schedule-list-item-description">${scheduleItem.description}</div>
                    </div>`;
                });

                $schedulesList = html`<section class="schedules-list">
                    <section class="schedules-list-head">
                        <svg width="15" height="15" version="1.1" xmlns="http://www.w3.org/2000/svg" onmouseup=${() => hideScheduleList()}>
                            <line x1="1" y1="11" x2="11" y2="1" stroke="black" stroke-width="2"/>
                            <line x1="1" y1="1" x2="11" y2="11" stroke="black" stroke-width="2"/>
                        </svg>
                    </section>
                    <section class="schedules-list-items">${$schedulesListItems}</section>
                </section>`;
            }

            return html`<div class="day ${style} ${actualDayClass}" onclick=${showScheduleList}>
                ${$schedulesList}
                <div class="day-inner-content">
                    ${$schedules}
                    <div class="day-description">
                        <span class="day-no">${formattedDay}</span>
                    </div>
                </div>
            </div>`;

            function showScheduleList () {
                if (!self.scheduleListVisible && self.schedules.length !== 0) {
                    self.scheduleListVisible = true;
                    self.rerender();
                }
            }

            function hideScheduleList () {
                self.scheduleListVisible = false;
                self.rerender();
            }
        }

        // Implement conditional rendering
        update () {
            return true;
        }
    }

    module.exports = Day;
})();
