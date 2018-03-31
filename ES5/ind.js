'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ship = function () {
  function ship(color) {
    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
    var speed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;

    _classCallCheck(this, ship);

    this.size = size;
    this.speed = speed;
    this.color = color;
  }

  _createClass(ship, [{
    key: 'getSpeed',
    value: function getSpeed() {
      return this.speed;
    }
  }, {
    key: 'setColor',
    value: function setColor(newColor) {
      this.color = newColor;
    }
  }]);

  return ship;
}();

var cruise = new ship('red');
console.log(cruise.size);