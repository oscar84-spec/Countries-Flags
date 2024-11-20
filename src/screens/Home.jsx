import { useState, useEffect } from "react";
import Search from "../component/Search";
import Filter from "../component/Filter";
import {
  SectionHome,
  ContainerSearchAndFilter,
  ContainerCards,
  ContainerPagination,
  ButtonPagination,
  PageText,
} from "../assets/styledComponents/styledHome";
import CardFlag from "../component/CardFlag";

const Home = () => {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const [region, setRegion] = useState("");
  const [country, setCountry] = useState([]);
  const [filteredCountry, setFilteredCountry] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 20;

  useEffect(() => {
    const getCountryData = async () => {
      const response = await fetch("./src/data.json");
      const data = await response.json();
      setCountry(data);
      setFilteredCountry(data);
    };
    getCountryData();
  }, []);

  useEffect(() => {
    if (region || search) {
      const filtered = country.filter((country) => {
        const regionMatch = !region || country.region === region;
        const searchMatch =
          !search || country.name.toLowerCase().includes(search.toLowerCase());
        return regionMatch && searchMatch;
      });

      setFilteredCountry(filtered);
      setCurrentPage(1);
    }
  }, [region, search, country]);

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = filteredCountry.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const totalPages = Math.ceil(filteredCountry.length / countriesPerPage);
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]); // Se ejecuta cada vez que currentPage cambia

  return (
    <SectionHome>
      <ContainerSearchAndFilter>
        <Search search={search} setSearch={setSearch} />
        <Filter regions={regions} valor={region} setRegion={setRegion} />
      </ContainerSearchAndFilter>
      <ContainerCards>
        {currentCountries.map((country, index) => {
          return <CardFlag country={country} key={index} />;
        })}
      </ContainerCards>
      <ContainerPagination>
        <ButtonPagination
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          ◂
        </ButtonPagination>
        <PageText>
          Page {currentPage} of {totalPages}
        </PageText>
        <ButtonPagination
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          ▸
        </ButtonPagination>
      </ContainerPagination>
    </SectionHome>
  );
};

export default Home;
