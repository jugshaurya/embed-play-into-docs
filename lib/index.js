"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _avatar = _interopRequireDefault(require("./content/Avatar/avatar.playground"));

var _card = _interopRequireDefault(require("./content/Card/card.playground"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  AvatarPlayground: _avatar.default,
  CardPlayground: _card.default
};
exports.default = _default;