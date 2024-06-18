import {multiple} from "./multiple";

describe('functionality of deduction', function () {
    test('positive', () => {
        expect(multiple(5, 5)).toBe(25);
    })

    test('negative', () => {
        expect(multiple(5, -5)).toBe(-25);
    })
});