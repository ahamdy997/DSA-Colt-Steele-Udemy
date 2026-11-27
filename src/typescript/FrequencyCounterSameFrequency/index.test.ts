import { describe , test , expect } from "@jest/globals";
import sameFrequency from "./index.js";


describe('check if frequency of two numbers are the same' , () => {
    test('182, 281 has the same frequency ?' , () => {
        expect(sameFrequency(182, 281)).toBe(true);
    });
    test('34, 14 has the same frequency ?' , () => {
        expect(sameFrequency(34, 14)).toBe(false);
    });
    test('3589578, 5879385 has the same frequency ?' , () => {
        expect(sameFrequency(3589578, 5879385)).toBe(true);
    });
    test('22, 222 has the same frequency ?' , () => {
        expect(sameFrequency(22, 222)).toBe(false);
    });
});