const constToBraille = (inputWord: string) => {
  let constKeys = Object.keys(constractionWord)
  for (let i = 0; i < constKeys.length; i++) {
    if (inputWord.indexOf(constKeys[i]) === 0) {
      let code = constractionWord[constKeys[i]]
      console.log(code)
      code.split(' ').map(item => {
        resLetter += item? String.fromCodePoint(Number(item) + 0x2800): ''
      })
      break
    }
    let brailleConst = String.fromCodePoint(Number(code) + 0x2800)
    inputWord.replace(constractionWord[i], brailleConst)
  }
  return inputWord
}

export default constToBraille;

type consonantType = {
  [key: string]: string
}
const constractionWord: consonantType = {
  "그래서": "0b000001 0b001110",
  "그러나": "0b000001 0b001001",
  "그러면": "0b000001 0b010010",
  "그러므로": "0b000001 0b100010",
  "그런데": "0b000001 0b011101",
  "그리고": "0b000001 0b100101",
  "그리하여": "0b000001 0b110001"
}

export const constractionLetter: consonantType = {
  "가": "0b101011",
  "까": "0b110110 0b101011",
  "나": "0b001001",
  "다": "0b001010",
  "따": "0b110110 0b001010",
  "마": "0b010001",
  "바": "0b011000",
  "빠": "0b110110 0b011000",
  "사": "0b000111",
  "싸": "0b110110 0b000111",
  "자": "0b101000",
  "짜": "0b110110 0b101000",
  "카": "0b001011",
  "타": "0b010011",
  "파": "0b011001",
  "하": "0b011010"
}
