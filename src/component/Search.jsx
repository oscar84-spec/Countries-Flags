import { MdOutlineSearch } from "react-icons/md";
import {
  ContainerSearch,
  InputSearch,
} from "../assets/styledComponents/styledSearch.jsx";

const Search = ({ search, setSearch }) => {
  return (
    <ContainerSearch>
      <InputSearch
        type='search'
        name='search'
        id='search'
        placeholder='Search for a country...'
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <MdOutlineSearch />
    </ContainerSearch>
  );
};

export default Search;
