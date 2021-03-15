import React, {useState} from 'react';
import Editor from './Editor';
import Preview from './Preview';
import styled from 'styled-components';
import initialText from '../statics/initialText.js';

//Styled component
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function Container() {
  
  const [textInput, setTextInput] = useState(initialText)
  
  const onInputChange = (e) => {
    setTextInput(e.target.value)
  }

  return (
    <StyledContainer>
      <Editor onInputChange={onInputChange} textInput={textInput} />
      <Preview textInput={textInput} />
    </StyledContainer>
  )
}
