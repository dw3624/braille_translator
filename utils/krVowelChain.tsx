interface Props {
  inputArray: Objects[]
}
interface Objects {
    type: string;
    f: string;
    m: string;
    l: string;
}

const krVowelChain = ({inputArray}: Props) => {
  for (let i = 1; i < inputArray.length; i++) {
    let inputLetter = inputArray[i]
    if (inputLetter.type === 'kr') {
      console.log(inputArray[i-1], inputArray[i])
    }
  }
  // const getVowel = (inputLetter: string) => {
  //   const valueUniCode = inputLetter.charCodeAt(0) - 44032
  //   const fIdx = Math.floor(valueUniCode / 588)
  //   const mIdx = Math.floor((valueUniCode - (fIdx * 588)) / 28)
  //   return mIdx
  // }
  // const isVowelEnd = (inputLetter: string) => {
  //   let uni = inputLetter.charCodeAt(0)
  //   if (uni < 44032 || uni > 55203) return null
  //   return (uni-44032) % 28 == 0
  // }
  // let res = ''
  // res = inputWord[0] + res
  // for (let i = 1; i < inputWord.length; i++) {
  //   let vowel = getVowel(inputWord[i])
  //   console.log(i, vowel)
  //   switch (vowel) {
  //     // ㅑㅘㅜㅝ + ⠤ + 애
  //     case 1:
  //       let vowelPrev = getVowel(inputWord[i-1])
  //       if (isVowelEnd(inputWord[i-1]) && [2, 9, 13, 14].includes(vowelPrev)) {
  //         res += String.fromCodePoint(0b100100 + 0x2800) + inputWord[i]
  //       }
  //       break
  //     // 모음 + ⠤ + 예
  //     case 7:
  //       if (isVowelEnd(inputWord[i-1])) {
  //         res += String.fromCodePoint(0b100100 + 0x2800) + inputWord[i]
  //       }
  //       break
  //     default:
  //       res += inputWord[i]
  //   }
  // }
  // return res
};

export default krVowelChain;
