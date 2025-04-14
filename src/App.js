import './App.css';
import CommentsList from './components/CommentsList';
import TemperatureConverter from './components/TemperatureConverter';
import ToDoList from './components/TodoList ';

function App() {
  return (
    <div className='main'>

      {/* Домашние задание к семинару 1 */}

      {/* <header className='header'>
        <News country="Южная Корея"
          article="На этой неделе погода в Южной Корее будет переменчивой: от солнечных дней до кратковременных дождей. Температура остаётся комфортной для начала весны, но в некоторых регионах возможны прохладные ночи." />
      </header> */}


      {/* Домашние задание к семинару 2 */}

      {/* <div className='comments'>
        <h2>Список комментариев</h2>
        <ul>
          <CommentsList />
        </ul>
      </div> */}


      {/* Домашние задание к семинару 3 */}

      <div className='degrees__Calculater'>
        <h2>Калькулятор градусов</h2>
        <TemperatureConverter />
      </div>
      <div className='toDoList'>
        <h2>Список дел</h2>
        <ToDoList />
      </div>
    </div>
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
