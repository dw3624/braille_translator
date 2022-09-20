import krToBraille from './krToBraille'
import constToBraille from './constToBraille'
import krVowelChain from './krVowelChain';

const toBraille = (inputText: string) => {
  // 어절 구분
  inputText.split(' ').map((inputWord) =>{
    // 축약어 검사
    inputWord = constToBraille(inputWord)
    // console.log(inputWord)
    // 점자코드 변환
    let inputArray = krToBraille(inputWord)
    console.log(inputArray)
    // 모음연쇄 적용
    console.log(typeof inputArray)
    inputArray = krVowelChain(inputArray)
    // 점자 변환
    return ''
  })
}

export default toBraille
