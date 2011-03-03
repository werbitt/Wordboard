class exports.Cell
	constructor: (@letter = @randomLetter()) ->
		
	randomLetter: () ->
		code = Math.floor( Math.random() * (90 - 65 + 1)) + 65
		letter = String.fromCharCode(Number(code))
		return letter
