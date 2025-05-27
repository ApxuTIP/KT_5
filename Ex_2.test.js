const { getInfo } = require('./Ex_2');

describe('getInfo', () => {
    it('should count items starting with "Цена" and ending with "$"', () => {
        const prices = [
            'Цена товара - 1200$',     
            'Стоимость - 500$',     
            'Цена не определена',     
            '9999',
            'Ценовая категория - больше 300$', 
            'Цена за услугу 500 EUR',   
            '150$',                     
        ];
        const result = getInfo(prices);
        expect(result).toEqual([3, 4]); 
    });

    it('should return [0, 0] for empty array', () => {
        const result = getInfo([]);
        expect(result).toEqual([0, 0]);
    });

    it('should handle items without "Цена" or "$"', () => {
        const prices = ['Стоимость', '999 EUR', 'Просто текст'];
        const result = getInfo(prices);
        expect(result).toEqual([0, 0]);
    });

    it('should count correctly if all items match both conditions', () => {
        const prices = ['Цена 100$', 'Цена 200$', 'Цена 300$'];
        const result = getInfo(prices);
        expect(result).toEqual([3, 3]);
    });

    it('should count only startsWith "Цена" (case-sensitive)', () => {
        const prices = ['Цена 100$', 'Цена 200$', 'Цена 300']; 
        const result = getInfo(prices);
        expect(result).toEqual([3, 2]); 
    });
});