import axios from "axios";
import config from "./config";

const kakao_client = axios.create({
  baseURL: config.kakao.kauth_server,
  headers: {
    Authorization: config.kakao.admin_key,
    "Content-type": "application/x-www-form-urlencoded",
  },
});

const KAKAO_API = {
  getToken(code) {
    const data = {
      grant_type: "authorization_code",
      client_id: config.kakao.rest_key,
      redirect_uri:
        process.env.NODE_ENV === "development"
          ? "http://localhost:7777"
          : config.server,
      code: code,
    };

    const queryString = Object.keys(data)
      .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
      .join("&");
    return kakao_client.post("/oauth/token", queryString);
  },
  getUserInfo() {},
};

export { KAKAO_API };
