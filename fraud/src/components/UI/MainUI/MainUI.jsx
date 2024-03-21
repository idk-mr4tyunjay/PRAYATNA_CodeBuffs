import Feature from "./Features/Feature"
import Footer from "../Footer/Footer"
import Navbar from "./Nav/Navbar"
import Output from "./Features/Output"

function MainUI() {
  return (
    <div className="mainui1">
    <Navbar/>
    <Feature />
    <Output/>
    <Footer/>

  </div>  )
}

export default MainUI