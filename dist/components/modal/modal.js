"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./modal.css");
var _react = _interopRequireDefault(require("react"));
function Modal(_ref) {
  var text = _ref.text,
    closeModal = _ref.closeModal;
  var handleClick = function handleClick(e) {
    if (e.target !== e.currentTarget) {
      return;
    }
    closeModal();
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-container",
    onClick: handleClick
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "modal-header__button",
    onClick: closeModal
  }, "X")), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-text"
  }, /*#__PURE__*/_react.default.createElement("h2", null, text))));
}
var _default = Modal;
exports.default = _default;