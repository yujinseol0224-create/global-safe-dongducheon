import { useMemo, useState } from "react";
import {
  Globe,
  ShieldAlert,
  ShieldCheck,
  MapPin,
  Phone,
  ChevronLeft,
  Languages,
  Siren,
  Building2,
} from "lucide-react";

const translations = {
  ko: {
    langLabel: "언어",
    appTitle: "Global Safe Dongducheon",
    appSubtitle: "다국어 안전 안내 서비스",
    emergency: "긴급 상황",
    safetyTips: "예방 정보",
    getHelp: "도움 요청",
    back: "뒤로가기",
    emergencyTitle: "긴급 신고",
    emergencyDesc: "위급한 상황에서는 아래 버튼을 눌러 바로 신고하세요.",
    call112: "112 신고 바로가기",
    call119: "119 신고 바로가기",
    helpNow: "긴급 도움 요청",
    tipsTitle: "범죄예방 정보",
    tipsSubtitle: "자주 발생하는 생활범죄 유형을 확인하세요.",
    tip1: "보이스피싱",
    tip2: "취업 · 알바 사기",
    tip3: "주거 · 임대 사기",
    tip4: "연애 · 친분 사기",
    tip5: "긴급 신고 이용 안내",
    helpTitle: "가까운 경찰관서 찾기",
    helpSubtitle: "내 위치를 기준으로 근처 경찰서·지구대·파출소를 찾을 수 있습니다.",
    useLocation: "내 위치 사용",
    locationReady: "현재 위치가 확인되었습니다.",
    locationPending: "위치 정보를 확인하면 주변 경찰관서 검색 버튼이 활성화됩니다.",
    openNearbyPolice: "근처 경찰관서 보기",
    locationError: "위치 확인에 실패했습니다. 브라우저 위치 권한을 확인해주세요.",
    policeGuide: "버튼을 누르면 지도 앱에서 내 주변 경찰관서를 바로 검색합니다.",
    direct112: "상담 요청 대신 112 바로 연결",
    footer: "외국인·주민 대상 안전 안내용 시범 웹앱",
  },
  en: {
    langLabel: "Language",
    appTitle: "Global Safe Dongducheon",
    appSubtitle: "Multilingual Safety Guide",
    emergency: "Emergency",
    safetyTips: "Safety Tips",
    getHelp: "Get Help",
    back: "Back",
    emergencyTitle: "Emergency Call",
    emergencyDesc: "In an emergency, tap a button below to call immediately.",
    call112: "Call 112 Now",
    call119: "Call 119 Now",
    helpNow: "Request Urgent Help",
    tipsTitle: "Crime Prevention Info",
    tipsSubtitle: "Check common crime and scam categories.",
    tip1: "Voice Phishing",
    tip2: "Job Scam",
    tip3: "Housing / Rental Scam",
    tip4: "Romance Scam",
    tip5: "How to Use Emergency Calls",
    helpTitle: "Find Nearby Police Office",
    helpSubtitle: "Use your location to find the nearest police station, precinct, or substation.",
    useLocation: "Use My Location",
    locationReady: "Your location has been confirmed.",
    locationPending: "Nearby police search will be enabled after location access is granted.",
    openNearbyPolice: "Find Nearby Police Offices",
    locationError: "Location access failed. Please check your browser permissions.",
    policeGuide: "This opens your map app and searches nearby police offices around your location.",
    direct112: "Direct 112 connection instead of a form",
    footer: "Pilot safety web app for residents and foreign nationals",
  },
  ur: {
    langLabel: "زبان",
    appTitle: "Global Safe Dongducheon",
    appSubtitle: "کثیر لسانی حفاظتی رہنمائی",
    emergency: "ہنگامی صورتحال",
    safetyTips: "حفاظتی معلومات",
    getHelp: "مدد حاصل کریں",
    back: "واپس",
    emergencyTitle: "ہنگامی کال",
    emergencyDesc: "ہنگامی صورتحال میں فوراً کال کرنے کے لیے نیچے بٹن دبائیں۔",
    call112: "ابھی 112 پر کال کریں",
    call119: "ابھی 119 پر کال کریں",
    helpNow: "فوری مدد کی درخواست",
    tipsTitle: "جرم سے بچاؤ کی معلومات",
    tipsSubtitle: "عام جرائم اور دھوکہ دہی کی اقسام دیکھیں۔",
    tip1: "وائس فشنگ",
    tip2: "ملازمت یا پارٹ ٹائم فراڈ",
    tip3: "رہائش یا کرایہ فراڈ",
    tip4: "رومانوی فراڈ",
    tip5: "ہنگامی کال استعمال کرنے کا طریقہ",
    helpTitle: "قریبی پولیس دفتر تلاش کریں",
    helpSubtitle: "اپنی موجودہ جگہ کے قریب پولیس اسٹیشن، چوکی یا دفتر تلاش کریں۔",
    useLocation: "میری لوکیشن استعمال کریں",
    locationReady: "آپ کی موجودہ جگہ کی تصدیق ہو گئی ہے۔",
    locationPending: "لوکیشن کی اجازت ملنے کے بعد قریبی پولیس دفاتر کی تلاش فعال ہوگی۔",
    openNearbyPolice: "قریبی پولیس دفاتر دیکھیں",
    locationError: "لوکیشن حاصل نہیں ہو سکی۔ براہ کرم براؤزر کی اجازت چیک کریں۔",
    policeGuide: "یہ آپ کی نقشہ ایپ کھول کر آپ کے قریب پولیس دفاتر تلاش کرے گا۔",
    direct112: "فارم کے بجائے براہ راست 112 کال",
    footer: "رہائشیوں اور غیر ملکیوں کے لیے آزمائشی حفاظتی ویب ایپ",
  },
  ru: {
    langLabel: "Язык",
    appTitle: "Global Safe Dongducheon",
    appSubtitle: "Многоязычный гид по безопасности",
    emergency: "Экстренная ситуация",
    safetyTips: "Советы по безопасности",
    getHelp: "Получить помощь",
    back: "Назад",
    emergencyTitle: "Экстренный вызов",
    emergencyDesc: "В экстренной ситуации нажмите кнопку ниже для немедленного звонка.",
    call112: "Позвонить 112",
    call119: "Позвонить 119",
    helpNow: "Срочно нужна помощь",
    tipsTitle: "Информация по профилактике преступлений",
    tipsSubtitle: "Проверьте распространённые виды преступлений и мошенничества.",
    tip1: "Голосовой фишинг",
    tip2: "Мошенничество с работой",
    tip3: "Жилищное / арендное мошенничество",
    tip4: "Романтическое мошенничество",
    tip5: "Как пользоваться экстренным вызовом",
    helpTitle: "Найти ближайший полицейский участок",
    helpSubtitle: "Используйте своё местоположение, чтобы найти ближайший участок, отделение или пост полиции.",
    useLocation: "Использовать моё местоположение",
    locationReady: "Ваше местоположение подтверждено.",
    locationPending: "Поиск ближайшей полиции станет доступен после разрешения на доступ к геолокации.",
    openNearbyPolice: "Показать ближайшие отделения полиции",
    locationError: "Не удалось получить местоположение. Проверьте разрешения браузера.",
    policeGuide: "Кнопка откроет карту и выполнит поиск ближайших полицейских отделений рядом с вами.",
    direct112: "Прямое соединение с 112 вместо формы",
    footer: "Пилотное веб-приложение по безопасности для жителей и иностранцев",
  },
  zh: {
    langLabel: "语言",
    appTitle: "Global Safe Dongducheon",
    appSubtitle: "多语言安全指引服务",
    emergency: "紧急情况",
    safetyTips: "预防信息",
    getHelp: "获取帮助",
    back: "返回",
    emergencyTitle: "紧急报警",
    emergencyDesc: "如遇紧急情况，请点击下方按钮立即拨打电话。",
    call112: "立即拨打112",
    call119: "立即拨打119",
    helpNow: "请求紧急帮助",
    tipsTitle: "防犯罪信息",
    tipsSubtitle: "请查看常见犯罪和诈骗类型。",
    tip1: "语音诈骗",
    tip2: "求职 / 打工诈骗",
    tip3: "住房 / 租赁诈骗",
    tip4: "恋爱诈骗",
    tip5: "紧急报警使用说明",
    helpTitle: "查找附近警察机关",
    helpSubtitle: "使用您的位置查找附近的警察署、派出所或警务站。",
    useLocation: "使用我的位置",
    locationReady: "已确认您的当前位置。",
    locationPending: "允许位置权限后，将启用附近警察机关搜索功能。",
    openNearbyPolice: "查看附近警察机关",
    locationError: "无法获取位置，请检查浏览器定位权限。",
    policeGuide: "点击按钮后，将在地图应用中直接搜索您附近的警察机关。",
    direct112: "无需表单，直接连接112",
    footer: "面向居民和外国人的试点安全网页应用",
  },
};

