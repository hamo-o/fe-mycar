import type { MouseEvent } from 'react';
import styled from 'styled-components';

type Direction = 'left' | 'right';

interface CarouselControlProps {
  direction: Direction;
  onClick: (event: MouseEvent<HTMLElement>) => void;
}

const CarouselControl = ({ direction, onClick }: CarouselControlProps) => (
  <Container $direction={direction} onClick={onClick}>
    <Shevron $direction={direction}/>
  </Container>
);

const Container = styled.button<{ $direction: Direction }>`
  position: absolute;
  top: 40%;
  ${({ $direction }) => $direction === 'left' ? 'left: 0;' : 'right: 0;'}
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  font-size: 18px;
  line-height: 1.8;
  background-color: rgb(31 45 61 / 40%);
  border-radius: 0;
`;
  
const Shevron = styled.div<{ $direction: Direction }>`
  width: 10px;
  height: 10px;
  line-height: 1;
  content: "";
  border: 1px solid ${({ theme }) => theme.color['surface-default']};
  border-bottom: 0;
  border-left: 0;
  transform: ${({ $direction }) => $direction === 'left' ? 'rotate(-135deg)' : 'rotate(45deg)'};
`;

export default CarouselControl;