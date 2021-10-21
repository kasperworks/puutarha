import Container from '../components/Container';
import * as s from '../styles/Layout.styled';

export default function About() {
  return (
    <Container title="About / Kasper Viita">
      <div>
        <h1>About Me</h1>
        <s.TextBlock>
          <p>
            I wrote about financial markets and related topics for nine years before
            pivoting to programming.
          </p>
        </s.TextBlock>
        <s.TextBlock>
          <p>
            In the past, you might have caught me on Bloomberg TV or radio, talking about
            the latest earnings season, an industry trend or an acquisition announced
            earlier that morning. Before that, I used to DJ, write record reviews and
            design flyers.
          </p>
        </s.TextBlock>
        <s.TextBlock>
          <p>
            These days I&apos;m more likely to be building an interactive data
            visualization or tinkering with a cloud-service script at Yle, Finland’s
            public broadcasting company.
          </p>
        </s.TextBlock>
      </div>
    </Container>
  );
}
