vows = require 'vows'
assert = require 'assert'
wordboard = require '../../lib/board.js'

vows
	.describe('Board')
	.addBatch

		'A new board':
			topic: -> new wordboard.Board
			
			'has an array of cells': (board) ->
				assert.isArray board.cells

	.export(module)
