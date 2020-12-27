import './App.css';
import AddMember from './new_member/Member';

function App() {
  

  return (
    <div>
      <img id="logo" src="logo-small.png" alt="Logo"></img>
      <hr></hr>
      <div class="rest">
        <AddMember/>
      </div>      
    </div>
  );
}

export default App;
