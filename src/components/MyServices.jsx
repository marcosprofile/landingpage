import React from 'react';
import { motion } from 'framer-motion';

import {
  PaddingContainer,
  FlexContainer,
  BlueText,
  GrayText,
} from "../styles/Global.styled";

import { servicesDetails } from '../utils/Data';

import Services from './layouts/Services';

import { fadeInTopVariant, fadeInLeftVariant } from '../utils/Variants';

const MyServices = () => {
  return (
    <PaddingContainer>
      <FlexContainer
        as={motion.div}
        variants={fadeInTopVariant}
        initial="hidden"
        whileInView="visible"
        align="center"
        direction="column"
      >
        <GrayText
          size="14px"
          weight="600"
          letterSpacing="6px"
        >
          SERVICES
        </GrayText>
        <BlueText
          size="52px"
          weight="bold"
        >
          Our Vison & Our Goal
        </BlueText>
      </FlexContainer>

      <PaddingContainer
        top="2%"
        left="8%"
        right="8%"
      >
        <FlexContainer
          as={motion.div}
          variants={fadeInLeftVariant}
          initial="hidden"
          whileInView="visible"
          justify="center"
          gap="4rem"
        >
          {servicesDetails.map((service) => (
            <PaddingContainer key={service.id} top="5rem" bottom="5rem">
              <Services data={service} />
            </PaddingContainer>
          ))}
        </FlexContainer>
      </PaddingContainer>
    </PaddingContainer>
  )
}

export default MyServices;
