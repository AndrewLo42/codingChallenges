//a custom componenet to truncate text I made for a project I wanted to hang onto

import React from 'react';
import styled from 'styled-components';

const ReadMoreText = styled.a`
  color: blue;
  cursor: pointer;
  transition: all 100ms ease-in-out;
  &:hover {
    color: gray;
    text-decoration: underline;
  }
`;

const TruncateText = (props) => {
  const text = props.text;
  const charLimit = !props.charLimit ? 225 : props.charLimit;
  const charityLink = !props.charity ? "" : props.charity;
  if(text.length > charLimit) {
    return(
      <span>
        {text.substr(0, charLimit)}... &nbsp;
        <ReadMoreText href={`/${charityLink}`}>
          Read more
        </ReadMoreText>
      </span>
    )
  } else {
    return(
      <span>
        {text}
      </span>
    )
  }

}

export default TruncateText;
