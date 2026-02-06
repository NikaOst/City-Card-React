// Создание компонента CityCard: Сосредоточьтесь на создании карточки города, которая будет отображать изображение,
// описание и интересные факты о выбранном городе.
import styles from '../cityCard/style.module.css';

function CityCard({ city }) {
  return (
    <div>
      <img src={city.imageUrl} alt="pic" />
      <h1>{city.name}</h1>
      <p>{city.description}</p>
      <p>{city.facts}</p>
    </div>
  );
}

export default CityCard;
