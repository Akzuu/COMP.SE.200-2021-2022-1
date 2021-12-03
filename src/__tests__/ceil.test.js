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
  describe('Input is a number with precision', () => {
    it('positive number with positive precision', () => {
      expect(ceil(5.555, 2)).toEqual(5.56)
    })
    it('positive number with negative precision', () => {
      expect(ceil(555.555, -2)).toEqual(600)
    })
    it('negative number with positive precision', () => {
      expect(ceil(-5.555, 2)).toEqual(-5.55)
    })
    it('negative number with negative precision', () => {
      expect(ceil(-555.555, -2)).toEqual(-500)
    })
    it('input is zero', () => {
      expect(ceil(0.000, 2)).toEqual(0.00)
    })
  })
  describe('Input is not a number', () => {
    it('input is a string integer', () => {
      expect(ceil('69.70')).toEqual(70)
    })
    it('input is a string number with precision', () => {
      expect(ceil('34.56', 1)).toEqual(34.6)
    })
    it('input is a string but not a number', () => {
      expect(ceil('this is not a number')).toBeNaN()
    })
    it('input is an array', () => {
      expect(ceil([1, 2, 4])).toBeNaN()
    })
    it('input is an object', () => {
      const obj = {'1': '23'}
      expect(ceil(obj)).toBeNaN()
    })
  })
});