(function() {
  var assert, cell, vows;
  vows = require('vows');
  assert = require('assert');
  cell = require('../../lib/cell.js');
  vows.describe('Cell').addBatch({
    'A new cell': {
      topic: function() {
        return new cell.Cell;
      },
      'has an letter': function(c) {
        return assert.match(c.letter, /[A-Z]/);
      }
    }
  })["export"](module);
}).call(this);
