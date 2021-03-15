import React from 'react';
import styled from 'styled-components';
import marked from 'marked';

//Styled component
const StyledPreview = styled.div`
  width: 90%;
  background-color: antiquewhite;
  text-align: start;
  padding: 20px;
  border: 1px solid #000;
  & code {
    background-color: darkslategray;
    color: ghostwhite;
    font-family: monospace;
  }
  & pre {
    background-color: darkslategray;
    padding: 5px;
  }
`

export default function Preview({textInput}) {
  console.log({textInput});
  const plainText = textInput//.replace(/\n/g, '</br>');
  console.log({plainText});
  const getMarkdownText = () => {
    let rawMarkup = marked(plainText);
    console.log(rawMarkup);
    return { __html: rawMarkup };
  }

  return (
    <StyledPreview>
      <div id='preview' dangerouslySetInnerHTML={getMarkdownText()} />
    </StyledPreview> 
  )
}
