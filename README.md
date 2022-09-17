const getConsonantVowel = (words: string) => {
  console.log(words)
  const f = [
    'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ',
    'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', '', 'ㅈ', 'ㅉ',
    'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
  ]

  const m = [
    'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ',
    'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ',
    'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'
  ]

  const l = [
    '', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ',
    'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ',
    'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ',
    'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
  ]

  const getCode = (value: string) => value.charCodeAt(0) - 44032
  let res:any = []
  for (let i = 0; i < words.length; i++) {
    let word = words[i]
    let uni = getCode(word)

    if (uni < getCode("가") || uni > getCode("힣")) {
      res.push({
        f: word,
        m: '',
        l: ''
      })
      continue
    }

    let f_idx = Math.floor(uni / 588)
    let m_idx = Math.floor((uni - (f_idx * 588)) / 28)
    let e_idx = Math.floor(uni % 28)
    res.push({
      f: f[f_idx],
      m: m[m_idx],
      l: l[e_idx]
    })
  }
  return res
}

export default getConsonantVowel
