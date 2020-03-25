const hex = integer => `${integer < 16 ? '0' : ''}${integer.toString(16)}`
const colorOf = (r, g, b) => `#${hex(r)}${hex(g)}${hex(b)}`