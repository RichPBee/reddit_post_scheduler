"use strict";

require("core-js/modules/es.symbol.description.js");
require("core-js/modules/es.symbol.async-iterator.js");
require("core-js/modules/es.symbol.match.js");
require("core-js/modules/es.symbol.match-all.js");
require("core-js/modules/es.symbol.replace.js");
require("core-js/modules/es.symbol.search.js");
require("core-js/modules/es.symbol.split.js");
require("core-js/modules/es.array.flat.js");
require("core-js/modules/es.array.flat-map.js");
require("core-js/modules/es.array.includes.js");
require("core-js/modules/es.array.reduce.js");
require("core-js/modules/es.array.reduce-right.js");
require("core-js/modules/es.array.reverse.js");
require("core-js/modules/es.array.sort.js");
require("core-js/modules/es.array.unscopables.flat.js");
require("core-js/modules/es.array.unscopables.flat-map.js");
require("core-js/modules/es.array-buffer.constructor.js");
require("core-js/modules/es.array-buffer.slice.js");
require("core-js/modules/es.global-this.js");
require("core-js/modules/es.json.stringify.js");
require("core-js/modules/es.math.hypot.js");
require("core-js/modules/es.number.parse-float.js");
require("core-js/modules/es.number.parse-int.js");
require("core-js/modules/es.number.to-fixed.js");
require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.object.from-entries.js");
require("core-js/modules/es.parse-float.js");
require("core-js/modules/es.parse-int.js");
require("core-js/modules/es.promise.js");
require("core-js/modules/es.promise.all-settled.js");
require("core-js/modules/es.promise.finally.js");
require("core-js/modules/es.reflect.set.js");
require("core-js/modules/es.regexp.constructor.js");
require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.regexp.flags.js");
require("core-js/modules/es.regexp.test.js");
require("core-js/modules/es.regexp.to-string.js");
require("core-js/modules/es.string.ends-with.js");
require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.string.match.js");
require("core-js/modules/es.string.match-all.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/es.string.search.js");
require("core-js/modules/es.string.split.js");
require("core-js/modules/es.string.starts-with.js");
require("core-js/modules/es.string.trim.js");
require("core-js/modules/es.string.trim-end.js");
require("core-js/modules/es.string.trim-start.js");
require("core-js/modules/es.typed-array.float32-array.js");
require("core-js/modules/es.typed-array.float64-array.js");
require("core-js/modules/es.typed-array.int8-array.js");
require("core-js/modules/es.typed-array.int16-array.js");
require("core-js/modules/es.typed-array.int32-array.js");
require("core-js/modules/es.typed-array.uint8-array.js");
require("core-js/modules/es.typed-array.uint8-clamped-array.js");
require("core-js/modules/es.typed-array.uint16-array.js");
require("core-js/modules/es.typed-array.uint32-array.js");
require("core-js/modules/es.typed-array.fill.js");
require("core-js/modules/es.typed-array.from.js");
require("core-js/modules/es.typed-array.of.js");
require("core-js/modules/es.typed-array.set.js");
require("core-js/modules/es.typed-array.sort.js");
require("core-js/modules/es.typed-array.to-locale-string.js");
require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/web.immediate.js");
require("core-js/modules/web.queue-microtask.js");
require("core-js/modules/web.url.js");
require("core-js/modules/web.url.to-json.js");
require("core-js/modules/web.url-search-params.js");
var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var displayController_1 = require("./appComponents/displayController");
var eventController_1 = require("./appComponents/eventController");
var requestController_1 = require("./appComponents/requestController");
var tempSchedController_1 = require("./appComponents/tempSchedController");
var displayController = new displayController_1.DisplayController();
var eventController = new eventController_1.EventController();
var requestController = new requestController_1.RequestController();
var tSController = new tempSchedController_1.TempSchedController();
var tempSchedule = [];
var submitForm = document.getElementById('file-submitter');
var selectedFileSection = document.getElementById('selected-file');
var createScheduleButton = document.getElementById('create-schedule');
var clearSelectionButton = document.getElementById('clear-selection');
var currentScheduleSection = document.querySelector('.current-schedules');
submitForm.addEventListener('submit', function (e) {
  return __awaiter(void 0, void 0, void 0, function () {
    var fileData;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          return [4 /*yield*/, eventController.submitFile(e)];
        case 1:
          fileData = _a.sent();
          tempSchedule = tSController.addToTempSchedule(fileData, tempSchedule);
          displayController.displaySelectedFile(selectedFileSection, '', e, "Selected File: ");
          document.getElementById('file-selector-input').value = "";
          return [2 /*return*/];
      }
    });
  });
});

createScheduleButton.addEventListener('click', function () {
  return __awaiter(void 0, void 0, void 0, function () {
    var currentSchedule;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          eventController.submitSchedule(tempSchedule);
          return [4 /*yield*/, requestController.requestCurrentSchedule()];
        case 1:
          currentSchedule = _a.sent();
          displayController.displayCurrentSchedules(currentSchedule, currentScheduleSection);
          return [2 /*return*/];
      }
    });
  });
});

clearSelectionButton.addEventListener('click', function () {
  tempSchedule = tSController.clearTempSchedule(tempSchedule);
  eventController.clearSection(selectedFileSection, "Selected File: ");
});