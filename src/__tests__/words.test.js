import words from '../words';

describe('words', () => {
  it('splits normal string into an array of its words', () => {
    expect(words('fred, barney & pebbles')).toEqual(['fred', 'barney', 'pebbles'])
  });

  it('allows using custom regexp as the pattern', () => {
    expect(words('fred, barney & pebbles', /[^, ]+/g)).toEqual(['fred', 'barney', '&', 'pebbles']);
  });

  it('handles empty string as an input', () => {
    expect(words('')).toEqual([]);
  });

  it('handles pattern which does not match anything', () => {
    expect(words('Cat walked the line', /[]+g/));
  });
});
