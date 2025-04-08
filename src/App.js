import './App.css';
import CommentsList from './components/CommentsList';

function App() {
  return (
    <div className='comments'>
      <h2>Список комментариев</h2>
      <ul>
        <CommentsList />
      </ul>
    </div>
  );
}

export default App;
