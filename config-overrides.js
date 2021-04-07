const path = require("path");
const {
  override,
  addBabelPlugins,
  babelInclude,
  addWebpackAlias,
  addBabelPresets,
} = require("customize-cra");

const multipleEntry = require("react-app-rewire-multiple-entry")([
  {
    // points to the popup entry point
    entry: "src/lib/index.js",
  },
]);

module.exports = override(
  ...addBabelPlugins(
    "@babel/plugin-transform-react-jsx",
    "@babel/plugin-syntax-dynamic-import",
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: false }]
  ),
  ...addBabelPresets(
    "@babel/preset-react",
    "module:metro-react-native-babel-preset",
    [
      "@babel/preset-env",
      {
        targets: "> 0.25%, not dead",
        modules: "commonjs",
      },
    ]
  ),
  // https://github.com/babel/babel/issues/11606
  // to avoid fs not found error in @babel/core/lib/transformation
  //   You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
  // |
  // | export default class SwipeRating extends Component {
  // >   static defaultProps = {
  // |     type: 'star',
  // |     ratingImage: STAR_IMAGE,
  // addWebpackModuleRule({
  //   test: /\.m?js$/,
  // exclude: /(node_modules)/,
  // use: {
  //   loader: "babel-loader",
  // },
  // }),
  babelInclude(
    [
      path.resolve(__dirname, "node_modules/react-native-elements"),
      path.resolve(__dirname, "node_modules/react-native-vector-icons"),
      path.resolve(__dirname, "node_modules/react-native-ratings"),
      path.resolve(__dirname, "src"),
    ],
    addWebpackAlias({
      "react-native$": "react-native-web",
      "react-native-linear-gradient": "react-native-web-linear-gradient",
    })
  ),
  multipleEntry.addMultiEntry
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // useBabelRc()
);
