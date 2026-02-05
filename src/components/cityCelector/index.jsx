// Подготовка данных: В компоненте CityCelector определите массив объектов в JavaScript,
// содержащий информацию о каждом городе, включая название, описание, изображение и факты.
import CityCard from '../cityCard';

function CityCelector({ cityIndx }) {
  const cityArr = [
    {
      name: 'Берлин',
      pic: 'https://lh3.googleusercontent.com/gps-cs-s/AHVAwerXVV1EsvVCr6JynKg27ZEubtPpNmhA8PuVBPNW-1DI6htNrm2rtjt6dKkIx7dK-NKX3k6oyqBROJPR-5bpwgESap-YWYeKYH3kE08jLAV4CkLYN0uAKBtK7kYfp4rg3AcyN9IFw1jU2nk=w540-h312-n-k-no',
      desc: 'Берлин – столица Германии',
      fact: 'Столица и крупнейший город Германии, который в 9 раз больше Парижа по площади',
    },
    {
      name: 'Дюссельдорф',
      pic: 'https://pohcdn.com/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/dusseldorf-castle.jpg',
      desc: 'Дюссельдорф — один из 5 крупнейших экономических и культурных центров Германии.',
      fact: 'Японский центр: Дюссельдорф — крупнейший центр японской культуры в Германии, где проживает более 7 тысяч японцев.',
    },
    {
      name: 'Эссен',
      pic: 'https://media.essen.de/media/wwwessende/bilder/bilderpool_1/stadtteile_1/stadtkern/stadtkern_heute/2011-08-10_0129_Handelshof_speziell_0900_0700_sv.jpg',
      desc: 'Крупный город в центре Рурского региона Германии',
      fact: 'Эссен сегодня — это современный образовательный и экономический центр, гармонично сочетающий индустриальную историю с культурой и природой',
    },
  ];

  return (
    <div>
      <CityCard city={cityArr[cityIndx]} />
    </div>
  );
}
export default CityCelector;
