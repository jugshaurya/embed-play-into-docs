"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = CardPlayground;

var _react = _interopRequireWildcard(require("react"));

var _mdx = require("mdx.macro");

var _cardPlayground = _interopRequireDefault(require("./card.playground.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Content = /*#__PURE__*/(0, _react.lazy)(() => (0, _mdx.importMDX)("../Props/rating.md"));

function CardPlayground() {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_cardPlayground.default, null), /*#__PURE__*/_react.default.createElement(_react.Suspense, {
    fallback: /*#__PURE__*/_react.default.createElement("div", null, "Loading...")
  }, /*#__PURE__*/_react.default.createElement(Content, null)));
}