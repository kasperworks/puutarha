import Image from 'next/image';
import { motion } from 'framer-motion';

import TVPic from '../public/static/images/KVBBGTV_small.png';
import GHYle from '../public/static/images/github_yle.png';
import ClubSnare from '../public/static/images/club_snare_medium.jpg';
import Container from '../components/Container';
import * as s from '../styles/Layout.styled';

const headerVariants = {
  hidden: {
    opacity: 0,
    y: '-100vh',
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function About() {
  return (
    <Container title="About / Kasper Viita">
      <div>
        <motion.h1 variants={headerVariants} initial="hidden" animate="visible">
          About Me
        </motion.h1>
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
            earlier that morning.
          </p>
        </s.TextBlock>
        <Image alt="Kasper on TV" src={TVPic} className="wide-image" placeholder="blur" />
        <s.TextBlock>
          <p>Before that, I used to DJ, write record reviews and design flyers.</p>
        </s.TextBlock>
        <Image
          alt="A club poster with a space shuttle and a cassette tape"
          src={ClubSnare}
          className="wide-image"
          placeholder="blur"
        />
        <s.TextBlock>
          <p>
            These days, I&apos;m more likely to be found designing an interactive data
            visualization or tinkering with a cloud-service script.
          </p>
        </s.TextBlock>
        <Image
          alt="GitHub screenshot after joining Yle"
          src={GHYle}
          className="wide-image"
          placeholder="blur"
        />
      </div>
    </Container>
  );
}
