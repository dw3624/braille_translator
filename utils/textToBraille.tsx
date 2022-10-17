import { mapContrToCode, first, middle, last, mapFirstToCode, mapMiddleToCode, mapLastToCode, mapCharContraction } from "./mapToBraille";

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
  console.log(outputWord)
  return outputWord
}

const wordContraction: Function = (inputWord: string) => {
  let constKeys = Object.keys(mapContrToCode)
  for (let i = 0; i < constKeys.length; i++) {
    if (inputWord.indexOf(constKeys[i]) === 0) {
      return inputWord.replace(constKeys[i], mapContrToCode[constKeys[i]])
    }
  }
  return inputWord
}

const charToBrailleKr: Function = (inputChar: string) => {
  let charCode = ''
  if (inputChar === 'ㅇ') { return '' }
  if (getUni('ㄱ') <= getUni(inputChar) && getUni(inputChar) <= getUni('ㅎ')) {
    charCode = "0b111111 " + mapFirstToCode[inputChar]
  } else if (getUni('ㅏ') <= getUni(inputChar) && getUni(inputChar) <= getUni('ㅣ')) {
    charCode = "0b111111 " + mapMiddleToCode[inputChar]
  } else {
    let charSplit = splitKr(inputChar)
    charCode = toCode(charSplit)
  }
  let codeBraille = codeToBraille(charCode)
  return codeBraille
}

const codeToBraille: Function = (charCode: string) => {
  console.log(charCode)
  let charBraille = ''
  charCode.split(' ').map((code: string) => {
    charBraille += code? String.fromCodePoint(Number(code) + 0x2800): ''
  })
  return charBraille
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
  let uni = getUni(inputChar)
  let idxF = Math.floor(uni / 588)
  let idxM = Math.floor((uni - (idxF * 588)) / 28)
  let idxL = Math.floor(uni % 28)
  return [first[idxF],  middle[idxM], last[idxL]]
}

const toCode: Function = (inputChar: Array<string>) => {
  console.log(inputChar)
  let first = inputChar[0]
  let middle = inputChar[1]
  let last = inputChar[2]
  let charCodeF = mapFirstToCode[first]? mapFirstToCode[first]: ''
  let charCodeM = mapMiddleToCode[middle]? mapMiddleToCode[middle]: ''
  let charCodeL = mapLastToCode[last]? mapLastToCode[last]: ''
  let resChar = ''

  if (middle === 'ㅏ' && mapCharContraction['a'][first]) {
    resChar = mapCharContraction.a[first] + ' ' + charCodeL

  } else if (middle === 'ㅓ' && mapCharContraction.eo[last]) {
    resChar = charCodeF + ' ' + mapCharContraction.eo[last]

  } else if (middle === 'ㅕ' && mapCharContraction.yeo[last]) {
    resChar = charCodeF + ' ' + mapCharContraction.yeo[last]

  } else if (middle === 'ㅗ' && mapCharContraction.o[last]) {
    resChar = charCodeF + ' ' + mapCharContraction.o[last]

  } else if (middle === 'ㅜ' && mapCharContraction.u[last]) {
    resChar = charCodeF + ' ' + mapCharContraction.u[last]

  } else if (middle === 'ㅡ' && mapCharContraction.eu[last]) {
    resChar = charCodeF + ' ' + mapCharContraction.eu[last]

  } else if (middle === 'ㅣ' && last === 'ㄴ') {
    resChar = first + " 0b011111"

  } else if (first === 'ㄱ' && middle === 'ㅓ' && last === 'ㅅ') {
    resChar = "0b111000 0b001110"

  } else {
    resChar = [charCodeF, charCodeM, charCodeL].join(' ')
  }
  console.log(resChar)
  return resChar
}

export default textToBraille;
