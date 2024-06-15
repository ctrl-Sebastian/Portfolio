import './Header.css'

function Header() {
  return (
      <div className='header'>
          
        <div className='tab home'>
        <a href='#hero'>
          <p>Home</p>
        </a>
        </div>

        <div className='tab webapps'>
          <p>Web & Apps</p>
        </div>

        <div className='tab unity'>
          <p>Game Development</p>
        </div>

        <div className='tab modeling'>
          <p>3D Modedeling</p>
        </div>

        <div className='tab contact'>
          <p>Contact me</p>
        </div>

      </div>
    
  );
}

export default Header;