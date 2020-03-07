import 'cypress';

it('should equal true', () => {
  expect(true).to.equal(true);
  // Should have TS error
  expect(true).toEqual(true);
});
