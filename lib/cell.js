(function() {
  exports.Cell = (function() {
    function Cell(letter) {
      this.letter = letter != null ? letter : this.randomLetter();
    }
    Cell.prototype.randomLetter = function() {
      var code, letter;
      code = Math.floor(Math.random() * (90 - 65 + 1)) + 65;
      letter = String.fromCharCode(Number(code));
      return letter;
    };
    return Cell;
  })();
}).call(this);
