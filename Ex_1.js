function formatPhoneNumbers(phones) {
    return phones.map(phone => {
        const parts = phone.split('.');
        const lastPart = parts[parts.length - 1];
        const maskedLastPart = lastPart.charAt(0) + '*'.repeat(lastPart.length - 1);
        parts[parts.length - 1] = maskedLastPart;
        return parts.join('.');
    });
}

const phones = [ 
    '590.423.4568', 
    '650.124.7234', 
    '650.507.9879', 
    '011.44.1344.478968', 
    '011.44.1644.429267', 
    '11.44.1343.52',
];

const formattedPhones = formatPhoneNumbers(phones);
console.log(formattedPhones);

module.exports = { formatPhoneNumbers };