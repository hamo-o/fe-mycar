import styled from 'styled-components';

interface SegmentOption {
  id: number;
  name: string;
}

interface SegmentControlProps {
  title: string;
  options: SegmentOption[];
  selectedOption: number;
  setSelectedOption: (id: number) => void;
}

/**
 * 
 * @param title - 세그먼트 컨트롤의 제목.
 * @param options - 세그먼트 컨트롤의 옵션 리스트.
 * @param selectedOption - 현재 선택된 옵션의 id.
 * @param setSelectedOption - 옵션 선택 시 호출되는 콜백 함수.
 */
const SegmentControl = (props: SegmentControlProps) => {
  const { title, options, selectedOption, setSelectedOption } = props;

  const handleClickSelectOption = (id: number) => {
    setSelectedOption(id);
  };

  return(
    <SegmentControlContainer>
      <SegmentTitle>{title}</SegmentTitle>
      <SegmentContents>
        {options.map(({ id, name }) => 
          <SegmentOption 
            key={id} 
            onClick={()=>handleClickSelectOption(id)} 
            selected={selectedOption === id}
          >
            {name}
          </SegmentOption>,
        )}
      </SegmentContents>
    </SegmentControlContainer>
  ); 
};

const SegmentControlContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const SegmentTitle = styled.p`
    ${({ theme }) => theme.typo.label};
`;

const SegmentContents = styled.div``;

const SegmentOption = styled.button<{ selected: boolean }>`
    width: 109px;
    height: 40px;
    color: ${({ selected, theme }) =>
      selected ? theme.color['surface-default'] : theme.color['text-sub']};
    background-color: ${({ selected, theme }) => 
      selected ? theme.color.highlight : theme.color['surface-default']};
    border: 1px solid ${({ selected, theme }) => 
      selected ? theme.color.highlight : theme.color['border-dark']};
    ${({ theme }) => theme.typo.body2};
`;

export default SegmentControl;