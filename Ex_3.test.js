const { kingSaid } = require('./Ex_3');

describe('kingSaid', () => {
    let originalConsoleLog;

    beforeEach(() => {
        originalConsoleLog = console.log;
        console.log = jest.fn();
    });

    afterEach(() => {
        console.log = originalConsoleLog;
    });

    it('should prepend "Король сказал:" when string doesnt start with it', () => {
        kingSaid("сегодня хорошая погода");
        expect(console.log).toHaveBeenCalledWith("Король сказал: сегодня хорошая погода");
    });

    it('should output string as is when it starts with "Король сказал:"', () => {
        kingSaid("Король сказал: завтра будет дождь");
        expect(console.log).toHaveBeenCalledWith("Король сказал: завтра будет дождь");
    });

    it('should handle empty string', () => {
        kingSaid("");
        expect(console.log).toHaveBeenCalledWith("Король сказал: ");
    });

    it('should handle strings with only "Король сказал:"', () => {
        kingSaid("Король сказал:");
        expect(console.log).toHaveBeenCalledWith("Король сказал:");
    });

    it('should not modify already correct strings', () => {
        kingSaid("Король сказал: я люблю тестирование");
        expect(console.log).toHaveBeenCalledWith("Король сказал: я люблю тестирование");
    });
});