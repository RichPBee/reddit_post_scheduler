"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TempSchedController = void 0;
var TempSchedController = /** @class */function () {
  function TempSchedController() {}
  TempSchedController.prototype.addToTempSchedule = function (fileData, schedule) {
    schedule.push(fileData);
    return schedule;
  };
  TempSchedController.prototype.clearTempSchedule = function (schedule) {
    schedule = [];
    return schedule;
  };
  return TempSchedController;
}();
exports.TempSchedController = TempSchedController;