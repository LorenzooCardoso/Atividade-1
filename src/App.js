import './App.css';

function App() {
  const tasks=[
  { id: 1, text: 'Aprender React'},
  { id: 2, text: 'Construir um projeto simples'},
  { id: 3, text: 'Entender Promps e State'}
];
  const listatasks=tasks.map(
    (c)=>
      <li>{c}</li>
  )


  return(
    <div className="carros">
        <ul>{listatasks}</ul>
    </div>
  );
}

export default App;
 