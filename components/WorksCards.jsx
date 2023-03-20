import * as s from "../styles/WorksCard.styled";

const WorksCards = ({ cards }) => (
  <div className="mx-auto my-0 mb-[30px] flex h-auto max-w-[750px] flex-col flex-wrap justify-start gap-[15px] md:flex-row">
    {cards.map((card) => {
      const { title, url, what, description } = card;
      return (
        <div
          className="flex h-auto basis-[30%] flex-col justify-between rounded border border-accent bg-cover p-2.5 hover:scale-[1.01] "
          key={title}
        >
          <a
            className="bg-background p-1 text-base no-underline"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>{what}</strong>
            <h4 className="m-0 px-0 py-2.5 text-xl text-grey">{title}</h4>
            <p>{description}</p>
          </a>
        </div>
      );
    })}
  </div>
);

export default WorksCards;
