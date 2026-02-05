// Создание компонента CitySelector: Разработайте компонент для выбора города.
// Этот компонент должен включать в себя форму с выпадающим списком, который позволяет выбирать из предопределенного списка городов.
import styles from '../citySelector/style.module.css';

function CitySelector({ setCityIndx }) {
  const updateCity = (newCity) => {
    setCityIndx(newCity);
  };

  return (
    <form>
      <select onChange={(event) => updateCity(event.target.selectedIndex)}>
        <option id="0">Berlin</option>
        <option id="1">Dusseldorf</option>
        <option id="2">Essen</option>
      </select>
    </form>
  );
}
export default CitySelector;
