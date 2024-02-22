import { Card } from './components/Card/Card';
import { User } from './components/User/User';

function App() {


  return (
    <div >
      <User nombre="Dillon Duncan" edad={18} nacionalidad="Colombiana"/>
      <Card/>    
    </div>
  );
}

export default App;
