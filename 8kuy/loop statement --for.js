const pickIt = array => {
    for (let i = 0; i < array.length; i++) {}
    return [array.filter(number => number % 2 !== 0), array.filter(number => number % 2 === 0)]
}

module.exports = pickIt