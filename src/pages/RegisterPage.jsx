import {useRef} from 'react'
import { Header } from "../components";
import { useHistory} from "react-router-dom";
import axios from "axios"
import "./RegisterPage.css"

const RegisterPage = () => {

  const history = useHistory();
  const childHouseRef = useRef()
  const childNameRef = useRef()
  const childGenderRef = useRef()
  const childAgeRef = useRef()
  const cardNumRef = useRef()
  const cardValDateRef = useRef()
  const cardPwdRef = useRef()
  const birthRef = useRef()
  return (
    <div className="register">
      <Header />
      
      <div className="child-info">
      <div className="types center">
      <input ref={childHouseRef} type="search" className="type" placeholder="어린이집을 입력해주세요"/>
      </div>
      <div className="types name">
        <label htmlfor="input-name">아이 이름</label> <br/>
        <input ref={childNameRef} type="text" id="input-name" placeholder="이름을 입력해주세요"/>
      </div>
      <div className="types gender">
        <label htmlfor="input-gender">아이 성별</label> <br/>
        <select ref={childGenderRef} type="text" id="input-gender">
          <option value="남">남</option>
          <option value="여">여</option>
        </select>
      </div>
      <div className="types age">
      <label htmlfor="input-age">아이 나이</label> <br/>
      <input ref={childAgeRef} type="text" id="input-age" placeholder="나이를 입력해주세요"/>
      </div>
    </div>

    <div className="pay-info">
      <h3>결제수단 등록</h3>
      
      <div className="types number" >
      <label htmlfor="card-number">카드번호</label> <br/>
      <input ref={cardNumRef} type="text" id="card-number" placeholder="14-16자리"/>
      </div>

      <div className="flex-container" style={{width:"300px"}}>
      <div className="types val-date">
      <label htmlfor="input-val-date">유효기간</label> <br/>
      <input ref={cardValDateRef} type="text" id="input-val-date" placeholder="MM/YY" style={{width:"150px"}}/>
      </div>

      <div className="types pwd" >
      <label htmlfor="input-pwd">카드 비밀번호</label> <br/>
      <input ref={cardPwdRef} type="text" id="input-pwd" placeholder="앞 2자리" style={{width: "150px"}}/>
      </div>
      </div>

      <div className="types birth">
      <label htmlfor="input-birth">생년월일</label> <br/>
      <input ref={birthRef} type="text" id="input-birth" placeholder="YYMMDD"/>
      </div>
    </div>

    <div className="register-button">
    <button onClick={()=>{
      console.log({
        centerName : childHouseRef.current.value,
        kidName : childNameRef.current.value,
        kidGender : childGenderRef.current.value,
        kidAge : childAgeRef.current.value,
        cardNum : cardNumRef.current.value,
        cardDate : cardValDateRef.current.value,
        cardPassword : cardPwdRef.current.value,
        birthDate : birthRef.current.value,
        UserId : 1})
      axios.post('http://13.124.255.171:4000/kid', {
        centerName : childHouseRef.current.value,
        kidName : childNameRef.current.value,
        kidGender : childGenderRef.current.value,
        kidAge : +(childAgeRef.current.value),
        cardNum : cardNumRef.current.value,
        cardDate : cardValDateRef.current.value,
        cardPassword : cardPwdRef.current.value,
        birthDate : birthRef.current.value,
        UserId : 1})
      .then((response) =>  history.push("/"))
    }}>
      안심귀가 서비스 등록
    </button>
    </div>
    </div>
  );
};

export default RegisterPage;
