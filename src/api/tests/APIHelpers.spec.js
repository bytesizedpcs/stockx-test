const assert = require('chai').assert;
const { getAverage } = require('../utils/APIHelpers');

describe('APIHelpers.spec.js', () => {
  describe('getAverage(sizeSum, sizeLength)', () => {
    it('should return false on missing arguments', () => {
      assert(getAverage() === false);
    })
    it('should return false when given length < 1', () => {
      assert(getAverage(20, 0) === false);
    })
    it('should return false when given sum < 1', () => {
      assert(getAverage(0, 3) === false);
    })
    it('should return tts average', () => {
      assert(getAverage(113, 22) === 113/22);
    })
    it('should return tts average when given string arguments', () => {
      assert(getAverage('113', '22') === 113/22);
    })
  })
})