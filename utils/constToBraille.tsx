const constToBraille = (inputWord: string) => {
  let constKeys = Object.keys(constractions)
  for (let i = 0; i < constKeys.length; i++) {
    if (inputWord.indexOf(constKeys[i]) === 0) {
      let code = constractions[constKeys[i]]
      let brailleConst = String.fromCodePoint(Number(code) + 0x2800)
      inputWord.replace(constractions[i], brailleConst)
    }
  }
  return inputWord
}

export default constToBraille;

type consonantType = {
  [key: string]: string
}
const constractions: consonantType = {
  "그래서": "0b000001 0b001110",
  "그러나": "0b000001 0b001001",
  "그러면": "0b000001 0b010010",
  "그러므로": "0b000001 0b100010",
  "그런데": "0b000001 0b011101",
  "그리고": "0b000001 0b100101",
  "그리하여": "0b000001 0b110001",
}
