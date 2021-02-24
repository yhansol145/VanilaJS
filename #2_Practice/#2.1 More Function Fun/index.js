const calculator = {
    plus: function(a, b){
        return a + b;
    },
    minus: function(a, b){
        return a - b;
    },
    multiple: function(a, b){
        return a * b;
    },
    divide: function(a, b){
        return a / b;
    },
    power: function(a, b){
        return a ** b;
    }

}

const plus = calculator.plus(3890, 7716)
console.log(plus)

const minus = calculator.minus(17223, 7899)
console.log(minus)

const multiple = calculator.multiple(88, 19978)
console.log(multiple)

const divide = calculator.divide(2222, 11)
console.log(divide)

const power = calculator.power(44, 2)
console.log(power)

// 객체를 이용하여 계산기 만들기