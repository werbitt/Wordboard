vows = require 'vows'
assert = require 'assert'
cell = require '../../lib/cell.js'

vows
	.describe('Cell')
	.addBatch

		'A new cell':
			topic: -> new cell.Cell
			
			'has an letter': (c) ->
				assert.match c.letter, /[A-Z]/

	.export(module)
