import Calendar from "react-calendar"
import { useHistory } from "react-router-dom";
import 'react-calendar/dist/Calendar.css'
import "./UseageHistory.css"
const UseageHistory = () =>{

    const history = useHistory();

    const handleClick = () => {
      history.push("/");
    };

    const PARENT_DUMMPY = {
        bankAccount : "국민 **1234 개인",
        child : [
            {
                childHouseName : "화랑 어린이집",
                childName : "이호준",
                gender : "남",
                age : "4"
            }
        ],
        cost : 59340,
        count : 4
    }

    return (
        <div className="useage-history">
        <div onClick={handleClick} className="header">
            <p style={{ fontFamily:"AppleSDGothicNeo", cursor: "pointer", margin: 0 }}>{"이용내역"}</p>
        </div>
        <div className="saved-child">
            <h3>{PARENT_DUMMPY.child[0].childHouseName}</h3>
            <h3>{PARENT_DUMMPY.child[0].childName} / {PARENT_DUMMPY.child[0].gender} / {PARENT_DUMMPY.child[0].age}세</h3>
            <h3>{PARENT_DUMMPY.bankAccount}</h3>
        </div>
        <div className="calendar">
            <Calendar
            calendarType="Arabic"/>
        </div>
        <div className="month-summary">
            <div className="month-cost">
                <h2>지출 비용</h2>
                <h3>₩{PARENT_DUMMPY.cost}</h3>
            </div>
            <div className="month-count">
                <h2>이용 횟수</h2>
                <h3>{PARENT_DUMMPY.count}회</h3>
            </div>
        </div>
        </div>
    )
}

export default UseageHistory