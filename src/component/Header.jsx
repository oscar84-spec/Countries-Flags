import { IoMoonOutline } from "react-icons/io5";
import {
  ContainerHeader,
  Title,
  DarkMode,
} from "../assets/styledComponents/styledHeader.jsx";
const Header = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    console.log(theme);
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <ContainerHeader>
      <a href='/'>
        <Title>Where in the world?</Title>
      </a>
      <DarkMode onClick={toggleTheme}>
        <IoMoonOutline /> Dark Mode
      </DarkMode>
    </ContainerHeader>
  );
};

export default Header;
