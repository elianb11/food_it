import logo from './logo.svg';
import logo_text from './logo_text.png'
import './AppMaintenance.css';

function AppMaintenance() {
  return (
    <div className="AppMaintenance">
      <header className="App-header">
        <img src={logo_text} className="App-logo_text" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Notre site est actuellement en maintenance !
        </p>
        <p>
          Merci pour votre compréhension.
        </p>
      </header>
    </div>
  );
}

export default AppMaintenance;
