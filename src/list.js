'use strict';

class List {
  constructor() {
    this._head = null;
    this._length = 0;
  }

  get head() {
    return this.isEmpty() ? undefined : this._head.value;
  }

  get length() {
    return this._length;
  }

  _arrayify(value) {
    return Array.isArray(value) ? value : [value];
  }

  _isValid(index) {
    return index >= 0 && index < this.length;
  }

  isEmpty() {
    return !this._head && this._length === 0;
  }
}

module.exports = List;
