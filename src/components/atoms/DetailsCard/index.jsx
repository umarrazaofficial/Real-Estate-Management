import React from 'react';

import { StyledDetailsCard } from './DetailsCard.styles';

function DetailsCard({ title, children, ...props }) {
  return (
    <StyledDetailsCard {...props}>
      <>
        {title && <strong>{title}</strong>}
        {children}
      </>
    </StyledDetailsCard>
  );
}

export default DetailsCard;
