import './App.css';
import AddMember from './new_member/Member';

function App() {
  

  return (
    <div>
      <img id="logo" src="swirl.png" alt="Logo"></img>
      <h1>        
        Screwball
      </h1>
      <hr></hr>
      <div>
        <AddMember/>
      </div>      
    </div>
  );
}

export default App;
