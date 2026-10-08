# Test Case Specification – inventory.js

| ID | Requirement | Type | Priority | Precondition | Input | Expected result | Test name in code |
|---|---|---|---|---|---|---|---|
| TC-01 | REQ-01 | functional | High | stock = { 'A-1': 5 } | restock with [{ sku: 'A-1', qty: 3 }] | { 'A-1': 8 } | REQ-01 restock adds quantity to existing sku |
| TC-02 | REQ-02| functional | High | stock = { 'A-1': 5 } | restock, then read stock | stock['A-1'] still 3 | REQ-02 restock adds quantity to existing sku |
| TC-03 | REQ-03| functional | High | stock = { 'A-1': 5 } | restock, then read stock | stock['A-1'] still 1 | REQ-03 qty test 1 |
| TC-04 | REQ-04| functional | High | stock = { 'A-1': 5 } | restock, then read stock | stock['A-1'] still 0 | REQ-04 qty test 0 |
| TC-05 | REQ-05| functional | High | stock = { 'A-1': 5 } | restock, then read stock | stock['A-1'] still -1 | REQ-05 qty test -1|
| TC-06 | REQ-06| functional | High | stock = { 'A-1': 5 } | restock, then read stock | stock['A-1'] still 2.5 | REQ-06 qty test 2.5|
| TC-08 | REQ-08 | performance | High | 20 000 items, 1 000 duplicates | findDuplicateSkus | < 100 ms | REQ-08 findDuplicateSkus handles 20 000 items under 100 ms |
| TC-09 | REQ-09 | performance | High | stock = { 'A-1': 5 } | restock, then read stock | stock, [{ sku: 'A-1', qty: 1 }, { sku: 'B-2', qty: 0 }]) | REQ-09 failed restock leaves original stock unchanged |
