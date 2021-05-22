import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import qs from "qs";
import { Header } from "../components";
import Taxi from "../assets/taxi.png";
import { KAKAO_API } from "../api";
import config from "../config";

const MainPage = () => {
  const history = useHistory();
  const location = useLocation();
  const query = qs.parse(location.search, { ignoreQueryPrefix: true });

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
        <div>
          <p style={{ margin: 0 }}>{"안심귀가"}</p>
          <p style={{ margin: 0 }}>{"서비스 등록하기"}</p>
        </div>
      </div>
      <div style={{ marginBottom: 25, fontSize: 24 }}>{"서비스 소개"}</div>
      <div style={{ fontSize: 14, lineHeight: "20px" }}>
        {
          "오는 길 서비스는 어린이집에서 늦게 귀가하는 아이들을 위한 서비스입니다. 부모님이 오는 길 서비스는 통해서 아이가 다니는 어린이집에 안심귀가 서비스를 등록해두시면 어린이집 교사가 주변에 사는 아이들끼리 텍시에 탑승하도록 지도하여 아이들이 안심하고  귀가할 수 있습니다."
        }
      </div>
    </div>
  );
};

export default MainPage;
