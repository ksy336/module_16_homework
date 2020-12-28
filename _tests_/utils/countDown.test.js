import { countDown } from "../../utils/countDown";

describe("tests for countDown function", () => {
    it ('should operate correctly with number', () => {
        expect(countDown(4)).toBe('4, 3, 2, 1');
    })
    it('should operate correctly with number in text format', () => {
        expect(countDown('3')).toBe('3, 2, 1');
    })
    it('should operate correctly with 1', () => {
        expect(countDown(1)).toBe('1');
    })
    it('should operate correctly with invalid data', () => {
        expect(countDown('love')).toBe('');
    })   
})

// Тесты написаны неправильно. В функцию нужно передавать конкретные значения, и проверять также конкретные значения, которые вернет функция