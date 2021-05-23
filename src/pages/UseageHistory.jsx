import Calendar from "react-calendar"
import { useHistory } from "react-router-dom";
import {useEffect} from 'react'
import 'react-calendar/dist/Calendar.css'
import "./UseageHistory.css"

const UseageHistory = ({location}) =>{
    console.log(location)
    const history = useHistory();

    const handleClick = () => {
      history.push("/");
    };
   
    useEffect(()=>{
        const calendar = document.querySelectorAll('.react-calendar__tile.react-calendar__month-view__days__day')
        location.state.calendarData.forEach((e,i)=>{
            calendar[+e-1].style.backgroundColor = '#006edc'
            calendar[+e-1].style.borderRadius = '50%'
        })
    })

    return (
        <div className="useage-history">
        <div onClick={handleClick} className="header">
            <p style={{ fontFamily:"AppleSDGothicNeo", cursor: "pointer", margin: 0 }}>{"이용내역"}</p>
        </div>
        <div className="saved-child">
        <h3>{location.state.childData.childHouseName}</h3>
        <h3>{location.state.childData.childName} / {location.state.childData.gender} / {location.state.childData.age}세</h3>
        <h3>{location.state.childData.bankAccount}</h3>
    </div>
        <div className="calendar">
            <Calendar
            calendarType="Arabic"/>
        </div>
        <div className="month-summary">
            <div className="month-cost">
                <h2>지출 비용</h2>
                <h3>₩{location.state.useageData.cost}</h3>
            </div>
            <div className="month-count">
                <h2>이용 횟수</h2>
                <h3>{location.state.useageData.count}회</h3>
            </div>
        </div>
        </div>
    )
}

export default UseageHistory