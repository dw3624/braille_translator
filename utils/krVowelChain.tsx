export type inputArray = inputObject[];
export interface inputObject {
    type: string;
    f: string;
    m: string;
    l: string;
}

const cond1 = (bfr: inputObject, now: inputObject) => {
  return (
    ['ㅑ','ㅘ','ㅜ','ㅝ'].includes(bfr.m)&& bfr.l === ''
      && now.f === ''&& now.m === 'ㅐ'
  )
}
const cond2 = (bfr: inputObject, now: inputObject) => {
  return (
    bfr.f === ''&& bfr.l === ''
      && now.f === ''&& now.m === 'ㅖ'
  )
}

const krVowelChain: Function = (inputArray: inputArray) => {
  let resArray: Array<inputObject> = inputArray[0]? [inputArray[0]]: []
  for (let i = 1; i < inputArray.length; i++) {
    let resObject: inputObject = { type: 'braille', f: '', m: '', l: '' }
    let inputLetter = inputArray[i]
    console.log(inputLetter)
    if (inputLetter.type === 'kr') {
      if ( cond1(inputArray[i-1], inputLetter) ) {
        resObject.l = String.fromCodePoint(0b100100 + 0x2800)
        resArray.push(resObject)
      } else if ( cond2(inputArray[i-1], inputLetter) ) {
        resObject.l = String.fromCodePoint(0b100100 + 0x2800)
        resArray.push(resObject)
      }
    }
    resArray.push(inputLetter)
  }
  return resArray
};

export default krVowelChain;
