const { restock, pick, findDuplicateSkus } = require('./inventory');

// ---- Functional tests (etapp 1a) ----
test('REQ-01 restock adds quantity to existing sku', () => {
  const stock = { 'A-1': 5 };
  expect(restock(stock, [{ sku: 'A-1', qty: 3 }])).toEqual({ 'A-1': 8 });
});

test('REQ-02 restock adds quantity to existing sku', () => {
  const stock = { 'A-1': 5 };
  restock(stock, [{sku: 'A-1', qty: 3}])
  expect(stock["A-1"]).toBe(5)
});

test('REQ-03 qty test 1', () => {
  const stock = { 'A-1': 5 };
  restock(stock, [{sku: 'A-1', qty: 1}])
  expect(stock["A-1"]).toBe(5)
});

test('REQ-03 qty test 0', () => {
  const stock = { 'A-1': 5 };
  restock(stock, [{sku: 'A-1', qty: 0}])
  expect(stock["A-1"]).toThrow('qty must be a positive whole number')
});

test('REQ-03 qty test -1', () => {
  const stock = { 'A-1': 5 };
  restock(stock, [{sku: 'A-1', qty: -1}])
  expect(stock["A-1"]).toThrow('qty must be a positive whole number')
});

test('REQ-03 qty test 2.5', () => {
  const stock = { 'A-1': 5 };
  restock(stock, [{sku: 'A-1', qty: 2.5}])
  expect(stock["A-1"]).toThrow('qty must be a positive whole number')
});

test('REQ-04 pick returns a new object, original unchanged', () => {
  const stock = { 'A-1': 5 };
  pick(stock, 'A-1', 2);
  expect(stock['A-1']).toBe(5);
});

test('REQ-05 findDuplicateSkus handles 20 000 items under 100 ms', () => {
  const items = [];
  for (let i = 0; i < 20000; i++) items.push({ sku: 'SKU-' + (i % 19000) });
  const t0 = performance.now();
  findDuplicateSkus(items);
  const ms = performance.now() - t0;
  expect(ms).toBeLessThan(100);
});


// ---- Performance test (etapp 1b) ----
// TODO: generate 20 000 items with some duplicates, measure findDuplicateSkus,
// assert it finishes under 100 ms. See project guide chapter 3.2.

// ---- Security and reliability tests (etapp 1c) ----
// TODO: REQ-07 with test.each, REQ-08 original stock unchanged after a failed restock.
