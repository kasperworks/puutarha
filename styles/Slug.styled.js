import styled from 'styled-components';

export const SingleBlogTextBlock = styled.div`
  margin: 0 0 20px 0;
  em {
    font-size: 0.8rem;
    cursor: default;
    padding: 3px 17px 1px 10px;
    margin: 3px -17px -1px -10px;
    pointer-events: none;
  }
  div {
    margin-bottom: 10px;
  }
`;

export const SummaryTextBlock = styled.div`
  background-color: var(--codeblock);
  display: inline-block;
  padding: 10px;
  margin: 0 -10px;
  font-size: 1.35rem;
  border-radius: 4px;
`;

export const Tags = styled.div`
  display: flex;
  font-size: 1rem;
  gap: 10px;
  margin-top: 40px;
`;

export const PostFooter = styled.div`
  padding: 10px;
  margin: 50px 0 30px;
  background-color: var(--codeblock);

  a {
    display: flex;
    justify-content: center;
    width: 100%;
    text-decoration: none;
  }
`;

export const SingleTag = styled.span`
  background-color: var(--codeblock);
  padding: 0 5px;
`;

export const MainBlogTextBlock = styled.div`
  p {
    margin: 20px 0;
  }

  blockquote {
    border-left-color: var(--accent);
    border-left-width: 6px;
    border-left-style: solid;
    padding: 8px 8px 8px 14px;
    background-color: var(--codeblock);
    p {
      margin: 0;
    }
  }

  a {
    font-weight: 700;
  }
  a > em {
    text-decoration: none;
  }
  small {
    color: var(--grey);
  }
`;
