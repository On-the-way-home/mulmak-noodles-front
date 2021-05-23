import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import qs from "qs";
import { Header } from "../components";
import Taxi from "../assets/taxi.png";
import { KAKAO_API } from "../api";
import config from "../config";
import ChildInfo from "../components/ChildInfo"
import axios from "axios"
const MainPage = () => {
  const history = useHistory();
  const location = useLocation();
  const query = qs.parse(location.search, { ignoreQueryPrefix: true });
  const [childInfo, setChildInfo] = useState(null)
  const [useageInfo, setUseageInfo] = useState(null)
  const [calendarInfo, setCalendarInfo] = useState(null)
  useEffect(() => {
    //   FIXME
    // 로그인 시 name (카카오/네이버의 닉네임정보) 값을 로컬 스토리지에 저장한다고 가정한다.
    // 앱 실행 시 이 데이터가 없으면 로그인 페이지로 리다이렉트한다.
    if (!query.code && !localStorage.getItem("name")) history.push("/login");
    if (query.code !== undefined) {
      KAKAO_API.getToken(query.code)
        .then((res) => {
          window.Kakao.init(config.kakao.js_key);
          window.Kakao.Auth.setAccessToken(res.data.access_token);
          window.Kakao.API.request({
            url: "/v2/user/me",
            success: function (result) {
              localStorage.setItem("name", result.properties.nickname);
              history.push("/");
            },
            fail: function (error) {
              console.log(error);
            },
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  useEffect(()=>{
    axios.get("http://13.124.255.171:4000/kid/1")
    .then(res => {
      setChildInfo(res.data.data.child)
      setUseageInfo({cost: res.data.data.cost, count : res.data.data.count})
      setCalendarInfo(res.data.data.calender)
      console.log(res.data.data)
    })
  },[])

  const handleClick = () => {
    history.push("/register");
  };

  return (
    <div>
      <Header />
      <div
        style={{
          cursor: "pointer",
          background: "#fff",
          height: "140px",
          boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#7e84a3",
          margin: "48px 0 70px",
        }}
        onClick={handleClick}
      >
        <img
          src={Taxi}
          alt="Taxi"
          style={{ width: 120, height: 63, marginRight: 27.8 }}
        />
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: 5 }}>
            <p style={{ margin: 0, fontSize: 14 }}>{"안심귀가"}</p>
            <p style={{ margin: 0, fontSize: 14 }}>{"서비스 등록하기"}</p>
          </div>
          <div style={{ display: "flex" }}>
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
        </div>
      </div>
      <div style={{ marginBottom: 25, fontSize: 24 }}>{"서비스 소개"}</div>
      <div style={{ fontSize: 14, lineHeight: "20px" }}>
        {
          "오는 길 서비스는 어린이집에서 늦게 귀가하는 아이들을 위한 서비스입니다. 부모님이 오는 길 서비스는 통해서 아이가 다니는 어린이집에 안심귀가 서비스를 등록해두시면 어린이집 교사가 주변에 사는 아이들끼리 텍시에 탑승하도록 지도하여 아이들이 안심하고  귀가할 수 있습니다."
        }
      </div>

      <div className="registerd">

      <div className="header">
      <p style={{ fontFamily:"AppleSDGothicNeo", cursor: "pointer", marginTop: "30px" }}>{"등록현황"}</p>
      </div>
      {childInfo ? childInfo.map((elem, idx)=>{
        return <ChildInfo key={idx} childData={elem} useageData={useageInfo} calendarData={calendarInfo}/>
      }) : <></>}
      </div>
    </div>
  );
};

export default MainPage;
