import { ForbiddenNames } from './forbidden-names';

describe('ForbiddenNames', () => {
  it('should create an instance', () => {
    const directive = new ForbiddenNames();
    expect(directive).toBeTruthy();
  });
});
