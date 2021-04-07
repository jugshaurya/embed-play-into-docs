"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNativeElements = require("react-native-elements");

var _reactNative = require("react-native");

var _playground = _interopRequireDefault(require("../../components/playground"));

var _reactView = require("react-view");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var CardPlayground = () => {
  var params = (0, _reactView.useView)({
    componentName: "Card",
    props: {
      children: {
        value: " \n        <Card.Title>CARD WITH DIVIDER</Card.Title>\n        <Card.Divider/>\n        <View style={{position:\"relative\",alignItems:\"center\"}}>\n          <Image\n              style={{width:\"100%\",height:100}}\n              resizeMode=\"contain\"\n              source={{ uri: \"https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4\" }}\n            />\n          <Text >Pranshu Chittora</Text>\n         </View>\n         ",
        type: _reactView.PropTypes.ReactNode,
        imports: {
          "react-native": {
            named: ["View", "Image"]
          }
        }
      },
      containerStyle: {
        value: "{}",
        type: _reactView.PropTypes.Object
      },
      wrapperStyle: {
        value: "{}",
        type: _reactView.PropTypes.Object
      }
    },
    scope: {
      Card: _reactNativeElements.Card,
      View: _reactNative.View,
      Image: _reactNative.Image,
      Text: _reactNative.Text
    },
    imports: {
      "react-native-elements": {
        named: ["Card"]
      } // "react-native": {
      //   named: ["View", "Image", "Text"],
      // },

    }
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_playground.default, {
    params: params
  }));
};

var _default = CardPlayground;
exports.default = _default;