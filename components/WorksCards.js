import * as s from '../styles/WorksCard.styled';

const WorksCards = ({ cards }) => (
  <s.CardsWrapper>
    {cards.map((card) => {
      const { title, url, what, description, image } = card;
      return (
        <s.CardContainer image={image} key={title}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <strong>{what}</strong>
            <h4>{title}</h4>
            <p>{description}</p>
          </a>
        </s.CardContainer>
      );
    })}
  </s.CardsWrapper>
);

export default WorksCards;
