# Multiple Pointers - countUniqueValues

## Problem

Implement a function called `countUniqueValues`, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

## Examples

```js
countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4
```

## Constraints

- The array will always be sorted
- The array can contain negative numbers
- An empty array returns 0

## Requirements

| Requirement | Complexity |
| ----------- | ---------- |
| Time        | O(n)       |
| Space       | O(n)       |

## Bonus

Solve it with constant or O(1) space and O(n) time.
