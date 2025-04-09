import './App.css';
import TemperatureConverter from './components/TemperatureConverter';
import ToDoList from './components/TodoList ';

function App() {
  return (
    <div className='main'>
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

export default App;
