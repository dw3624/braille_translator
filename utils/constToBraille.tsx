type consonantType = {
  [key: string]: string
}

const constToBraille = (inputWord: string) => {
  const constractions: consonantType = {
    "그래서": "0b000001 0b001110",
    "그러나": "0b000001 0b001001",
    "그러면": "0b000001 0b010010",
    "그러므로": "0b000001 0b100010",
    "그런데": "0b000001 0b011101",
    "그리고": "0b000001 0b100101",
    "그리하여": "0b000001 0b110001",
  }

  if (!constractions[inputWord]) { return null }

  let constBraille = ''
  let codeArr = constractions[inputWord].split(' ')
  codeArr.map(code => {
    constBraille += String.fromCodePoint(Number(code) + 0x2800)
  })
  return constBraille
}

export default constToBraille;
