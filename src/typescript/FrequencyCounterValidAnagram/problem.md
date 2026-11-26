# Frequency Counter - validAnagram

## Problem

Given two strings, write a function `validAnagram` that determines whether the second string is an anagram of the first.

An anagram is a word, phrase, or name formed by rearranging the letters of another. For example, `cinema` is formed from `iceman`.

## Examples

```js
validAnagram('', '')                  // true
validAnagram('aaz', 'zza')            // false
validAnagram('anagram', 'nagaram')    // true
validAnagram('rat', 'car')            // false
validAnagram('awesome', 'awesom')     // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
validAnagram('qwerty', 'qeywrt')      // true
validAnagram('texttwisttime', 'timetwisttext') // true
```

## Constraints

- Both strings contain only lowercase letters (`a-z`).
- Strings of different lengths can never be anagrams.

## Requirements

| Requirement      | Value                      |
| ---------------- | -------------------------- |
| Time complexity  | O(n)                       |
| Pattern          | Frequency Counter          |

## Approach

1. If the lengths differ, return `false`.
2. Count how many times each letter appears in the first string.
3. Walk through the second string and decrement the count for each letter.
4. If a letter is missing or its count is already 0, return `false`.
5. If you finish the walk, return `true`.
