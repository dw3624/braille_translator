type inputArray = inputObject[];
interface inputObject {
    type: string;
    f: string;
    m: string;
    l: string;
}

const codeToBraille: Function = (inputArray: inputArray) => {
  let resWord = ''
  inputArray.map((inputLetter) => {
    console.log(inputLetter)
    let resLetter = ''
    if (inputLetter.type !== 'braille') {
      inputLetter.f.split(' ').map(item => {
        resLetter += item? String.fromCodePoint(Number(item) + 0x2800): ''
      })
      inputLetter.m.split(' ').map(item => {
        resLetter += item? String.fromCodePoint(Number(item) + 0x2800): ''
      })
      inputLetter.l.split(' ').map(item => {
        resLetter += item? String.fromCodePoint(Number(item) + 0x2800): ''
      })
    } else {
      resLetter = inputLetter.l
    }
    resWord += resLetter
  })
  return resWord
}

export default codeToBraille
