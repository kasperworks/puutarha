import styled from 'styled-components';
import { motion } from 'framer-motion';

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

export const DateBlock = styled.div`
  em {
    margin-right: 5px;
    :nth-child(2) {
      color: var(--green);
    }
  }
`;

export const SummaryTextBlock = styled.div`
  background-color: var(--codeblock);
  display: inline-block;
  padding: 20px;
  margin: 0 -20px;
  font-size: 1.35rem;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 2px 2px;
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
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 2px 2px;
  border-radius: 4px;

  a {
    display: flex;
    justify-content: center;
    width: 100%;
    text-decoration: none;

    @media (hover: hover) {
      &:hover {
        color: var(--accent);
      }
    }
  }
`;

export const SingleTag = styled.span`
  background-color: var(--codeblock);
  padding: 0 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 2px 2px;
  border-radius: 4px;
`;

export const MainBlogTextBlock = styled(motion.div)`
  p {
    margin: 20px 0;
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

  div {
    aspect-ratio: 16 / 9;
  }
`;
