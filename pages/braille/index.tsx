import React, { useEffect, useState } from 'react';
import toBraille from '../../utils/toBraille';

const Index = () => {
  const [inputText, setInputText] = useState("")
  const [outputBraille, setOutputBraille] = useState("")
  const onChange = (event: any) => setInputText(event.target.value)
  useEffect(() => {
    return setOutputBraille(toBraille(inputText));
  }, [inputText])

  return (
    <>
      <h1>한글</h1>
      <input onChange={onChange} value={inputText}></input>
      <div>{inputText}</div>
      <div>{outputBraille}</div>
    </>
  );
};

export default Index;
