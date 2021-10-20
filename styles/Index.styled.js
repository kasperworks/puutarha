import styled from 'styled-components';
import { TextBlock } from './Layout.styled';

export const HeaderEmoji = styled.h1`
  filter: sepia(45%) hue-rotate(340deg);
  text-shadow: 1px 1px 3px var(--black);
  cursor: grab;
  width: 20%;
`;

export const IndexTextBlock = styled(TextBlock)`
  em {
    text-decoration: none;
  }
`;

export const DisclaimerWrapper = styled(TextBlock)`
  display: ${({ show }) => (show ? 'block' : 'none')};
  background-color: rgba(255, 255, 255, 0.01);
  border-radius: 4px;
  padding: 5px;
  ul {
    padding-left: 0;
  }
  li {
    color: var(--purple);
    list-style: none;
    padding: 0 30px;
  }

  width: max-content;
`;

export const DisclaimerHeader = styled.h4`
  color: var(--grey);
  cursor: pointer;
  width: max-content;
  margin-top: 60px;
  font-size: 1rem;
`;
