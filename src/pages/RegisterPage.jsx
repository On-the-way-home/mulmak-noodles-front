import { Header } from "../components";
import "./RegisterPage.css"

const RegisterPage = () => {
  return (
    <div className="register">
      <Header />
      <div className="search-bar">
      <input type="search" className="search" placeholder="어린이집 검색"/>
      </div>
      <div className="child-info">
      <div className="types name">
        <label for="input-name">아이 이름</label> <br/>
        <input type="text" id="input-name" placeholder="이름을 입력해주세요"/>
      </div>
      <div className="types gender">
        <label for="input-gender">아이 성별</label> <br/>
        <select type="text" id="input-gender">
          <option value="male">남</option>
          <option value="female">여</option>
        </select>
      </div>
      <div className="types age">
      <label for="input-age">아이 나이</label> <br/>
      <input type="text" id="input-age" placeholder="나이를 입력해주세요"/>
      </div>
    </div>

    <div className="pay-info">
      <h3>결제수단 등록</h3>
      
      <div className="types number" >
      <label for="card-number">카드번호</label> <br/>
      <input type="text" id="card-number" placeholder="14-16자리"/>
      </div>

      <div className="flex-container" style={{width:"300px"}}>
      <div className="types val-date">
      <label for="input-val-date">유효기간</label> <br/>
      <input type="text" id="input-val-date" placeholder="MM/YY" style={{width:"150px"}}/>
      </div>

      <div className="types pwd" >
      <label for="input-pwd">카드 비밀번호</label> <br/>
      <input type="text" id="input-pwd" placeholder="앞 2자리" style={{width: "150px"}}/>
      </div>
      </div>

      <div className="types birth">
      <label for="input-birth">생년월일</label> <br/>
      <input type="text" id="input-birth" placeholder="YYMMDD"/>
      </div>
    </div>

    <div className="register-button">
    <button>
      안심귀가 서비스 등록
    </button>
    </div>
    </div>
  );
};

export default RegisterPage;
