import * as React from 'react';
import { useState } from 'react';
import * as s from '../styles/Index.styled';

const IndexDisclaimer = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <s.DisclaimerHeader onClick={() => setShow(!show)}>A disclaimer</s.DisclaimerHeader>
      <s.DisclaimerWrapper show={show}>
        <s.IndexTextBlock>
          <ul>
            <li>Do I contradict myself?</li>
            <li>Very well then I contradict myself</li>
            <li>(I am large, I contain multitudes.) </li>
            <li>
              <small>- Walt Whitman, 1855</small>
            </li>
          </ul>
        </s.IndexTextBlock>
      </s.DisclaimerWrapper>
    </>
  );
};

export default IndexDisclaimer;
