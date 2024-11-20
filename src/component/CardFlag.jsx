import {
  ContainerCardFlag,
  ContainerFlag,
  FlagImg,
  ContainerInfo,
  CountryName,
  Info,
  SpanBold,
  Span,
} from "../assets/styledComponents/styledCardFlag";

import { useNavigate } from "react-router-dom";

const CardFlag = ({ country }) => {
  const { name, population, region, capital, flags } = country;

  const navigate = useNavigate();

  return (
    <ContainerCardFlag onClick={() => navigate(`/country/${name}`)}>
      <ContainerFlag>
        <FlagImg src={flags.png} alt='' />
      </ContainerFlag>
      <ContainerInfo>
        <CountryName>{name}</CountryName>
        <Info>
          <SpanBold>
            Popultaion: <Span>{population.toLocaleString()}</Span>
          </SpanBold>
          <SpanBold>
            Region: <Span>{region}</Span>
          </SpanBold>
          <SpanBold>
            Capital: <Span>{capital}</Span>
          </SpanBold>
        </Info>
      </ContainerInfo>
    </ContainerCardFlag>
  );
};

export default CardFlag;
