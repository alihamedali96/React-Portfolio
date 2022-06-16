import Typed from "react-typed";

function Header() {
    return (
    <div className="Header-wrapper">
        <div className="main-info">
            <h1>Web and App Developer </h1>
            <Typed
            className= "typed-text"
            strings= {["Full stack Developer","Web Developer","Backend Engineer"]}
            typeSpeed ={40}
            backSpeed = {60}
            loop
            />
          
        </div>
    </div>
    );
  }
 
export default Header ;
