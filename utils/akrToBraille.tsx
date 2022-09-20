// 접속사 축약어 -> 점자
const constToBraille = (inputWord: string) => {
  const constKeys = Object.keys(constractions)
  for (let i = 0; i < constKeys.length; i++) {
    if (inputWord.indexOf(constKeys[i]) === 0) {
      inputWord.replace(constKeys[i], constractions[constKeys[i]])
    }
  }
  return inputWord
}
// 한글 -> 초성, 중성, 종성 점자코드
const krToCode = (inputLetter: string) => {
  let valueUnicode = inputLetter.charCodeAt(0) - 44032
  let fIdx = Math.floor(valueUnicode / 588)
  let mIdx = Math.floor((valueUnicode - (Math.floor(valueUnicode / 588) * 588)) / 28)
  let lIdx = Math.floor(valueUnicode % 28)
  return {
    type: 'kr',
    f: f[fIdx],
    m: m[mIdx],
    l: l[lIdx]
  }
}
// 예외 체크
const checkXcpt = (krCode: {[key: string]: string}) =>{
  // 단독 자모인 경우
  if (krCode.f && !krCode.m && !krCode.l) {
    return krCode.f = 0b111111 + krCode.f
  } else if (!krCode.f && krCode.m && !krCode.l) {
    return krCode.m = 0b111111 + krCode.m
  } else if (!krCode.f && !krCode.m && krCode.l) {
    return krCode.l = 0b111111 + krCode.l
  }
}
// 점자코드 -> 점자
const codeToBrailleKr = (inputLetterCode: string) =>{
  let braille = ''
  if (inputLetterCode) {
    fCode[inputLetterCode].split(' ').map(fItem => {
      braille += String.fromCodePoint(Number(fItem) + 0x2800)
    })
  }
  return braille
}

export {constractions}

type mapType = {
  [key: string]: string
}
const f = [
  'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ',
  'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', '', 'ㅈ', 'ㅉ',
  'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
]
const m = [
  'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ',
  'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ',
  'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'
]
const l = [
  '', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ',
  'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ',
  'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ',
  'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
]
const constractions: mapType = {
  "그래서": "0b000001 0b001110",
  "그러나": "0b000001 0b001001",
  "그러면": "0b000001 0b010010",
  "그러므로": "0b000001 0b100010",
  "그런데": "0b000001 0b011101",
  "그리고": "0b000001 0b100101",
  "그리하여": "0b000001 0b110001",
}
const fCode: mapType = {
  "ㄱ": "0b001000",
  "ㄲ": "0b100000 0b001000",
  "ㄴ": "0b001001",
  "ㄷ": "0b001010",
  "ㄸ": "0b100000 0b001010",
  "ㄹ": "0b010000",
  "ㅁ": "0b010001",
  "ㅂ": "0b011000",
  "ㅃ": "0b100000 0b011000",
  "ㅅ": "0b100000",
  "ㅆ": "0b100000 0b100000",
  "ㅇ": "0b000000",
  "ㅈ": "0b101000",
  "ㅉ": "0b100000 0b101000",
  "ㅊ": "0b110000",
  "ㅋ": "0b001011",
  "ㅌ": "0b010011",
  "ㅍ": "0b011001",
  "ㅎ": "0b011010"
}
const mCode: mapType = {
  "ㅏ": "0b100011",
  "ㅑ": "0b011100",
  "ㅓ": "0b001110",
  "ㅕ": "0b110001",
  "ㅗ": "0b100101",
  "ㅛ": "0b101100",
  "ㅜ": "0b001101",
  "ㅠ": "0b101001",
  "ㅡ": "0b101010",
  "ㅣ": "0b010101",
  "ㅐ": "0b010111",
  "ㅔ": "0b011101",
  "ㅚ": "0b111101",
  "ㅘ": "0b100111",
  "ㅝ": "0b001111",
  "ㅢ": "0b111010",
  "ㅖ": "0b001100",
  "ㅟ": "0b001101 0b010111",
  "ㅒ": "0b011100 0b010111",
  "ㅙ": "0b100111 0b010111",
  "ㅞ": "0b001111 0b010111"
}
const lCode: mapType = {
  "ㄱ": "0b000001",
  "ㄲ": "0b000001 0b000001",
  "ㄳ": "0b000001 0b000100",
  "ㄴ": "0b010010",
  "ㄵ": "0b010010 0b000101",
  "ㄶ": "0b010010 0b110100",
  "ㄷ": "0b010100",
  "ㄸ": "0b010100",
  "ㄹ": "0b000010",
  "ㄺ": "0b000010 0b000001",
  "ㄻ": "0b000010 0b100010",
  "ㄼ": "0b000010 0b000011",
  "ㄽ": "0b000010 0b000100",
  "ㄾ": "0b000010 0b100110",
  "ㄿ": "0b000010 0b110010",
  "ㅀ": "0b000010 0b110100",
  "ㅁ": "0b100010",
  "ㅂ": "0b000011",
  "ㅄ": "0b000011 0b000100",
  "ㅃ": "0b000011",
  "ㅅ": "0b000100",
  "ㅆ": "0b001100",
  "ㅇ": "0b110110",
  "ㅈ": "0b000101",
  "ㅉ": "0b000101",
  "ㅊ": "0b000110",
  "ㅋ": "0b010110",
  "ㅌ": "0b100110",
  "ㅍ": "0b110010",
  "ㅎ": "0b110100"
}
