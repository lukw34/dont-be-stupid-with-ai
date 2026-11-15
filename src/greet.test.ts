import { greet } from './greet';

describe('greet', () => {
  it('greets by name', () => {
    expect(greet('World')).toBe('Hello, World!');
  });
});
