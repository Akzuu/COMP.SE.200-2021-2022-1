import isEmpty from '../isEmpty';


describe('isEmpty', () => {
  describe('when the input is empty', () => {
    it('returns true when input is null', () => {
      expect(isEmpty(null)).toEqual(true);
    });

    it('returns true when input is boolean', () => {
      expect(isEmpty(true)).toEqual(true);
      expect(isEmpty(false)).toEqual(true);
    });
  
    it('returns true when input is an int', () => {
      expect(isEmpty(1)).toEqual(true);
    });
  
    it('returns true when input is a floating int', () => {
      expect(isEmpty(1.42)).toEqual(true);
    });
  
    it('returns true when input is empty an array', () => {
      expect(isEmpty([])).toEqual(true);
    });
  
    it('returns true when input is empty a map', () => {
      expect(isEmpty(new Map())).toEqual(true);
    });
  
    it('returns true when input is empty a set', () => {
      expect(isEmpty(new Set())).toEqual(true);
    });
  
    it('returns true when input is empty an object', () => {
      expect(isEmpty({})).toEqual(true);
    });
  
    it('returns true when input is empty a string', () => {
      expect(isEmpty('')).toEqual(true);
    });

    it('returns true when input is an empty prototype object', () => {
      expect(isEmpty(Object.prototype)).toEqual(true);
    });

    it('returns true when input is a function', () => {
      expect(isEmpty(() => true)).toEqual(true);
    });

    it('returns true when input is an empty buffer', () => {
      expect(isEmpty(Buffer.alloc(0))).toEqual(true);
    });

    it('returns true when input is an empty typed array', () => {
      expect(isEmpty(new Int16Array())).toEqual(true);
    });
  });
 
  describe('when the input is not empty', () => {
    it('returns false when input is a string', () => {
      expect(isEmpty('a')).toEqual(false);
    });
  
    it('returns false when input is a map', () => {
      const map = new Map();

      map.set('A', 1)
      expect(isEmpty(map)).toEqual(false);
    });
  
    it('returns false when input is a set', () => {
      expect(isEmpty(new Set('A'))).toEqual(false);
    });

    it('returns false when input is an object', () => {
      expect(isEmpty({ userName: 'Jorma' })).toEqual(false);
    });

    it('returns false when input is an array', () => {
      expect(isEmpty([1, 2])).toEqual(false);
    });

    it('returns false when input is a buffer', () => {
      expect(isEmpty(Buffer.alloc(1, 'Cat', 'base64'))).toEqual(false);
    });

    it('returns false when input is a typed array', () => {
      expect(isEmpty(new Int16Array(1))).toEqual(false);
    });

    it('returns false when input is an argument', () => {
      const booleanIsEmpty = () => {
        return isEmpty(arguments);
      };

      expect(booleanIsEmpty()).toEqual(false);
    });

  });
});