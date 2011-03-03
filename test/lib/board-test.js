(function() {
  var assert, vows, wordboard;
  vows = require('vows');
  assert = require('assert');
  wordboard = require('../../lib/board.js');
  vows.describe('Board').addBatch({
    'A new board': {
      topic: function() {
        return new wordboard.Board;
      },
      'has an array of cells': function(board) {
        return assert.isArray(board.cells);
      }
    }
  })["export"](module);
}).call(this);
