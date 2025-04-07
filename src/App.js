import './App.css';

function App() {
  return (
    <header className='header'>
      <News country="Южная Корея"
        article="На этой неделе погода в Южной Корее будет переменчивой: от солнечных дней до кратковременных дождей. Температура остаётся комфортной для начала весны, но в некоторых регионах возможны прохладные ночи." />
    </header>
  );
}

function News(props) {
  return (
    <div>
      <h1 style={{ color: "green" }} className='header__greeting'>Привет, {props.country}!</h1>
      <article style={{ color: "purple" }} className='header__article'>{props.article}</article>
    </div>
  )
}

export default App;
