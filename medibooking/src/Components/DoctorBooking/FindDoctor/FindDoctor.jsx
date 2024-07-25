import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
 
import './FindDoctor.css';
import imgUrl from "../../../assets/bro2.png"

const initSpeciality = [
  'Dentist', 'General Physician', 'Dermatologist', 'Gynecologist/obstetrician'
]
const FindDoctor = () => {
  const [resultHidden, setResultHidden] = useState(true);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const handleSelect = (speciality) => {
      setSearch(speciality);
      setResultHidden(true);
      navigate(`/doctor-booking?speciality=${speciality}`);
      window.location.reload();
  }
  return (
    <section className='find-doctor'>
      <h2>Find doctor at your own ease</h2>
      <div>
        <img src={imgUrl} alt="doctors"/>
      </div>
      <div className="search-container"> 
        <div className="search-box">
          <div className='search-bar'>
            <input type="text" className="search-input" placeholder="Search doctors, clinics, hospitals, etc." 
              value={search} onChange={(e) => setSearch(e.target.value)}
              onFocus={() => setResultHidden(false)}   //click inside
              onBlur={() => setResultHidden(true)}  //click outside
            />
            <i className="fa fa-search search-icon" aria-hidden="true"></i>
          </div>
          <div className="search-result" hidden={resultHidden}>
            {
              initSpeciality.map(speciality => ( 
              <div className="search-result-item" onMouseDown={() => handleSelect(speciality)}>
                <i className="fa fa-search search-icon" aria-hidden="true"></i>
                <span key={speciality}  >
                  {speciality}
                </span>
              </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default FindDoctor