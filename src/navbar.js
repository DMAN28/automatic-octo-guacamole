// sfc and TAB create the component below
const Navbar = () => {
    const handleClick = () => {
        console.log('Hello')
    }

    return ( 
      <nav className="navbar">
          <h1>Davids Portfolio</h1>
          <div className="links">
          <a href ="/">Home</a>
          <a onClick={handleClick} href ="/" style ={{ 
              color: "white", 
              backgroundColor: 'rgb(50, 7, 150)',
              borderRadius: '8px'
              }} >Projects</a>
          </div>
      </nav> 
     );
}
 
export default Navbar;