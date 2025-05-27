const { isFridayToday } = require('./Ex_4');

describe('isFridayToday', () => {
    let originalConsoleLog;
    let originalDate;

    beforeEach(() => {
        originalConsoleLog = console.log;
        console.log = jest.fn();
        
        // Сохраняем оригинальный Date
        originalDate = global.Date;
    });

    afterEach(() => {
        console.log = originalConsoleLog;
        global.Date = originalDate;
    });

    const mockDate = (dayOfWeek) => {
        // Создаем мок Date с фиксированным днем недели
        global.Date = class extends Date {
            getDay() {
                return dayOfWeek;
            }
        };
    };

    it('should say "Сегодня пятница!" when today is Friday (5)', () => {
        mockDate(5);
        isFridayToday();
        expect(console.log).toHaveBeenCalledWith("Сегодня пятница!");
    });

    it('should say "Завтра пятница!" when today is Thursday (4)', () => {
        mockDate(4);
        isFridayToday();
        expect(console.log).toHaveBeenCalledWith("Завтра пятница!");
    });

    it('should say "Пятница была вчера" when today is Saturday (6)', () => {
        mockDate(6);
        isFridayToday();
        expect(console.log).toHaveBeenCalledWith("Пятница была вчера");
    });

    it('should calculate days until Friday for Sunday (0)', () => {
        mockDate(0);
        isFridayToday();
        expect(console.log).toHaveBeenCalledWith("Пятница будет через 5 дней");
    });

    it('should calculate days until Friday for Monday (1)', () => {
        mockDate(1);
        isFridayToday();
        expect(console.log).toHaveBeenCalledWith("Пятница будет через 4 дней");
    });

    it('should calculate days until Friday for Tuesday (2)', () => {
        mockDate(2);
        isFridayToday();
        expect(console.log).toHaveBeenCalledWith("Пятница будет через 3 дней");
    });

    it('should calculate days until Friday for Wednesday (3)', () => {
        mockDate(3);
        isFridayToday();
        expect(console.log).toHaveBeenCalledWith("Пятница будет через 2 дней");
    });
});