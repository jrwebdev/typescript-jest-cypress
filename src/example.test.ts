it('should equal true', () => {
  expect(true).toEqual(true);
  // Should have TS error
  expect(true).to.equal(true);
});
