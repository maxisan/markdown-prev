import React, {useState} from 'react';
import styled from 'styled-components';

//Styled Component
const StyledEditor = styled.textarea`
  width: 80%;
  outline: none;
  margin: 20px;
  height: 300px;
  background-color: darkslategray;
  color: ghostwhite;
  font-size: 1.2em;
  border: solid midnightblue;
  padding: 20px;
`

//React Component
const Editor = ({onInputChange, textInput}) => {
  console.log(onInputChange, textInput);
  return (
    <StyledEditor 
      id='editor'
      name='input'
      onChange={onInputChange}
      value={textInput}
    />
  )
}

export default Editor;
