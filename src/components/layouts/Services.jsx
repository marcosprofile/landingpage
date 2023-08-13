import React from 'react';
import {
  PaddingContainer,
  FlexContainer,
  Card,
  ParaText,
  Button,
} from '../../styles/Global.styled';

const Services = ({ data }) => {
  return (
    <Card>
      <FlexContainer
          direction="column"
          align="center"
          gap="1rem"
        >
          <ParaText
            size="48px"
          >
            {data.icon}
          </ParaText>
          <ParaText
            size="32px"
            weight="bold"
          >
            { data.title }
          </ParaText>
          <ParaText
            size="18px"
            weight="400"
          >
            { data.desc }
          </ParaText>
          <PaddingContainer top="2.5rem">
            <Button primary>Learn more</Button>
          </PaddingContainer>
        </FlexContainer>
    </Card>
  )
}

export default Services;
