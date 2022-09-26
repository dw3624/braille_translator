import { mapContrToCode } from "./mapToBraille";

const textToBraille = (inputText: string) => {
  let outputArr: Array<string> = []
  inputText.split(' ').map((word: string) => {
    let outputWord = wordToBraille(word)
    outputArr.push(outputWord)
  })
  let outputBraille = outputArr.join(' ')
  return outputBraille
};

const wordToBraille: Function = (inputWord: string) => {
  let outputWord = ''
  let word = wordContraction(inputWord)
  for (let i = 0; i < word.length; i++) {
    let charType = getType(word[i])

    if (charType === 'kr') {
      let charBraille = charToBrailleKr(word[i])
      outputWord += charBraille
    } else {
      outputWord += word[i]
    }
  }
  return outputWord
}

const wordContraction: Function = (inputWord: string) => {
  let constKeys = Object.keys(mapContrToCode)
  for (let i = 0; i < constKeys.length; i++) {
    if (inputWord.indexOf(constKeys[i]) === 0) {
      return inputWord.replace(constKeys[i], mapContrToCode[constKeys[i]])
    }
  }
}

const charToBrailleKr: Function = (inputChar: string) => {
  if (inputChar === 'ㅇ') { return '' }
  if (getUni('ㄱ') <= getUni(inputChar) && getUni(inputChar) <= getUni('ㅎ')) {
    return
  }
  if (getUni('ㅏ') <= getUni(inputChar) && getUni(inputChar) <= getUni('ㅣ')) {
    return
  }

  let charSplit = splitKr(inputChar)
  let charCode = toCode(charSplit)
  let outputCharArr: Array<string> = []
  charCode.split(' ').map((code: string) => {
    outputCharArr.push(code)
  })
  return outputCharArr.join(' ')
}

const getUni: Function = (inputChar: string) => {
  return inputChar.charCodeAt(0) - 44032
}

const getType: Function = (inputChar: string) => {
  const uni = getUni(inputChar)
  if (uni >= getUni('가') && uni <= getUni('힣')) {
    return 'kr'
  } else if (uni >= getUni('ㄱ') && uni <= getUni('ㅎ')) {
    return 'kr'
  } else if (uni >= getUni('ㅏ') && uni <= getUni('ㅣ')) {
    return 'kr'
  }
  return ''
}

const splitKr: Function = (inputChar: string) => {
  return
}

const toCode: Function = (inputChar: string) => {
  return
}





export default textToBraille;
