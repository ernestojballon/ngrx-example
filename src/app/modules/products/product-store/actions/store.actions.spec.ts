import fromProduct from './store.actions';

describe('loadProducts', () => {
  it('should return an action', () => {
    expect(fromProduct.loadProducts().type).toBe('[On Effect Action] Load Products');
  });
});
