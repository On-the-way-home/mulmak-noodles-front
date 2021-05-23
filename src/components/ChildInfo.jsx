import {Link} from 'react-router-dom';
import "./ChildInfo.css"
const ChildInfo = ({childData, useageData, calendarData}) => {

  return (
      
    <div className="saved-child">
        <Link className="link" to={{pathname : "/history", state : {childData, useageData, calendarData}}}>
    <h3>{childData.childHouseName}</h3>
    <h3>{childData.childName} / {childData.gender} / {childData.age}세</h3>
    <div className="container">
    <h3 className="account">{childData.bankAccount}</h3>
    <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style={{ cursor: "pointer", alignSelf: "flex-end" }}
            >
              <path fill="none" d="M0 0H24V24H0z" />
              <path
                fill="#7e84a3"
                d="M15 5l-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7z"
              />
            </svg>
            </div>
            </Link>
    </div>
    
  );
};

export default ChildInfo;
