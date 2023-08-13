import React from 'react';
import { motion } from 'framer-motion';

import {
  PaddingContainer,
  FlexContainer,
  ParaText,
  BlueText,
  Button,
  Image,
} from "../styles/Global.styled";

import ImageRight from '../assets/people.png';
import Icon from '../assets/learn_icon.png';

import {
  fadeInLeftVariant,
  fadeInRightVariant,
} from '../utils/Variants';

const Showcase = () => {
  return (
    <PaddingContainer
      top="8%"
      right="8%"
      left="8%"
    >
      <FlexContainer
        gap="6rem"
        justify="space-between"     
      >
        <FlexContainer
          as={motion.div}
          variants={fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
          align="left"
          direction="column"
          gap="2.5rem"
        >
          <BlueText
            size="70px"
            weight="bold"
            fontStyle="italic"
            lineHeight="112%"
            margin="6rem 0 0 0"
          >
            We boost <br></br> growth for your <br></br> statup business
          </BlueText>
          <ParaText
            size="22px"
            weight="600"
          >
            Our goal is top at the heart of creativity services <br></br> industry as a digital creator. In has a after comment
          </ParaText>
          <PaddingContainer top="3rem">
            <FlexContainer>
              <Button primary>Get Started</Button>
              <Button>
                <Image src={Icon} draggable="false" />
                Learn More
              </Button>
            </FlexContainer>
          </PaddingContainer>
        </FlexContainer>
        <Image
          as={motion.img}
          variants={fadeInRightVariant}
          initial="hidden"
          whileInView="visible"
          width="800px"
          src={ImageRight}
          draggable="false"
        />
      </FlexContainer>
    </PaddingContainer>
  )
}

export default Showcase;
