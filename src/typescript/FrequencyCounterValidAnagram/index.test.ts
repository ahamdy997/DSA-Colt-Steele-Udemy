import validAnagram from "./index.js";
import {describe, expect, test} from '@jest/globals';


describe("check if first string is anagram of the swcond string" , () => {
    test("empty strings" , () => {
        expect(validAnagram('', '')).toBe(true);
    });
    test("aaz and zza" , () => {
        expect(validAnagram('aaz' , 'zza')).toBe(false);
    });
    test('anagram and nagaram' , () => {
        expect(validAnagram('anagram', 'nagaram')).toBe(true);
    });
    test('rat and car' , () => {
        expect(validAnagram('rat', 'car')).toBe(false);
    });
    test('awesome and awesom' , () => {
        expect(validAnagram('awesome', 'awesom')).toBe(false);
    });
    test('amanaplanacanalpanama and acanalmanplanpamana' , () => {
        expect(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')).toBe(false);
    });
    test('qwerty and qeywrt' , () => {
        expect(validAnagram('qwerty', 'qeywrt')).toBe(true);
    });
    test('texttwisttime and timetwisttext' , () => {
        expect(validAnagram('texttwisttime', 'timetwisttext')).toBe(true);
    });
});