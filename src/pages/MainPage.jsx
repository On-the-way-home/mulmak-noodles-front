import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Header } from "../components";

const MainPage = () => {
  const history = useHistory();

  useEffect(() => {
    //   FIXME
    // 로그인 시 name (카카오/네이버의 닉네임정보) 값을 로컬 스토리지에 저장한다고 가정한다.
    // 앱 실행 시 이 데이터가 없으면 로그인 페이지로 리다이렉트한다.
    if (!localStorage.getItem("name")) {
      history.push("/login");
    }
  }, []);

  return (
    <div>
      <Header />
      {"Main"}
    </div>
  );
};

export default MainPage;