const languageOptions = [
  { code: "ko", label: "한국어" },
  { code: "en", label: "English" },
  { code: "ur", label: "اردو" },
  { code: "ru", label: "Русский" },
  { code: "zh", label: "中文" },
];

function MenuButton({ icon, title, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-3xl p-5 text-left text-white shadow-lg transition hover:scale-[1.01] active:scale-[0.99] ${className}`}
    >
      <div className="flex items-center gap-4">
        <div className="rounded-2xl bg-white/20 p-3">{icon}</div>
        <div className="text-lg font-bold">{title}</div>
      </div>
    </button>
  );
}

function InfoCard({ title, subtitle, icon }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="rounded-xl bg-slate-100 p-2">{icon}</div>
        <div>
          <div className="font-semibold text-slate-900">{title}</div>
          <div className="mt-1 text-sm text-slate-500">{subtitle}</div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState("home");
  const [language, setLanguage] = useState("ko");
  const [coords, setCoords] = useState(null);
  const [locationError, setLocationError] = useState("");

  const t = useMemo(() => translations[language], [language]);

  const requestLocation = () => {
    setLocationError("");

    if (!navigator.geolocation) {
      setLocationError(t.locationError);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      () => {
        setLocationError(t.locationError);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000,
      }
    );
  };

  const openNearbyPolice = () => {
    const query = encodeURIComponent("지구대 파출소 경찰서");

    if (coords) {
      const url = `https://www.google.com/maps/search/?api=1&query=${query}&center=${coords.lat},${coords.lng}&zoom=15`;
      window.open(url, "_blank");
      return;
    }

    const url = `https://www.google.com/maps/search/?api=1&query=${query}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-slate-50 to-slate-100 p-4 text-slate-900">
      <div className="mx-auto w-full max-w-md overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl">
        <div className="bg-gradient-to-r from-blue-700 to-sky-500 p-5 text-white">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-sm font-medium opacity-95">
              <Globe size={18} />
              <span>{t.langLabel}</span>
            </div>

            <div className="relative">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="rounded-xl border border-white/30 bg-white/15 px-3 py-2 text-sm font-medium text-white outline-none backdrop-blur"
              >
                {languageOptions.map((option) => (
                  <option
                    key={option.code}
                    value={option.code}
                    className="text-slate-900"
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-5">
            <h1 className="text-3xl font-extrabold leading-tight">
              {t.appTitle}
            </h1>
            <p className="mt-2 text-sm text-blue-50">{t.appSubtitle}</p>
          </div>
        </div>

        <div className="p-5">
          {screen === "home" && (
            <div className="space-y-4">
              <MenuButton
                icon={<Siren size={24} />}
                title={t.emergency}
                onClick={() => setScreen("emergency")}
                className="bg-gradient-to-r from-red-500 to-rose-600"
              />
              <MenuButton
                icon={<ShieldCheck size={24} />}
                title={t.safetyTips}
                onClick={() => setScreen("tips")}
                className="bg-gradient-to-r from-blue-600 to-sky-600"
              />
              <MenuButton
                icon={<MapPin size={24} />}
                title={t.getHelp}
                onClick={() => setScreen("help")}
                className="bg-gradient-to-r from-emerald-500 to-green-600"
              />

              <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
                <div className="flex items-center gap-2 font-semibold text-slate-800">
                  <Languages size={16} />
                  {t.direct112}
                </div>
                <p className="mt-2">{t.footer}</p>
              </div>
            </div>
          )}

          {screen === "emergency" && (
            <div className="space-y-4">
              <button
                onClick={() => setScreen("home")}
                className="flex items-center gap-1 text-sm font-medium text-slate-500"
              >
                <ChevronLeft size={18} /> {t.back}
              </button>

              <div>
                <h2 className="text-2xl font-bold">{t.emergencyTitle}</h2>
                <p className="mt-1 text-sm text-slate-500">
                  {t.emergencyDesc}
                </p>
              </div>

              <a
                href="tel:112"
                className="flex w-full items-center justify-center gap-2 rounded-3xl bg-red-600 px-4 py-5 text-lg font-bold text-white shadow-lg"
              >
                <Phone size={20} /> {t.call112}
              </a>

              <a
                href="tel:119"
                className="flex w-full items-center justify-center gap-2 rounded-3xl bg-orange-500 px-4 py-5 text-lg font-bold text-white shadow-lg"
              >
                <Phone size={20} /> {t.call119}
              </a>

              <a
                href="tel:112"
                className="flex w-full items-center justify-center gap-2 rounded-3xl bg-rose-700 px-4 py-5 text-lg font-extrabold text-white shadow-lg"
              >
                <ShieldAlert size={20} /> {t.helpNow}
              </a>
            </div>
          )}

          {screen === "tips" && (
            <div className="space-y-4">
              <button
                onClick={() => setScreen("home")}
                className="flex items-center gap-1 text-sm font-medium text-slate-500"
              >
                <ChevronLeft size={18} /> {t.back}
              </button>

              <div>
                <h2 className="text-2xl font-bold">{t.tipsTitle}</h2>
                <p className="mt-1 text-sm text-slate-500">{t.tipsSubtitle}</p>
              </div>

              <div className="space-y-3">
                <InfoCard
                  title={t.tip1}
                  subtitle={t.tipsSubtitle}
                  icon={<ShieldCheck size={18} />}
                />
                <InfoCard
                  title={t.tip2}
                  subtitle={t.tipsSubtitle}
                  icon={<Building2 size={18} />}
                />
                <InfoCard
                  title={t.tip3}
                  subtitle={t.tipsSubtitle}
                  icon={<MapPin size={18} />}
                />
                <InfoCard
                  title={t.tip4}
                  subtitle={t.tipsSubtitle}
                  icon={<ShieldAlert size={18} />}
                />
                <InfoCard
                  title={t.tip5}
                  subtitle={t.direct112}
                  icon={<Phone size={18} />}
                />
              </div>
            </div>
          )}

          {screen === "help" && (
            <div className="space-y-4">
              <button
                onClick={() => setScreen("home")}
                className="flex items-center gap-1 text-sm font-medium text-slate-500"
              >
                <ChevronLeft size={18} /> {t.back}
              </button>

              <div>
                <h2 className="text-2xl font-bold">{t.helpTitle}</h2>
                <p className="mt-1 text-sm text-slate-500">
                  {t.helpSubtitle}
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-slate-200 via-slate-100 to-sky-100 p-4">
                  <div className="flex h-full flex-col justify-between">
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                      <MapPin size={16} /> Police Map Search
                    </div>

                    <div className="flex items-center justify-center">
                      <div className="rounded-full bg-red-500 p-4 text-white shadow-lg">
                        <MapPin size={26} />
                      </div>
                    </div>

                    <div className="rounded-2xl bg-white/80 p-3 text-sm text-slate-700 backdrop-blur">
                      {coords ? t.locationReady : t.locationPending}
                      {coords && (
                        <div className="mt-2 text-xs text-slate-500">
                          LAT {coords.lat.toFixed(4)} / LNG{" "}
                          {coords.lng.toFixed(4)}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={requestLocation}
                className="w-full rounded-3xl bg-blue-600 px-4 py-4 text-base font-bold text-white shadow-lg"
              >
                {t.useLocation}
              </button>

              <button
                onClick={openNearbyPolice}
                className="w-full rounded-3xl bg-emerald-600 px-4 py-4 text-base font-bold text-white shadow-lg"
              >
                {t.openNearbyPolice}
              </button>

              <a
                href="tel:112"
                className="flex w-full items-center justify-center gap-2 rounded-3xl bg-red-600 px-4 py-4 text-base font-bold text-white shadow-lg"
              >
                <Phone size={18} /> {t.call112}
              </a>

              <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
                <p>{t.policeGuide}</p>
                {locationError && (
                  <p className="mt-2 font-semibold text-red-600">
                    {locationError}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
