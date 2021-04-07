"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNativeElements = require("react-native-elements");

var _playground = _interopRequireDefault(require("../../components/playground"));

var _reactView = require("react-view");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var AvatarPlay = () => {
  var params = (0, _reactView.useView)({
    componentName: "Avatar",
    props: {
      activeOpacity: {
        value: 0.2,
        type: _reactView.PropTypes.Number
      },
      avatarStyle: {
        value: "{}",
        type: _reactView.PropTypes.Object
      },
      containerStyle: {
        value: "{ backgroundColor: '#BDBDBD' }",
        type: _reactView.PropTypes.Object
      },
      icon: {
        value: "{}",
        type: _reactView.PropTypes.Object
      },
      iconStyle: {
        value: "{}",
        type: _reactView.PropTypes.Object
      },
      imageProps: {
        value: "{}",
        type: _reactView.PropTypes.Object
      },
      onLongPress: {
        value: "()=>alert('onLongPress')",
        type: _reactView.PropTypes.Function
      },
      onPress: {
        value: "()=>alert('onPress')",
        type: _reactView.PropTypes.Function
      },
      overlayContainerStyle: {
        value: "{}",
        type: _reactView.PropTypes.Object
      },
      placeholderStyle: {
        value: "{}",
        type: _reactView.PropTypes.Object
      },
      rounded: {
        value: true,
        type: _reactView.PropTypes.Boolean,
        description: "Indicates that the button is disabled"
      },
      size: {
        value: "large",
        options: {
          small: "small",
          medium: "medium",
          large: "large",
          xlarge: "xlarge"
        },
        type: _reactView.PropTypes.Enum,
        description: "Defines the size of the Avatar"
      },
      source: {
        value: "{uri:\"\"}",
        type: _reactView.PropTypes.Object
      },
      title: {
        value: "P",
        type: _reactView.PropTypes.String,
        description: "Visible label."
      },
      titleStyle: {
        value: "{}",
        type: _reactView.PropTypes.Object
      },
      renderPlaceholderContent: {
        type: _reactView.PropTypes.ReactNode
      },
      Component: {
        type: _reactView.PropTypes.ReactNode
      },
      ImageComponent: {
        type: _reactView.PropTypes.ReactNode
      } // titleProps: {
      //   value: `{}`,
      //   type: PropTypes.Object,
      // },
      // titleStyle: {
      //   value: `{marginHorizontal: 5}`,
      //   type: PropTypes.Object,
      // },
      // type: {
      //   value: "solid",
      //   defaultValue: "solid",
      //   options: { solid: "Solid", clear: "Clear", outline: "Outline" },
      //   type: PropTypes.Enum,
      //   description: "Defines the type of the button.",
      // },

    },
    scope: {
      Avatar: _reactNativeElements.Avatar
    },
    imports: {
      "react-native-elements": {
        named: ["Avatar"]
      }
    }
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_playground.default, {
    params: params
  }));
};

var _default = AvatarPlay;
exports.default = _default;