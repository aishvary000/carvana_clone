import react from "react";

import "./Section.css";
import bg from '../assets/download.jpeg'
import sIcon from '../assets/searchIcon.png';


const Section = () => {

    return (<>
    
    <div className="main-section">
    <div className="section-box">
        <img className="section-img" src="https://www.carbravo.com/s3/uploads/US/homepage_woman_in_drivers_seat_lg_cd133524b8.jpg?imwidth=1440" alt="Loading" />
    </div>
    <div className="heading">
        <h1>The cars are used.</h1>
    </div>
    <div className="heading-2">
        <h1>The experience is</h1>
    </div>
    <div className="heading-3">
        <h1>amazingly new.</h1>
    </div>

    <div className="inputArea">
        <img src={sIcon} className="sIcon" alt="loading" />
        <input className="inputcss" placeholder="Search by make, Model,Keyword" type="text" />

    </div>
    </div>
    
    
    
    </>
    )
}


export default Section;
