
import './App.css';
import Card from './components/card/card';
import Categories from './helper/data';



function App() {
  return (
    <div className="App">
      {Categories.map((card)=>{
        return(
        <Card key={card.name} {...card}/>
      )})}
      
    </div>
  );
}

export default App;
