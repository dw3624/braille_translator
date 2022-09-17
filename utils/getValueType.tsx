const getValueType = (value: string) => {
  const getCode = (value: string) => value.charCodeAt(0) - 44032
  let uni = getCode(value)
  if (value === ' ') {
    return 'space'
  } else if (uni >= getCode("가") && uni <= getCode("힣")) {
    // 한글 여부 확인
    return 'kr'
  }
  return null
};

export default getValueType;
