
import './App.css';

const thrupleNames = [
  {name: "FinMirDis" , members: "Finwe/Miriel/Indis", formed:17}
  ,{name: "Elwing's Ambarussa" , members: "Elwing/Amras/Amrod", formed:587}
  ,{name: "RedBluethien" , members: "Beren/Luthien/Amrod", formed: 500 }
  ,{name: "CelGilRond" , members: "Celebrian/Gil-Galad/Elrond", formed: 2739 }
];

function Welcome(){
  return(<h1>If there's one thing from the Silm that I like it's a good Thruple</h1>);
}

function Thruple({name, members, formed} : {name: string; members:string; formed:number;}){

  return(
    <>
      <img />
      <h2>{name}</h2>
      <h3>Origenal Members: {members}</h3>
      <h3>Formed: {formed}</h3>
    </>
  );
}

function ThrupleList(){
  return(
    // These are react cragments, it fuctions like a div
    <> 
      {/* THIS is like a loop  */}
      {thrupleNames.map((singleThruple) => (
        <Thruple {...singleThruple} />
      ))}
      </>

  )

}

function App() {

  return (
    <>
      <Welcome/>

    {/* THIS is calling the function */}
      <ThrupleList />  
    </>
  )
}

export default App
