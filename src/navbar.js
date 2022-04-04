// sfc and TAB create the component below
const Navbar = () => {
    const handleClick = () => {
        console.log('Hello')
    }

    return ( 
      <nav className="navbar">
          <h1>Davids Portfolio</h1>
          <div className="links">
          <a href ="/" style ={{ 
              color: "white", 
              backgroundColor: 'rgb(2, 62, 138)',
              borderRadius: '8px'
              }} >Home</a>
          
          <a onClick={handleClick} href ="#projects" style ={{ 
              color: "white", 
              backgroundColor: 'rgb(2, 62, 138)',
              borderRadius: '8px'
              }} >Projects</a>
              
              <a onClick={handleClick} href="#about" style ={{ 
              color: "white", 
              backgroundColor: 'rgb(2, 62, 138)',
              borderRadius: '8px'
              }} >About</a>
              
              <a onClick={handleClick} href="#contact" style ={{ 
              color: "white", 
              backgroundColor: 'rgb(2, 62, 138)',
              borderRadius: '8px'
              }} >Contact</a>
              
              <a onClick={handleClick} href ="resume" style ={{ 
              color: "white", 
              backgroundColor: 'rgb(2, 62, 138)',
              borderRadius: '8px'
              }} >Resume</a>
          </div>
      </nav> 
     );
}
 
export default Navbar;