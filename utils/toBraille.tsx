import krToBraille from './krToBraille'
import constToBraille from './constToBraille'
import krVowelChain from './krVowelChain';

const toBraille = (inputText: string) => {
  // 어절 구분
  inputText.split(' ').map((inputWord) =>{
    // 축약어 검사
    inputWord = constToBraille(inputWord)
    // 점자코드 변환

    // 모음연쇄 적용

    // 점자 변환
  })


  // let res: string[] = []
  // for (let i = 0; i < inputText.split(' ').length; i++) {
  //   let inputWordBraille = ''
  //   let inputWord = inputText.split(' ')[i]
  //   inputWord = krVowelChain(inputWord)
  //   let constWordBraille = constToBraille(inputWord)
  //   if (constWordBraille) {
  //     inputWordBraille += constWordBraille
  //   } else {
  //     for (let j = 0; j < inputWord.length; j++) {
  //       let inputLetterType = getType(inputWord[j])
  //       if (inputLetterType === 'kr') {
  //         let inputLetterBraille = krToBraille(inputWord[j])
  //         inputWordBraille += inputLetterBraille
  //       } else {
  //         inputWordBraille += inputWord[j]
  //       }
  //     }
  //   }
  //   res.push(inputWordBraille)
  // }
  // const spaceBraille = String.fromCodePoint(0b000000 + 0x2800)
  // let resBraille = res.join(spaceBraille)
  // return resBraille
}

export default toBraille
