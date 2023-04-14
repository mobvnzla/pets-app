import Header from './Components/Header/Header.jsx';
import FavoriteSection from './Components/Main section/Favorite section/FavoriteSection.jsx';
import RandomSection from './Components/Main section/Random section/RandomSection';
import UploadSection from './Components/Main section/Upload section/UploadSection.jsx';

function App() {
  return (
    <>
      <Header></Header>
      <main className='main'>
        <RandomSection></RandomSection>
        <FavoriteSection></FavoriteSection>
        <UploadSection></UploadSection>
      </main>
      <footer className='footer'>
        <h2>footer</h2>
      </footer>
    </>
  );
}

export default App;
