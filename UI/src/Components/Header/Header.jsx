export default function Header() {
  return (
    <header className='header'>
      <label htmlFor='' className='header__logo'>
        Pets
      </label>
      <nav className='nav header__nav'>
        <a href='#random'>
          <button className='nav__button'>Random</button>
        </a>
        <a href='#favorite'>
          <button className='nav__button'>Favorites</button>
        </a>
        <a href='#upload'>
          <button className='nav__button'>Upload</button>
        </a>
      </nav>
    </header>
  );
}
