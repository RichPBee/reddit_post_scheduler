"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayController = void 0;
var DisplayController = /** @class */ (function () {
    function DisplayController() {
    }
    DisplayController.prototype.displaySelectedFile = function (docSection, fileName, event, baseText) {
        if (baseText) {
            if (event) {
                var file = event.target[0].files[0];
                docSection.innerText = "".concat(baseText).concat(file.path);
            }
            else {
                docSection.innerText = "".concat(baseText).concat(fileName);
            }
        }
        else {
            if (event) {
                var file = event.target[0].files[0];
                docSection.innerText = "".concat(baseText).concat(file.path);
            }
            else {
                docSection.innerText = "".concat(fileName);
            }
        }
    };
    DisplayController.prototype.displayCurrentSchedules = function (schedule, parentSection) {
        schedule.forEach(function (schedule) {
            var scheduleCard = document.createElement('div');
            scheduleCard.innerText = "".concat(schedule.length);
            scheduleCard.setAttribute('height', '20%');
            scheduleCard.setAttribute('width', '40%');
            scheduleCard.setAttribute('border', '3px solid black');
            scheduleCard.setAttribute('background-color', 'grey');
            parentSection.appendChild(scheduleCard);
        });
    };
    return DisplayController;
}());
exports.DisplayController = DisplayController;
