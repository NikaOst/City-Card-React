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
        <option id="0">Токио</option>
        <option id="1">Киото</option>
        <option id="2">Осака</option>
        <option id="2">Хоккайдо</option>
        <option id="2">Нагоя</option>
      </select>
    </form>
  );
}
export default CitySelector;
