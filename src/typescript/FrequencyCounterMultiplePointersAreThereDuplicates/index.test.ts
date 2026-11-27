import { describe , test , expect } from "@jest/globals";
import areThereDuplicates , {areThereDuplicatesSO1 , areThereDuplicatesTON} from "./index.js";


describe('searching if there is a repeated value' , () => {
    test('1, 2, 3' , () => {
        expect(areThereDuplicates(1, 2, 3)).toBe(false);
    });
    test('1, 2, 2' , () => {
        expect(areThereDuplicates(1, 2, 2)).toBe(true);
    });
    test('a , b , c , a' , () => {
        expect(areThereDuplicates('a', 'b', 'c', 'a')).toBe(true);
    });
    test('1, 2, 3' , () => {
        expect(areThereDuplicatesSO1(1, 2, 3)).toBe(false);
    });
    test('1, 2, 2' , () => {
        expect(areThereDuplicatesSO1(1, 2, 2)).toBe(true);
    });
    test('a , b , c , a' , () => {
        expect(areThereDuplicatesSO1('a', 'b', 'c', 'a')).toBe(true);
    });
    test('1, 2, 3' , () => {
        expect(areThereDuplicatesTON(1, 2, 3)).toBe(false);
    });
    test('1, 2, 2' , () => {
        expect(areThereDuplicatesTON(1, 2, 2)).toBe(true);
    });
    test('a , b , c , a' , () => {
        expect(areThereDuplicatesTON('a', 'b', 'c', 'a')).toBe(true);
    });
});


