import type { ReactNode } from 'react';
import styled from 'styled-components';

import Step from './Step';

type Separator = 'line' | 'shevron';

export interface StepData {
  step: number;
  title: string;
}

interface StepperProps {
  steps: StepData[];
  highlightStep: number;
  setHighlightStep?: (step: number) => void;
  separatorType: Separator;
}

const Stepper = ({ steps, highlightStep, setHighlightStep, separatorType }: StepperProps) => {
  const makeSeparator = ({ separatorType, step }: { separatorType: Separator; step: number }) => {
    switch (separatorType) {
      case 'line':
        return <Line key={`line${step}`} />;
      case 'shevron':
        return <Shevron key={`shevorn${step}`}/>;
      default:
        return <Line key={`line${step}`}/>;
    }
  };

  const StepNodes = steps.reduce(
    (nodes, { step, title }) => {
      const isHighlighted = step === highlightStep;
      const hasSeparator = step !== steps[steps.length - 1].step;

      nodes.push(
        <Step 
          isHighlighted={isHighlighted} 
          key={step} 
          {...(setHighlightStep && { onClick: () => setHighlightStep(step) })}
          step={step}
          title={title}
        />,
      );
      if (hasSeparator) nodes.push(makeSeparator({ separatorType, step }));
      return nodes;
    }, [] as ReactNode[]);

  return (
    <StepperContainer>
      {StepNodes}
    </StepperContainer>
  );
};

const StepperContainer = styled.ul`
    display: flex;
    padding: 20px 0;
    background-color: ${(props) => props.theme.color['surface-dark']};
`;

const Line = styled.div`
    width: 1px;
    background-color: ${(props) => props.theme.color['border-dark']};
`;

const Shevron = styled.div`
    align-self: center;
    width: 8px;
    height: 8px;
    line-height: 1;
    content: "";
    border: 1px solid rgb(0 0 0 / 50%);
    border-bottom: 0;
    border-left: 0;
    transform: rotate(45deg);
`;

export default Stepper;
