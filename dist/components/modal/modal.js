"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));
require("./modal.css");
var _react = _interopRequireWildcard(require("react"));
function Modal(_ref) {
  var text = _ref.text,
    isShow = _ref.isShow;
  var _useState = (0, _react.useState)(isShow),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    show = _useState2[0],
    setIsShow = _useState2[1];
  var closeModal = function closeModal() {
    setIsShow(!isShow);
  };
  return show ? /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "modal-header__button",
    onClick: closeModal
  }, "X")), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-text"
  }, /*#__PURE__*/_react.default.createElement("h2", null, text))) : null;
}
var _default = Modal;
exports.default = _default;