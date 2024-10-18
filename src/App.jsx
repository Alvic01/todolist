import './App.css';
const toDoList = [
  "Faire les courses", "Ranger la cuisine"
]
function App() {
  return (
    <div className="App">
      <ul>
        {toDoList.map(item => <li>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;
