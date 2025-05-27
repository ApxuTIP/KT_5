function kingSaid(string) {
    if (string.startsWith("Король сказал:")) {
        console.log(string);
    } else {
        console.log("Король сказал: " + string);
    }
}

module.exports = { kingSaid };