import { useState } from 'react';
import styled from 'styled-components';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';

const Collapsible = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <CollapsibleRoot>
      <CollapsibleTrigger asChild>
        <StyledRevealButton type="button" onClick={() => setOpen(!open)}>
          {open ? 'Hide' : 'Reveal'}
        </StyledRevealButton>
      </CollapsibleTrigger>
      <CollapsibleContent>{children}</CollapsibleContent>
    </CollapsibleRoot>
  );
};

// Reset global style used for video container aspect ratio
const StyledCollapsible = styled(CollapsiblePrimitive.Root)`
  aspect-ratio: auto !important;
`;

// Radix primitives in shorter form
const CollapsibleRoot = StyledCollapsible;
const CollapsibleTrigger = CollapsiblePrimitive.Trigger;
const CollapsibleContent = CollapsiblePrimitive.Content;

const StyledRevealButton = styled.button`
  background-color: var(--accent);
  border: none;
  color: black;
  font-weight: 700;
  padding: 10px 50px;
  margin: 15px 0;
  border-radius: 4px;
  box-shadow: 0 5px 0 var(--accentshadow);
  &:active {
    box-shadow: none;
    transform: translateY(0.25rem);
  }
  @media (hover: hover) {
    &:hover {
      background-color: var(--accenthover);
      color: black;
    }
  }
`;

export default Collapsible;
