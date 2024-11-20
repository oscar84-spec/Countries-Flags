import { Select, Option } from "../assets/styledComponents/styledFilter";

const Filter = ({ regions, setRegion, valor }) => {
  const filerByRegion = (e) => setRegion(e.target.value);

  return (
    <div>
      <Select
        value={valor}
        onChange={filerByRegion}
        id='region'
        name='region'
        autoComplete='off'
      >
        <Option value='' disabled hidden>
          Filter by Region
        </Option>
        {regions.map((region, index) => {
          return (
            <Option key={index} value={region}>
              {region}
            </Option>
          );
        })}
      </Select>
    </div>
  );
};

export default Filter;
