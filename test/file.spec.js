var assert = require('assert')

const { sum } = require('../calculator')

describe('Calculator', function () {
  describe('sum', function () {
    it('should return 3', function () {
      assert.equal(sum(1, 2), 3)
    })
  })
})
