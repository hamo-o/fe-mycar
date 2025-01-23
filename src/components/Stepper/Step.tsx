import type { MouseEvent } from 'react';
import styled from 'styled-components';

import { formatNumberToTwoDigits } from '../../utils';
import type { StepData } from '.';

interface StepProps extends StepData {
  isHighlighted: boolean;
  onClick?: (event: MouseEvent<HTMLLIElement>) => void;
}

const Step = ({ step, title, onClick, isHighlighted }: StepProps) => (
  <StepContainer onClick={onClick}>
    <StepLabel $isHighlighted={isHighlighted}>
      {formatNumberToTwoDigits(step)}
    </StepLabel>
    <StepLabel $isHighlighted={isHighlighted}>
      {title}
    </StepLabel>
  </StepContainer>
);

const StepContainer = styled.li`
    display: flex;
    gap: 20px;
    padding: 0 48px;
`;

const StepLabel = styled.span<{ $isHighlighted: boolean }>`
    ${(props) => props.theme.typo.body1};
    color: ${(props) => props.$isHighlighted 
      ? props.theme.color['text-default'] : props.theme.color['text-disabled']};
`;

export default Step;