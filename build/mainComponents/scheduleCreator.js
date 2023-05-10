"use strict";

/// <reference path="Components.ts">
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScheduleCreator = void 0;
var ScheduleCreator = /** @class */function () {
  function ScheduleCreator() {}
  ScheduleCreator.prototype.createNewSchedule = function (fileData) {
    return this.createSchedule(fileData);
  };
  ScheduleCreator.prototype.createSchedule = function (fileData) {
    var newSchedule = [];
    var headers = fileData[0].split(',');
    for (var i = 1; i < Array.length; i++) {
      var thisPostData = fileData[i].split(',');
      var thisPostObject = {};
      for (var j = 0; j < thisPostData.length; j++) {
        thisPostObject[headers[j].trim()] = thisPostData[j].trim();
      }
      newSchedule.push(thisPostObject);
    }
    return this.checkPossiblePosts(newSchedule);
  };
  ScheduleCreator.prototype.checkPossiblePosts = function (postArray) {
    var possiblePostArray = [];
    var d1 = Date.parse("".concat(this.getCurrentDate, "T").concat(this.getCurrentTime));
    postArray.forEach(function (post) {
      var d2 = Date.parse("".concat(post.date, "T").concat(post.time));
      if (d2 > d1) {
        possiblePostArray.push(post);
      }
    });
    return possiblePostArray;
  };
  ScheduleCreator.prototype.getCurrentTime = function () {
    var date = new Date();
    var hours = date.getHours() >= 10 ? date.getHours() : "0".concat(date.getHours());
    var minutes = date.getMinutes() >= 10 ? date.getMinutes() : "0".concat(date.getMinutes());
    return "".concat(hours, ":").concat(minutes);
  };
  ScheduleCreator.prototype.getCurrentDate = function () {
    var date = new Date();
    var month = date.getMonth() >= 9 ? date.getMonth() + 1 : "0".concat(date.getMonth() + 1);
    return "".concat(date.getFullYear(), "-").concat(month, "-").concat(date.getDate());
  };
  ScheduleCreator.prototype.addToScheduleArray = function (possiblePosts, scheduleArray) {
    scheduleArray.push(possiblePosts);
    return scheduleArray;
  };
  return ScheduleCreator;
}();
exports.ScheduleCreator = ScheduleCreator;