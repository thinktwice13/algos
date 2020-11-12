// reverse integer. Keep the sign

module.exports = num => parseInt(Math.abs(num).toString().split('').reverse().join('')) * Math.sign(num)