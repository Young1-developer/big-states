import Navber from "./components/Navber"
import Travel from "./components/Travel"
import data from "./data"
import "./index.css"



function App() {
  const DataItems = data.map((item =>{
    return(
      <Travel 
      key={item.id}
       {...item}
      />
    )
  }))

  return (
    <div className="container">
      <Navber/>
      {DataItems}
    </div>
  );
}

export default App;
