var assert = require('assert')

const { sum, mul, sub } = require('../calculator')

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

    it('should subs values', function () {
      assert.equal(sub(2, 2), 0)
      assert.equal(sub(5, 3), 2)
      assert.equal(sub(3, 6), -3)
    })
  })
})
