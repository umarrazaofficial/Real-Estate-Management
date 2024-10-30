import React from 'react';

import { StyledInfoCard, Title, Value } from './InfoCard.styles';

function InfoCard({ title, value, fontbase, isArrayValue, ...props }) {
  return (
    <StyledInfoCard {...props}>
      <Title fontbase={fontbase}>{title}</Title>
      {!isArrayValue ? (
        <Value fontbase={fontbase}>{value}</Value>
      ) : (
        value?.map(val => (
          <Value fontbase={fontbase} isArrayValue key={val}>
            {val}
          </Value>
        ))
      )}
    </StyledInfoCard>
  );
}

export default InfoCard;
