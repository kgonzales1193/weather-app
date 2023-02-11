import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from './Logout';

function Header() {
  const { isAuthenticated } = useAuth0();
  return (
    <header>
      <div className="header">
        <a href="/">
          <img src="../assets/cloud.svg" alt="cloud" />
        </a>
        <h1>Weather App</h1>
        {isAuthenticated ? <LogoutButton /> : null}
      </div>
    </header>
  );
}
export default Header;
