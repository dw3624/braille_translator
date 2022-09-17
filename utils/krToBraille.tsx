import numToBraille from "./numToBraille"

type consonantType = {
  [key: string]: number
}

const krToBraille = (valueKr: string) => {
  // 한글 분리: 초성, 중성, 종성
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
  // 한글 유니코드 번호 구하고 index로 변환
  const valueUniCode = valueKr.charCodeAt(0) - 44032
  const fIdx = Math.floor(valueUniCode / 588)
  const mIdx = Math.floor((valueUniCode - (fIdx * 588)) / 28)
  const lIdx = Math.floor(valueUniCode % 28)
  console.log(valueUniCode, fIdx, mIdx, lIdx)
  // 한글로 변환
  const fKr = f[fIdx]
  const mKr = m[mIdx]
  const lKr = l[lIdx]

  // 분리된 한글 점자로 변환
  const fCode: consonantType = {
    "ㄱ": 4,
    "ㄲ": 4,
    "ㄴ": 14,
    "ㄷ": 24,
    "ㄸ": 24,
    "ㄹ": 5,
    "ㅁ": 15,
    "ㅂ": 45,
    "ㅃ": 45,
    "ㅅ": 6,
    "ㅆ": 6,
    "ㅇ": 0,
    "ㅈ": 46,
    "ㅉ": 46,
    "ㅊ": 56,
    "ㅋ": 124,
    "ㅌ": 125,
    "ㅍ": 145,
    "ㅎ": 245
  }
  const mCode: consonantType = {
    "ㅏ": 126,
    "ㅑ": 345,
    "ㅓ": 234,
    "ㅕ": 156,
    "ㅗ": 136,
    "ㅛ": 346,
    "ㅜ": 134,
    "ㅠ": 146,
    "ㅡ": 246,
    "ㅣ": 135,
    "ㅐ": 1235,
    "ㅔ": 1345,
    "ㅚ": 13456,
    "ㅘ": 1236,
    "ㅝ": 1234,
    "ㅢ": 2456,
    "ㅖ": 34,
    "ㅟ": 134,
    "ㅒ": 345,
    "ㅙ": 1236,
    "ㅞ": 1234
  }
  const lCode: consonantType = {
    "ㄱ": 1,
    "ㄲ": 1,
    "ㄴ": 25,
    "ㄷ": 35,
    "ㄸ": 35,
    "ㄹ": 2,
    "ㅁ": 26,
    "ㅂ": 12,
    "ㅃ": 12,
    "ㅅ": 3,
    "ㅆ": 34,
    "ㅇ": 2356,
    "ㅈ": 13,
    "ㅉ": 13,
    "ㅊ": 23,
    "ㅋ": 235,
    "ㅌ": 236,
    "ㅍ": 256,
    "ㅎ": 356
  }

  let fBraille = fKr? numToBraille(fCode[fKr]): ''
  let mBraille = mKr? numToBraille(mCode[mKr]): ''
  let lBraille = lKr? numToBraille(lCode[lKr]): ''

  const xcptCon = ["ㄲ", "ㄸ", "ㅃ", "ㅉ"]
  const xcptVow = ["ㅟ", "ㅒ", "ㅙ", "ㅞ"]
  xcptCon.includes(fKr)? fBraille += "⠠": fBraille
  xcptVow.includes(mKr)? mBraille += "⠠": mBraille
  xcptCon.includes(lKr)? lBraille += "⠠": lBraille

  let res = fBraille + mBraille + lBraille
  return res
}

export default krToBraille
