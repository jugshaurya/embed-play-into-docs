"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Drawer = _interopRequireDefault(require("./Drawer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Root = () => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h4", null, "Hello From Root Drawerrrr miimics"), /*#__PURE__*/_react.default.createElement(_Drawer.default, null));
};

var _default = Root;
exports.default = _default;