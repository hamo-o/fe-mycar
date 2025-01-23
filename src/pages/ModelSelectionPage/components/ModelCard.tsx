import { useNavigate } from 'react-router';
import styled from 'styled-components';

import Button from '../../../components/Button';
import type { Model } from '../../../domain/Model';
import { formatNumberToMoney } from '../../../utils';

const ModelCard = ({ id, vehicleId, name, spec, minPrice, imageUrl }: Model) => {
  const navigate = useNavigate();
  const handleClickRouteToModelDetail = () => {
    navigate(`/option-selection/${id}`);
  };

  return(
    <ModelCardContainer>
      <ModelTitle>
        <ModelName>
          {name}
        </ModelName>
        <ModelPrice>
          {formatNumberToMoney({ money: minPrice, unit: 1 })}
        </ModelPrice>
      </ModelTitle>
      <Image src={imageUrl} />
      <Button onClick={handleClickRouteToModelDetail}>내 차 만들기</Button>
    </ModelCardContainer>
  );
};

const ModelCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    max-width: 300px;
    height: 100%;
    padding: 30px;
    background-color: ${props => props.theme.color['surface-alt']};
`;

const ModelTitle = styled.div`
    display: flex;
    flex-direction: column;
`;

const ModelName = styled.span`
    ${props => props.theme.typo.heading3};
`;

const ModelPrice = styled.span`
    ${props => props.theme.typo.heading4};
`;

const Image = styled.img`
    width: 100%;
`;
export default ModelCard;