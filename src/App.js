import './App.css';
import AddTask from './Components/AddTask/AddTask';
import ListTask from './Components/ListTask/ListTask';
import { Provider } from 'react-redux';
import store from './Redux/Store';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AddTask />
        <ListTask />
      </Provider>
    </div>
  );
}

export default App;
