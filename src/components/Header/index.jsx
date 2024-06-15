import './Header.css'

function Header() {
  return (
      <div className='header'>
        <div className='tab home'><p>Home</p></div>
        <div className='tab webapps'><p>Web & Apps</p></div>
        <div className='tab unity'><p>Game Development</p></div>
        <div className='tab modeling'><p>3D Modedeling</p></div>
        <div className='tab contact'><p>Contact me</p></div>
      </div>
    
  );
}

export default Header;