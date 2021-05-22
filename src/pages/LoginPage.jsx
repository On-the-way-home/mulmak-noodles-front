import Logo from "../assets/logo.png";
import config from "../config";

const LoginPage = () => {
  const handleClickKakao = () => {
    if (!window.Kakao.Auth) window.Kakao.init(config.kakao.js_key);

    const params = {
      redirectUri:
        process.env.NODE_ENV === "development"
          ? "http://localhost:7777"
          : config.server,
    };
    window.Kakao.Auth.authorize(params);
  };

  const handleClickNaver = () => {
    // TODO
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        padding: "56px 0",
      }}
    >
      <img style={{ width: 116, height: 116 }} src={Logo} alt="logo" />
      <p style={{ margin: "19px 0", fontSize: 14 }}>
        {"“아이들 밤길 걱정 덜어주는 모빌리티 귀가 서비스”"}
      </p>
      <p style={{ margin: 0, fontSize: 20 }}>{"오는 길"}</p>
      <div
        style={{
          cursor: "pointer",
          background: "#fee500",
          width: "100%",
          height: 56,
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          position: "relative",
          margin: "118px 0 22px",
        }}
        onClick={handleClickKakao}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="33.766"
          viewBox="0 0 36 33.766"
          style={{ position: "absolute", left: "14px" }}
        >
          <path
            fillRule="evenodd"
            d="M612 1146.936c-9.941 0-18 6.256-18 13.973 0 4.8 3.117 9.03 7.863 11.546l-2 7.33a.736.736 0 0 0 1.127.79l8.754-5.806c.738.071 1.489.112 2.253.112 9.941 0 18-6.255 18-13.972s-8.059-13.973-18-13.973"
            opacity="0.902"
            transform="translate(-594 -1146.936)"
          />
        </svg>

        {"카카오 로그인"}
      </div>
      <div
        style={{
          cursor: "pointer",
          background: "#1ec800",
          color: "#fff",
          width: "100%",
          height: 56,
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
        onClick={handleClickNaver}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          style={{ position: "absolute", left: "14px" }}
        >
          <g transform="translate(-269 -655.238)">
            <rect
              width="36"
              height="36"
              fill="#1ec800"
              rx=".5"
              transform="translate(269 655.238)"
            />
            <path
              fill="#fff"
              d="M313.991 690.351v9.287l-6.361-9.287h-6.877v18.407h6.854v-9.287l6.362 9.287h6.875v-18.407z"
              transform="translate(-23.8 -26.318)"
            />
          </g>
        </svg>

        {"네이버 아이디로 로그인"}
      </div>
    </div>
  );
};

export default LoginPage;
