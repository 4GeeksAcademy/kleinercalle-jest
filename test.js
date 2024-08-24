
const { sum } = require('./app.js');



test('sum 14 + 9 es igual a 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});


test("One euro should be 1.2 dollars", function(){
    const { fromEuroToDollar } = require('./app.js')
    expect(fromEuroToDollar(3.5)).toBe(4.2);
})


test("One euro should be 127.9 yenes", function(){
    const { fromEuroToYen } = require('./app.js')
    expect(fromEuroToYen(3.5)).toBe(447.65);
})


test("One euro should be 0.8 GB pound", function(){
    const { fromEuroToPound } = require('./app.js')
    expect(fromEuroToPound(3.5)).toBe(2.8);
})