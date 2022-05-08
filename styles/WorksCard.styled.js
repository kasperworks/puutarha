import styled from 'styled-components';

export const CardsWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  height: auto;
  max-width: 750px;
  gap: 15px;
  margin-bottom: 30px;
  @media (min-width: 800px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 4px;
  border: solid 2px var(--accent);
  background-size: cover;
  height: auto;
  flex-basis: 30%;
  padding: 10px;
  @media (min-width: 800px) {
    min-height: 310px;
  }
  a {
    text-decoration: none;
    background-color: #252b35bf;
    padding: 5px;
    font-size: 1rem;
  }
  h4 {
    margin: 0;
    padding: 10px 0;
    font-size: 1.2rem;
    color: var(--grey);
  }
  @media (hover: hover) {
    &:hover {
      transform: scale(1.01);
    }
  }
`;
