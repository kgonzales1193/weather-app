import Profile from '../components/Profile';

function Home() {
  return (
    <div>
      <Profile />
      <div className="h-container">
        <img src="../assets/Sunny.svg" alt="Sunny" />
        <a href="/weather">
          <button className="btn btn-secondary">
            <b>Check the Weather Today</b>
          </button>
        </a>
      </div>
    </div>
  );
}
export default Home;
