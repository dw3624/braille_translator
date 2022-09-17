import krToBraille from './krToBraille';
import getValueType from './getValueType';

const toBraille = (inputText: string) => {
  let res = ""
  for (let i = 0; i < inputText.length; i++) {
    // 입력값 문자 타입 확인
    let value = inputText[i]
    let valueType = getValueType(value)

    if (valueType === 'space') {
      res += ' '
    } else if (valueType === 'kr') {
      res += krToBraille(value)
    } else {
      res += value
    }
  }
  console.log(res)
  return res
}

export default toBraille
