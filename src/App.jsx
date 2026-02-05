import { useState } from 'react';
import CitySelector from './components/citySelector';
// import CityCard from './components/cityCard';
import CityCelector from './components/cityCelector';

function App({ cityArr }) {
  const [cityIndx, setCityIndx] = useState(0);
  // const [cityData, setCityData] = useState({});

  return (
    <div>
      <CitySelector setCityIndx={setCityIndx} />
      <CityCelector cityIndx={cityIndx} />
      {/* <CityCard cityData={cityData} /> */}
    </div>
  );
}
export default App;

// Управление состоянием: В компоненте App спользуйте хук состояния useState, чтобы отправлять данные о выбранном городе в отображаемую карточку.
