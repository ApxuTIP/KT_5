const { formatPhoneNumbers } = require('./Ex_1');

describe('formatPhoneNumbers', () => {
    it('should mask the last part of each phone number', () => {
        const phones = [
            '590.423.4568',
            '650.124.7234',
            '650.507.9879',
            '011.44.1344.478968',
            '011.44.1644.429267',
            '11.44.1343.52',
        ];

        const expected = [
            '590.423.4***',
            '650.124.7***',
            '650.507.9***',
            '011.44.1344.4*****',
            '011.44.1644.4*****',
            '11.44.1343.5*',
        ];

        const result = formatPhoneNumbers(phones);
        expect(result).toEqual(expected);
    });

    it('should handle empty input', () => {
        const result = formatPhoneNumbers([]);
        expect(result).toEqual([]);
    });

    it('should handle phone numbers without dots', () => {
        const phones = ['12345678', '98765432'];
        const expected = ['1*******', '9*******'];
        const result = formatPhoneNumbers(phones);
        expect(result).toEqual(expected);
    });

    it('should handle phone numbers with a single dot', () => {
        const phones = ['123.45678', '987.65432'];
        const expected = ['123.4****', '987.6****'];
        const result = formatPhoneNumbers(phones);
        expect(result).toEqual(expected);
    });
}); 
