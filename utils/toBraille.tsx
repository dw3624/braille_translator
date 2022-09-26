import krToBraille from './krToBraille'
import constToBraille from './constToBraille'
import codeToBraille from './codeToBraille';

const toBraille = (inputText: string) => {
  let res = ''
  // 어절 구분
  inputText.split(' ').map((inputWord) =>{
    // 축약어 검사
    inputWord = constToBraille(inputWord)
    console.log(inputWord)
    // 점자코드 변환
    let inputArray = krToBraille(inputWord)
    // 점자 변환
    res += codeToBraille(inputArray)
  })
  return res
}

export default toBraille
