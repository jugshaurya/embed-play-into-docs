"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Avatar = _interopRequireDefault(require("../../content/Avatar"));

var _Card = _interopRequireDefault(require("../../content/Card"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// importing playground and show side by side
// side by side to avoid routing(for mimicing routing!)
var Drawer = () => {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "space-between",
      padding: "20px",
      border: "3px solid black",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("h3", null, "I am a Drawer "), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "80vw",
      border: "3px solid black",
      margin: "20px"
    }
  }, /*#__PURE__*/_react.default.createElement(_Avatar.default, null)), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: "80vw",
      border: "3px solid black",
      margin: "20px"
    }
  }, /*#__PURE__*/_react.default.createElement(_Card.default, null)), /*#__PURE__*/_react.default.createElement("hr", null));
};

var _default = Drawer;
exports.default = _default;