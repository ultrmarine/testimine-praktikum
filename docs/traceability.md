# Traceability Matrix – inventory.js

| Requirement | Type | Test cases | Test names in code | Status |
|---|---|---|---|---|
| REQ-01 | functional | TC-01 | `REQ-01 restock adds quantity to existing sku` | PASS |
| REQ-02 | functional | TC-02 | `REQ-02 restock adds quantity to existing sku` | PASS |
| REQ-03 | functional | TC-03 | `REQ-03 qtu test 1` | PASS |
| REQ-04 | functional | TC-04 | `REQ-04 qtu test 0` | PASS |
| REQ-05 | functional | TC-05 | `REQ-05 qtu test -1` | PASS |
| REQ-06 | performance | TC-06 | `REQ-06 qtu test 2.5` | FAIL → fixed → PASS |
| REQ-07 | security | TC-07 | `REQ-07 Pick returns a new object, original unchanged` | PASS |
| REQ-08 | reliability | TC-08 | `REQ-08 findDuplicateSkus handles 20 000 items under 100 ms` | PASS |
| REQ-09 | reliability | TC-09 | `REQ-09 failed restock leaves original stock unchanged` | PASS |
| REQ-10 | reliability | TC-10 | `REQ-10 Line 45 check` | FAIL → fixed → PASS |
| REQ-11 | reliability | TC-11 | `REQ-11 Line 48 check` | FAIL → fixed → PASS |

by Miron and Martin
