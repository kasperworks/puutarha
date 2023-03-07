import Image from 'next/image';
import { motion } from 'framer-motion';

import TVPic from '../public/static/images/KVBBGTV_small.png';
import GHYle from '../public/static/images/github_yle.png';
import ClubSnare from '../public/static/images/club_snare_medium.jpg';
import Container from '../components/Container';
import * as s from '../styles/Layout.styled';
import Spacer from '../components/Spacer';

const headerVariants = {
  hidden: {
    opacity: 0,
    rotate: 7,
  },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: {
      type: 'tween',
      duration: 0.5,
    },
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
            pivoting to programming. These days, I can be found designing an interactive
            data visualization or tinkering with a cloud-service script for the Yle
            newsroom.
          </p>
        </s.TextBlock>
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <Image
            alt="GitHub screenshot after joining Yle, Finland's national public-service broadcasting company"
            src={GHYle}
            className="wide-image"
            placeholder="blur"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
        <s.TextBlock>
          <p>
            In the past, you might have caught me on Bloomberg TV or radio, talking about
            the latest earnings season, an industry trend or an acquisition announced
            earlier that morning. I also wrote a lot about such topics during my stints in
            Helsinki and London.
          </p>
        </s.TextBlock>
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <Image
            alt="Picture of Kasper speaking on Bloomberg TV"
            src={TVPic}
            className="wide-image"
            placeholder="blur"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
        <s.TextBlock>
          <p>Before that, I used to DJ, write record reviews and design flyers.</p>
        </s.TextBlock>
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <Image
            alt="A self-designed club-night poster with a space shuttle flying over a cassette tape"
            src={ClubSnare}
            className="wide-image"
            placeholder="blur"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
        <Spacer />
      </div>
    </Container>
  );
}
