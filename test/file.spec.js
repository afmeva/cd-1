var assert = require('assert')

const { sum, mul } = require('../calculator')

describe('Calculator', function () {
  describe('sum', function () {
    it('should return 3', function () {
      assert.equal(sum(1, 2), 3)
    })

    it('should multiply values', function () {
      assert.equal(mul(2, 2), 4)
      assert.equal(mul(5, 3), 15)
      assert.equal(mul(3, 6), 18)
    })
  })
})
