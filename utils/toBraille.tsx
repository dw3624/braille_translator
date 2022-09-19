import krToBraille from './krToBraille'
import constToBraille from './constToBraille'

const toBraille = (inputText: string) => {
  const getCode = (inputWord: string) => {
    return inputWord.charCodeAt(0) - 44032
  }
  const getType = (inputWord: string) => {
    let uni = getCode(inputWord)
    if (uni >= getCode("가") && uni <= getCode("힣")) {
      return 'kr'
    }
    return null
  }

  let res: string[] = []
  for (let i = 0; i < inputText.split(' ').length; i++) {
    let inputWordBraille = ''
    let inputWord = inputText.split(' ')[i]
    let constWordBraille = constToBraille(inputWord)
    if (constWordBraille) {
      inputWordBraille += constWordBraille
    } else {
      for (let j = 0; j < inputWord.length; j++) {
        let inputLetterType = getType(inputWord[j])
        if (inputLetterType === 'kr') {
          let inputLetterBraille = krToBraille(inputWord[j])
          inputWordBraille += inputLetterBraille
        }
      }
    }
    res.push(inputWordBraille)
  }
  const spaceBraille = String.fromCodePoint(0b000000 + 0x2800)
  let resBraille = res.join(spaceBraille)
  return resBraille
}

export default toBraille
