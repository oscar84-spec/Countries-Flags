import { IoIosArrowRoundBack } from "react-icons/io";
import {
  SectionCountry,
  ButtonBack,
  ContainerMain,
  ImgFlag,
  ContainerInfo,
  CountryName,
  InformationBox,
  Information,
  TextBold,
  TextRegular,
  ContainerBorderCountries,
  BorderTitle,
  ContainerList,
  ListItem,
} from "../assets/styledComponents/styledCountry";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Country = () => {
  const { name } = useParams();
  const [countries, setCountries] = useState([]);
  const [countryFind, setCountryFind] = useState(null);

  useEffect(() => {
    const getCountries = async () => {
      const response = await fetch("/src/data.json");
      const data = await response.json();
      setCountries(data);
    };
    getCountries();
  }, []);

  useEffect(() => {
    if (countries.length > 0 && name) {
      const foundCountry = countries.find(
        (country) => country.name.toLowerCase() === name.toLowerCase()
      ); // Comparación insensible a mayúsculas
      setCountryFind(foundCountry || null);
      if (!foundCountry) {
        setError(`No se encontró información para el país: ${name}`);
      }
    }
  }, [countries, name]);

  return (
    <SectionCountry>
      <Link to='/'>
        <ButtonBack type='button'>
          <IoIosArrowRoundBack /> Back
        </ButtonBack>
      </Link>
      <ContainerMain>
        <ImgFlag src={countryFind?.flags.png} alt='' />
        <ContainerInfo>
          <CountryName>{countryFind?.name}</CountryName>
          <InformationBox>
            <Information>
              <TextBold>
                Native Name:{" "}
                <TextRegular>{countryFind?.nativeName}</TextRegular>
              </TextBold>
              <TextBold>
                Population:<TextRegular>{countryFind?.population}</TextRegular>{" "}
              </TextBold>
              <TextBold>
                Region: <TextRegular>{countryFind?.region}</TextRegular>{" "}
              </TextBold>
              <TextBold>
                Sub Region: <TextRegular>{countryFind?.subregion}</TextRegular>{" "}
              </TextBold>
              <TextBold>
                Capital:<TextRegular>{countryFind?.capital}</TextRegular>{" "}
              </TextBold>
            </Information>
            <Information>
              <TextBold>
                Top Level Domain:{" "}
                <TextRegular>{countryFind?.topLevelDomain}</TextRegular>{" "}
              </TextBold>
              <TextBold>
                Currencies:{" "}
                <TextRegular>
                  {countryFind?.currencies.map((c) => c.name).join(", ")}
                </TextRegular>{" "}
              </TextBold>
              <TextBold>
                Language:{" "}
                <TextRegular>
                  {countryFind?.languages.map((l) => l.name).join(", ")}
                </TextRegular>
              </TextBold>
            </Information>
          </InformationBox>
          <ContainerBorderCountries>
            <BorderTitle>Border Countries:</BorderTitle>
            <ContainerList>
              {countryFind?.borders?.map((border) => (
                <ListItem key={border}>{border}</ListItem>
              ))}
            </ContainerList>
          </ContainerBorderCountries>
        </ContainerInfo>
      </ContainerMain>
    </SectionCountry>
  );
};

export default Country;
