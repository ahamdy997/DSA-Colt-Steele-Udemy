import { describe , test , expect } from '@jest/globals';
import countUniaueValueSpaceOfn , {countUniaueValueSpaceOf1} from './index.js';

describe('function accepts sorted array and count unique values Space Complexity O(n)', () => {
    test('[1,1,1,1,1,2]', () => {
        expect(countUniaueValueSpaceOfn([1,1,1,1,1,2])).toBe(2);
    });
    test('[1,2,3,4,4,4,7,7,12,12,13]', () => {
        expect(countUniaueValueSpaceOfn([1,2,3,4,4,4,7,7,12,12,13])).toBe(7);
    });
    test('[]', () => {
        expect(countUniaueValueSpaceOfn([])).toBe(0);
    });
    test('[-2,-1,-1,0,1]', () => {
        expect(countUniaueValueSpaceOfn([-2,-1,-1,0,1])).toBe(4);
    });
});


describe('function accepts sorted array and count unique values Space Complexity O(1)', () => {
    test('[1,1,1,1,1,2]', () => {
        expect(countUniaueValueSpaceOf1([1,1,1,1,1,2])).toBe(2);
    });
    test('[1,2,3,4,4,4,7,7,12,12,13]', () => {
        expect(countUniaueValueSpaceOf1([1,2,3,4,4,4,7,7,12,12,13])).toBe(7);
    });
    test('[]', () => {
        expect(countUniaueValueSpaceOf1([])).toBe(0);
    });
    test('[-2,-1,-1,0,1]', () => {
        expect(countUniaueValueSpaceOf1([-2,-1,-1,0,1])).toBe(4);
    });
});