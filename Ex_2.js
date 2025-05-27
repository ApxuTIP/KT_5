function getInfo(prices) {
    let startsWithPrice = 0;
    let endsWithDollar = 0;
    
    for (const item of prices) {
        if (item.startsWith('Цена')) {
            startsWithPrice++;
        }
        if (item.endsWith('$')) {
            endsWithDollar++;
        }
    }
    
    return [startsWithPrice, endsWithDollar];
}

module.exports = { getInfo }; // Добавьте эту строку для экспорта функции