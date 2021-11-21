import ceil from '../ceil';


describe('Ceil', () => {
  describe('Input is a number with no precision', () => {
    it('input is a positive number', () => {
      expect(ceil(5.5)).toEqual(6)
    })
    it('input is a negative number', () => {
      expect(ceil(-5.5)).toEqual(-5)
    })
    it('input is an integer', () => {
      expect(ceil(6)).toEqual(6)
    })
    it('input is a negative integer', () => {
      expect(ceil(-6)).toEqual(-6)
    })
    it('input is zero', () => {
      expect(ceil(0)).toEqual(0)
    })
    it('input is greater than max int', () => {
      expect(ceil(Number.MAX_SAFE_INTEGER + 0.5)).toEqual(Number.MAX_SAFE_INTEGER + 1)
    })
    it('input is lesser than max int', () => {
      expect(ceil(Number.MIN_SAFE_INTEGER - 1.5)).toEqual(Number.MIN_SAFE_INTEGER - 1)
    })
  })
});