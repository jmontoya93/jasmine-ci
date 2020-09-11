function Calculator() {
    this.total = 0;
}

Calculator.prototype.add = function(number) {
    return this.total += number;
};
Calculator.prototype.subtract = function(number) {
    return this.total -= number;
};
Calculator.prototype.divide = function(number) {
    if (number === 0) {
        throw new Error('Cannot divide by 0')
    } 
    
    return this.total /= number;
};
Calculator.prototype.multiply = function(number) {
    return this.total *= number;
};

Object.defineProperty(Calculator.prototype, 'version', {
    get: function() {
        return fetch('https://gist.githubusercontent.com/jmontoya93/450ca15a716c9fbe25590dcdc173e3ca/raw/c65eb4aff22fb68fd7767420d32da3d2dcef900b/simple-calculator%2520json')
            .then(function(result) {
                return result.json();
            })
            .then(function(json) {
                return json.version;
            })
    },
    enumerable: true,
    configurable: true
})