import { useState } from "react";

const translations = {
  ko: {
    title: "Global Safe Dongducheon",
    emergency: "긴급 상황",
    tips: "예방 정보",
    help: "도움 요청",
    back: "뒤로",
    call112: "112 신고",
    call119: "119 신고",
    helpNow: "도와주세요!",
    police: "근처 경찰서 찾기",
    location: "내 위치 사용"
  },
  en: {
    title: "Global Safe Dongducheon",
    emergency: "Emergency",
    tips: "Safety Tips",
    help: "Get Help",
    back: "Back",
    call112: "Call 112",
    call119: "Call 119",
    helpNow: "Help Me!",
    police: "Find Police",
    location: "Use Location"
  },
  ur: {
    title: "Global Safe Dongducheon",
    emergency: "ہنگامی حالت",
    tips: "حفاظتی معلومات",
    help: "مدد",
    back: "واپس",
    call112: "112 کال کریں",
    call119: "119 کال کریں",
    helpNow: "مدد کریں!",
    police: "قریبی پولیس",
    location: "میری لوکیشن"
  },
  ru: {
    title: "Global Safe Dongducheon",
    emergency: "Экстренная ситуация",
    tips: "Советы",
    help: "Помощь",
    back: "Назад",
    call112: "Позвонить 112",
    call119: "Позвонить 119",
    helpNow: "Помогите!",
    police: "Найти полицию",
    location: "Моё местоположение"
  },
  zh: {
    title: "Global Safe Dongducheon",
    emergency: "紧急情况",
    tips: "预防信息",
    help: "获取帮助",
    back: "返回",
    call112: "拨打112",
    call119: "拨打119",
    helpNow: "救命！",
    police: "查找警察局",
    location: "使用我的位置"
  }
};

export default function App() {
  const [screen, setScreen] = useState("home");
  const [lang, setLang] = useState("ko");
  const t = translations[lang];

  const openMap = () => {
    window.open("https://www.google.com/maps/search/police", "_blank");
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      
      <select onChange={(e) => setLang(e.target.value)}>
        <option value="ko">한국어</option>
        <option value="en">English</option>
        <option value="ur">Urdu</option>
        <option value="ru">Русский</option>
        <option value="zh">中文</option>
      </select>

      <h2>{t.title}</h2>

      {screen === "home" && (
        <>
          <button onClick={() => setScreen("emergency")}>{t.emergency}</button>
          <button onClick={() => setScreen("tips")}>{t.tips}</button>
          <button onClick={() => setScreen("help")}>{t.help}</button>
        </>
      )}

      {screen === "emergency" && (
        <>
          <button onClick={() => setScreen("home")}>{t.back}</button>
          <a href="tel:112"><button>{t.call112}</button></a>
          <a href="tel:119"><button>{t.call119}</button></a>
          <a href="tel:112"><button>{t.helpNow}</button></a>
        </>
      )}

      {screen === "tips" && (
        <>
          <button onClick={() => setScreen("home")}>{t.back}</button>
          <p>보이스피싱 / 알바사기 / 전세사기 / 연애사기</p>
        </>
      )}

      {screen === "help" && (
        <>
          <button onClick={() => setScreen("home")}>{t.back}</button>
          <button onClick={openMap}>{t.police}</button>
          <a href="tel:112"><button>{t.call112}</button></a>
        </>
      )}

    </div>
  );
}
