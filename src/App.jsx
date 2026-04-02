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
  ChevronDown,
  ChevronUp,
  CreditCard,
  Send,
  FileWarning,
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
    tipsSubtitle: "외국인 대상 주요 생활범죄 및 사기 유형을 확인하세요.",

    tip1: "보이스피싱",
    tip2: "취업 · 알바 사기",
    tip3: "주거 · 임대 사기",
    tip4: "연애 · 친분 사기",
    tip5: "긴급 신고 이용 안내",
    tip6: "환전 사기",
    tip7: "해외송금 사기",
    tip8: "비자 · 체류 사기",

    detailLabelSituation: "주요 수법",
    detailLabelPrevention: "예방 방법",
    detailLabelAction: "도움이 필요할 때",
    showDetails: "상세보기",
    hideDetails: "접기",

    tip1Situation:
      "검찰·경찰·금융기관을 사칭하여 계좌이체, 앱 설치, 비밀번호 입력을 요구하는 범죄입니다.",
    tip1Prevention:
      "공공기관은 전화로 금전 요구를 하지 않습니다. 요구 시 즉시 통화를 종료하고 112 또는 공식번호로 다시 확인하세요.",
    tip1Action:
      "이미 송금했거나 앱을 설치했다면 즉시 112에 신고하고 은행에 지급정지를 요청하세요.",

    tip2Situation:
      "고수익·단기 알바를 미끼로 선입금, 신분증 사진, 계좌정보를 요구하는 사기입니다.",
    tip2Prevention:
      "‘쉽고 돈 많이 버는 일’은 사기일 가능성이 높습니다. 채용 전 회사명, 사업자등록, 후기 등을 확인하세요.",
    tip2Action:
      "입금 요구 화면과 대화 내용을 캡처한 뒤 즉시 112에 신고하세요.",

    tip3Situation:
      "가짜 집주인 또는 중개인이 계약금 입금을 재촉하거나 실제 소유자가 아닌 경우입니다.",
    tip3Prevention:
      "계약 전 등기부등본, 실소유자, 공인중개사 등록 여부를 반드시 확인하고 현장을 직접 방문하세요.",
    tip3Action:
      "계약서, 송금내역, 대화기록을 보관한 뒤 즉시 112 또는 관련 기관에 상담하세요.",

    tip4Situation:
      "SNS·채팅앱으로 친밀감을 형성한 뒤 금전, 선물, 투자, 항공권 비용 등을 요구하는 사기입니다.",
    tip4Prevention:
      "직접 만나기 전 금전 요구는 사기를 의심해야 합니다. 신원이 불분명한 상대에게 송금하지 마세요.",
    tip4Action:
      "대화내용과 계정 정보를 캡처한 뒤 즉시 112에 신고하세요.",

    tip5Situation:
      "폭행, 협박, 스토킹, 사기 등 위험 상황에서는 즉시 신고가 필요합니다.",
    tip5Prevention:
      "현재 위치, 상황, 상대 특징을 짧고 명확하게 말할 준비를 하세요.",
    tip5Action:
      "앱에서 112 버튼을 누르거나 주변 사람에게 즉시 도움을 요청하세요.",

    tip6Situation:
      "길거리, SNS, 메신저 등에서 환전을 도와주겠다며 돈만 받고 잠적하거나 불리한 비율로 속이는 경우입니다.",
    tip6Prevention:
      "공식 환전소나 은행만 이용하세요. 개인 간 환전 제안은 피하고, 즉시 입금을 요구하면 의심하세요.",
    tip6Action:
      "계좌번호, 대화내용, 송금내역을 보관한 뒤 즉시 112에 신고하세요.",

    tip7Situation:
      "해외송금 대행을 해주겠다며 선입금을 유도하거나 수수료 명목으로 추가 돈을 요구하는 사기입니다.",
    tip7Prevention:
      "은행, 공식 송금업체, 검증된 앱만 이용하세요. 개인 계좌 송금 요청은 피하세요.",
    tip7Action:
      "송금 전이라면 즉시 중단하고, 송금 후라면 은행과 112에 바로 연락하세요.",

    tip8Situation:
      "비자 연장, 체류 자격 변경, 출입국 문제 해결을 명목으로 금전을 요구하는 사기입니다.",
    tip8Prevention:
      "출입국관리사무소, 정부 공식 홈페이지, 공인 행정절차만 이용하세요. 개인 브로커를 주의하세요.",
    tip8Action:
      "서류, 대화기록, 송금내역을 보관하고 즉시 112 또는 관련 기관에 신고하세요.",

    helpTitle: "가까운 경찰관서 찾기",
    helpSubtitle:
      "내 위치를 기준으로 근처 경찰서·지구대·파출소를 찾을 수 있습니다.",
    useLocation: "내 위치 사용",
    locationReady: "현재 위치가 확인되었습니다.",
    locationPending: "위치 정보를 확인하면 주변 경찰관서 검색 버튼이 활성화됩니다.",
    openNearbyPolice: "근처 경찰관서 보기",
    locationError: "위치 확인에 실패했습니다. 브라우저 위치 권한을 확인해주세요.",
    policeGuide:
      "버튼을 누르면 지도 앱에서 내 주변 경찰서·지구대·파출소를 바로 검색합니다.",
    direct112: "상담 요청 대신 112 바로 연결",
    footer: "외국인·주민 대상 안전 안내용 시범 웹앱",
    mapSearchLabel: "경찰관서 지도 검색",
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
    tipsSubtitle:
      "Check common daily crimes and scam types targeting foreign nationals.",

    tip1: "Voice Phishing",
    tip2: "Job Scam",
    tip3: "Housing / Rental Scam",
    tip4: "Romance Scam",
    tip5: "How to Use Emergency Calls",
    tip6: "Currency Exchange Scam",
    tip7: "Overseas Remittance Scam",
    tip8: "Visa / Stay Scam",

    detailLabelSituation: "Common Method",
    detailLabelPrevention: "How to Prevent",
    detailLabelAction: "When You Need Help",
    showDetails: "Show Details",
    hideDetails: "Hide Details",

    tip1Situation:
      "Scammers pretend to be police, prosecutors, or banks and ask for transfers, app installs, or passwords.",
    tip1Prevention:
      "Government agencies do not ask for money by phone. Hang up immediately and verify through an official number.",
    tip1Action:
      "If you sent money or installed a suspicious app, call 112 immediately and ask your bank to stop the transaction.",

    tip2Situation:
      "Fraudsters offer easy high-paying jobs and ask for advance payment, ID photos, or bank details.",
    tip2Prevention:
      "Be cautious if a job asks for money first or promises unusually easy high income. Check the company before accepting.",
    tip2Action:
      "Save the payment request screen and chat records, then report it to 112.",

    tip3Situation:
      "Fake landlords or brokers rush deposit payments or offer homes with unclear ownership.",
    tip3Prevention:
      "Before signing, check the registry, confirm the real owner, verify the agent, and visit the place in person.",
    tip3Action:
      "Keep the contract, transfer records, and chats, then contact 112 or a related support service immediately.",

    tip4Situation:
      "Someone on social media or chat quickly builds trust and then asks for money, gifts, investments, or travel expenses.",
    tip4Prevention:
      "Refuse money requests before meeting in person and never transfer funds to someone whose identity is unclear.",
    tip4Action:
      "Capture the profile and conversation records, then report them to 112.",

    tip5Situation:
      "Immediate reporting is needed in cases of threats, assault, stalking, fraud suspicion, or urgent danger.",
    tip5Prevention:
      "Be ready to explain your location, the situation, and the suspect’s features briefly and clearly.",
    tip5Action:
      "Tap the 112 button in this app or ask nearby people for help right away.",

    tip6Situation:
      "Someone offers private currency exchange on the street or online, takes your money, and disappears or uses an unfair rate.",
    tip6Prevention:
      "Use only banks or official exchange offices. Avoid personal exchange offers.",
    tip6Action:
      "Keep the account number, chats, and transfer records, then report to 112 immediately.",

    tip7Situation:
      "A scammer offers to send money overseas for you and asks for advance payment or extra fees.",
    tip7Prevention:
      "Use only banks, official remittance services, or verified apps. Avoid personal accounts.",
    tip7Action:
      "If you have not sent money yet, stop immediately. If you already sent it, contact your bank and 112 right away.",

    tip8Situation:
      "Someone asks for money, claiming they can solve visa extension or immigration stay problems.",
    tip8Prevention:
      "Use only immigration offices, official government websites, or authorized procedures. Be careful with private brokers.",
    tip8Action:
      "Keep documents, chats, and transfer records, then report to 112 or the relevant office immediately.",

    helpTitle: "Find Nearby Police Office",
    helpSubtitle:
      "Use your location to find the nearest police station, precinct, or substation.",
    useLocation: "Use My Location",
    locationReady: "Your location has been confirmed.",
    locationPending:
      "Nearby police search will be enabled after location access is granted.",
    openNearbyPolice: "Find Nearby Police Offices",
    locationError: "Location access failed. Please check your browser permissions.",
    policeGuide:
      "This opens your map app and searches nearby police stations, precincts, and substations around your location.",
    direct112: "Direct 112 connection instead of a form",
    footer: "Pilot safety web app for residents and foreign nationals",
    mapSearchLabel: "Police Map Search",
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
    tipsSubtitle: "غیر ملکیوں کے خلاف عام جرائم اور فراڈ کی اقسام دیکھیں۔",

    tip1: "وائس فشنگ",
    tip2: "ملازمت یا پارٹ ٹائم فراڈ",
    tip3: "رہائش یا کرایہ فراڈ",
    tip4: "رومانوی فراڈ",
    tip5: "ہنگامی کال استعمال کرنے کا طریقہ",
    tip6: "کرنسی ایکسچینج فراڈ",
    tip7: "بیرون ملک رقم بھیجنے کا فراڈ",
    tip8: "ویزا / قیام فراڈ",

    detailLabelSituation: "عام طریقہ",
    detailLabelPrevention: "بچاؤ کا طریقہ",
    detailLabelAction: "مدد چاہیے تو",
    showDetails: "تفصیل دیکھیں",
    hideDetails: "بند کریں",

    tip1Situation:
      "دھوکہ باز پولیس، پراسیکیوٹر یا بینک بن کر رقم کی منتقلی، ایپ انسٹال کرنے یا پاس ورڈ مانگتے ہیں۔",
    tip1Prevention:
      "سرکاری ادارے فون پر پیسے نہیں مانگتے۔ فوراً کال بند کریں اور سرکاری نمبر سے دوبارہ تصدیق کریں۔",
    tip1Action:
      "اگر آپ نے رقم بھیجی ہے یا مشکوک ایپ انسٹال کی ہے تو فوراً 112 پر کال کریں اور بینک سے ادائیگی روکنے کو کہیں۔",

    tip2Situation:
      "آسان اور زیادہ آمدنی والی ملازمت کا لالچ دے کر پہلے رقم، شناختی تصویر یا بینک معلومات مانگی جاتی ہیں۔",
    tip2Prevention:
      "اگر ملازمت کے نام پر پہلے رقم مانگی جائے یا بہت آسان زیادہ کمائی کا وعدہ ہو تو شک کریں۔",
    tip2Action:
      "ادائیگی کی اسکرین اور گفتگو محفوظ کریں، پھر 112 پر رپورٹ کریں۔",

    tip3Situation:
      "جعلی مالک یا بروکر ایڈوانس رقم جلدی مانگتا ہے یا ایسی رہائش دکھاتا ہے جس کی ملکیت واضح نہیں ہوتی۔",
    tip3Prevention:
      "معاہدے سے پہلے رجسٹری، اصل مالک، بروکر کی رجسٹریشن اور جگہ کی حقیقی حالت ضرور چیک کریں۔",
    tip3Action:
      "معاہدہ، رقم منتقلی کا ریکارڈ اور چیٹ محفوظ کریں، پھر فوراً 112 یا متعلقہ ادارے سے رابطہ کریں۔",

    tip4Situation:
      "سوشل میڈیا یا چیٹ پر جلدی قربت بنا کر پھر پیسے، تحفے، سرمایہ کاری یا سفر کے اخراجات مانگے جاتے ہیں۔",
    tip4Prevention:
      "ذاتی ملاقات سے پہلے ہر مالی مطالبہ مسترد کریں اور غیر واضح شناخت والے شخص کو رقم نہ بھیجیں۔",
    tip4Action:
      "پروفائل اور گفتگو کے اسکرین شاٹ محفوظ کریں اور 112 پر رپورٹ کریں۔",

    tip5Situation:
      "دھمکی، حملہ، اسٹاکنگ، دھوکہ دہی کے شبہ یا کسی فوری خطرے میں فوراً رپورٹ کرنا ضروری ہے۔",
    tip5Prevention:
      "اپنی جگہ، صورتحال اور مشتبہ شخص کی خصوصیات مختصر اور واضح طور پر بتانے کے لیے تیار رہیں۔",
    tip5Action:
      "اس ایپ میں 112 بٹن دبائیں یا آس پاس کے لوگوں سے فوراً مدد مانگیں۔",

    tip6Situation:
      "سڑک یا آن لائن نجی کرنسی ایکسچینج کی پیشکش کے بعد رقم لے کر غائب ہو جانا یا غلط ریٹ دینا۔",
    tip6Prevention:
      "صرف بینک یا سرکاری ایکسچینج آفس استعمال کریں۔ ذاتی ایکسچینج آفر سے بچیں۔",
    tip6Action:
      "اکاؤنٹ نمبر، چیٹ اور ٹرانسفر ریکارڈ محفوظ کریں، پھر فوراً 112 پر رپورٹ کریں۔",

    tip7Situation:
      "کوئی شخص بیرون ملک رقم بھیجنے میں مدد کے نام پر پیشگی رقم یا اضافی فیس مانگتا ہے۔",
    tip7Prevention:
      "صرف بینک، سرکاری ریمیٹنس سروس یا تصدیق شدہ ایپ استعمال کریں۔ ذاتی اکاؤنٹ سے بچیں۔",
    tip7Action:
      "اگر ابھی رقم نہیں بھیجی تو فوراً رک جائیں۔ اگر بھیج دی ہے تو بینک اور 112 سے فوراً رابطہ کریں۔",

    tip8Situation:
      "ویزا توسیع یا قیام کے مسئلے حل کرنے کے نام پر رقم مانگی جاتی ہے۔",
    tip8Prevention:
      "صرف امیگریشن آفس، سرکاری ویب سائٹ یا مجاز طریقہ کار استعمال کریں۔ نجی بروکر سے محتاط رہیں۔",
    tip8Action:
      "دستاویزات، چیٹ اور ٹرانسفر ریکارڈ محفوظ کریں، پھر 112 یا متعلقہ دفتر سے فوراً رابطہ کریں۔",

    helpTitle: "قریبی پولیس دفتر تلاش کریں",
    helpSubtitle:
      "اپنی موجودہ جگہ کے قریب پولیس اسٹیشن، چوکی یا دفتر تلاش کریں۔",
    useLocation: "میری لوکیشن استعمال کریں",
    locationReady: "آپ کی موجودہ جگہ کی تصدیق ہو گئی ہے۔",
    locationPending:
      "لوکیشن کی اجازت ملنے کے بعد قریبی پولیس دفاتر کی تلاش فعال ہوگی۔",
    openNearbyPolice: "قریبی پولیس دفاتر دیکھیں",
    locationError: "لوکیشن حاصل نہیں ہو سکی۔ براہ کرم براؤزر کی اجازت چیک کریں۔",
    policeGuide:
      "یہ آپ کی نقشہ ایپ کھول کر آپ کے قریب پولیس اسٹیشن اور چوکی تلاش کرے گا۔",
    direct112: "فارم کے بجائے براہ راست 112 کال",
    footer: "رہائشیوں اور غیر ملکیوں کے لیے آزمائشی حفاظتی ویب ایپ",
    mapSearchLabel: "پولیس نقشہ تلاش",
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
    tipsSubtitle:
      "Проверьте распространённые преступления и мошенничество против иностранцев.",

    tip1: "Голосовой фишинг",
    tip2: "Мошенничество с работой",
    tip3: "Жилищное / арендное мошенничество",
    tip4: "Романтическое мошенничество",
    tip5: "Как пользоваться экстренным вызовом",
    tip6: "Мошенничество с обменом валюты",
    tip7: "Мошенничество с международным переводом",
    tip8: "Визовое / миграционное мошенничество",

    detailLabelSituation: "Типичная схема",
    detailLabelPrevention: "Как защититься",
    detailLabelAction: "Если нужна помощь",
    showDetails: "Подробнее",
    hideDetails: "Скрыть",

    tip1Situation:
      "Мошенники выдают себя за полицию, прокуратуру или банк и требуют перевод денег, установку приложения или пароль.",
    tip1Prevention:
      "Госорганы не требуют деньги по телефону. Немедленно завершите звонок и проверьте информацию по официальному номеру.",
    tip1Action:
      "Если вы уже перевели деньги или установили подозрительное приложение, сразу позвоните 112 и попросите банк остановить операцию.",

    tip2Situation:
      "Под видом лёгкой и высокооплачиваемой работы требуют предоплату, фото документов или банковские данные.",
    tip2Prevention:
      "Будьте осторожны, если работа требует деньги заранее или обещает слишком лёгкий высокий доход.",
    tip2Action:
      "Сохраните экран с требованием оплаты и переписку, затем сообщите в 112.",

    tip3Situation:
      "Ложные владельцы или посредники торопят с переводом задатка и предлагают жильё с неясным правом собственности.",
    tip3Prevention:
      "До подписания договора проверьте регистрационные документы, настоящего владельца, лицензию посредника и осмотрите жильё лично.",
    tip3Action:
      "Сохраните договор, переводы и переписку, затем сразу обратитесь в 112 или профильную службу помощи.",

    tip4Situation:
      "Кто-то быстро входит в доверие через соцсети или чат, а затем просит деньги, подарки, инвестиции или оплату поездки.",
    tip4Prevention:
      "Не отправляйте деньги до личной встречи и не переводите средства человеку с неясной личностью.",
    tip4Action:
      "Сделайте скриншоты профиля и переписки, затем сообщите в 112.",

    tip5Situation:
      "Немедленное сообщение необходимо при угрозах, нападении, сталкинге, подозрении на мошенничество или любой срочной опасности.",
    tip5Prevention:
      "Подготовьтесь коротко и ясно сообщить своё местоположение, ситуацию и приметы подозреваемого.",
    tip5Action:
      "Нажмите кнопку 112 в приложении или срочно попросите помощи у людей рядом.",

    tip6Situation:
      "Кто-то предлагает частный обмен валюты на улице или онлайн, берёт деньги и исчезает или использует нечестный курс.",
    tip6Prevention:
      "Пользуйтесь только банками или официальными обменными пунктами. Избегайте частных предложений.",
    tip6Action:
      "Сохраните номер счёта, переписку и данные перевода, затем немедленно сообщите в 112.",

    tip7Situation:
      "Мошенник предлагает отправить деньги за границу и просит предоплату или дополнительные комиссии.",
    tip7Prevention:
      "Пользуйтесь только банками, официальными сервисами переводов или проверенными приложениями.",
    tip7Action:
      "Если вы ещё не отправили деньги — немедленно остановитесь. Если уже отправили — сразу свяжитесь с банком и 112.",

    tip8Situation:
      "Кто-то просит деньги, обещая решить вопросы продления визы или миграционного статуса.",
    tip8Prevention:
      "Пользуйтесь только иммиграционными офисами, официальными сайтами и законными процедурами. Осторожно с частными посредниками.",
    tip8Action:
      "Сохраните документы, переписку и переводы, затем сразу обратитесь в 112 или профильное ведомство.",

    helpTitle: "Найти ближайший полицейский участок",
    helpSubtitle:
      "Используйте своё местоположение, чтобы найти ближайший участок, отделение или пост полиции.",
    useLocation: "Использовать моё местоположение",
    locationReady: "Ваше местоположение подтверждено.",
    locationPending:
      "Поиск ближайшей полиции станет доступен после разрешения на доступ к геолокации.",
    openNearbyPolice: "Показать ближайшие отделения полиции",
    locationError: "Не удалось получить местоположение. Проверьте разрешения браузера.",
    policeGuide:
      "Кнопка откроет карту и выполнит поиск ближайших полицейских участков рядом с вами.",
    direct112: "Прямое соединение с 112 вместо формы",
    footer: "Пилотное веб-приложение по безопасности для жителей и иностранцев",
    mapSearchLabel: "Поиск полиции на карте",
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
    tipsSubtitle: "请查看针对外国人的常见犯罪和诈骗类型。",

    tip1: "语音诈骗",
    tip2: "求职 / 打工诈骗",
    tip3: "住房 / 租赁诈骗",
    tip4: "恋爱诈骗",
    tip5: "紧急报警使用说明",
    tip6: "换汇诈骗",
    tip7: "海外汇款诈骗",
    tip8: "签证 / 居留诈骗",

    detailLabelSituation: "常见手法",
    detailLabelPrevention: "预防方法",
    detailLabelAction: "需要帮助时",
    showDetails: "查看详情",
    hideDetails: "收起",

    tip1Situation:
      "诈骗分子冒充警方、检察机关或银行，要求转账、安装应用程序或提供密码。",
    tip1Prevention:
      "公共机关不会通过电话要求转账。请立即挂断，并通过官方号码重新确认。",
    tip1Action:
      "如果已经转账或安装了可疑应用，请立即拨打112，并联系银行申请止付。",

    tip2Situation:
      "以轻松高薪兼职为诱饵，要求先付款、提供身份证照片或银行信息。",
    tip2Prevention:
      "如果工作要求先交钱，或承诺异常轻松的高收入，请提高警惕。",
    tip2Action:
      "保存付款要求页面和聊天记录，然后向112报警。",

    tip3Situation:
      "假房东或假中介催促支付定金，或者介绍产权和登记情况不明确的房屋。",
    tip3Prevention:
      "签约前请核实房产登记、真实房主、中介资质，并亲自查看房屋。",
    tip3Action:
      "保留合同、转账记录和聊天记录，并立即联系112或相关机构求助。",

    tip4Situation:
      "有人在社交媒体或聊天软件中迅速建立亲密关系，然后索要金钱、礼物、投资款或机票费用。",
    tip4Prevention:
      "在未见面之前，拒绝一切金钱要求，不要向身份不明的人转账。",
    tip4Action:
      "保存对方资料和聊天截图，然后向112报警。",

    tip5Situation:
      "如遇威胁、暴力、跟踪、诈骗嫌疑或其他紧急危险，应立即报警。",
    tip5Prevention:
      "提前准备好简洁说明自己的位置、现场情况和嫌疑人特征。",
    tip5Action:
      "点击本应用中的112按钮，或立即向周围人员求助。",

    tip6Situation:
      "有人在路边或网上提出私人换汇，拿到钱后消失，或使用不公平汇率欺骗。",
    tip6Prevention:
      "请只使用银行或正规换汇点，避免私人换汇提议。",
    tip6Action:
      "保留账户号码、聊天记录和转账凭证，然后立即向112报警。",

    tip7Situation:
      "诈骗分子声称可以代办海外汇款，并要求预付款或额外手续费。",
    tip7Prevention:
      "请只使用银行、正规汇款服务或可信应用，不要向个人账户转账。",
    tip7Action:
      "未转账前请立即停止；已转账则马上联系银行和112。",

    tip8Situation:
      "有人以签证延期、居留资格变更或解决出入境问题为由索要金钱。",
    tip8Prevention:
      "请只通过出入境管理机构、政府官网和正规程序办理，谨防私人中介。",
    tip8Action:
      "保留文件、聊天记录和转账记录，并立即联系112或相关机构。",

    helpTitle: "查找附近警察机关",
    helpSubtitle:
      "使用您的位置查找附近的警察署、派出所或警务站。",
    useLocation: "使用我的位置",
    locationReady: "已确认您的当前位置。",
    locationPending:
      "允许位置权限后，将启用附近警察机关搜索功能。",
    openNearbyPolice: "查看附近警察机关",
    locationError: "无法获取位置，请检查浏览器定位权限。",
    policeGuide:
      "点击按钮后，将在地图应用中直接搜索您附近的警察署、派出所等警察机关。",
    direct112: "无需表单，直接连接112",
    footer: "面向居民和外国人的试点安全网页应用",
    mapSearchLabel: "警察机关地图搜索",
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

function TipDetailCard({ title, subtitle, icon, detail, isOpen, onToggle, t }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="rounded-xl bg-slate-100 p-2">{icon}</div>
        <div className="flex-1">
          <div className="font-semibold text-slate-900">{title}</div>
          <div className="mt-1 text-sm text-slate-500">{subtitle}</div>

          <button
            onClick={onToggle}
            className="mt-3 inline-flex items-center gap-2 rounded-xl bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700"
          >
            {isOpen ? (
              <>
                <ChevronUp size={16} />
                {t.hideDetails}
              </>
            ) : (
              <>
                <ChevronDown size={16} />
                {t.showDetails}
              </>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mt-4 space-y-3 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
          <div>
            <div className="font-semibold text-slate-900">
              {t.detailLabelSituation}
            </div>
            <p className="mt-1">{detail.situation}</p>
          </div>

          <div>
            <div className="font-semibold text-slate-900">
              {t.detailLabelPrevention}
            </div>
            <p className="mt-1">{detail.prevention}</p>
          </div>

          <div>
            <div className="font-semibold text-slate-900">
              {t.detailLabelAction}
            </div>
            <p className="mt-1">{detail.action}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState("home");
  const [language, setLanguage] = useState("ko");
  const [coords, setCoords] = useState(null);
  const [locationError, setLocationError] = useState("");
  const [openTip, setOpenTip] = useState(null);

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

  const tipDetails = [
    {
      key: 1,
      title: t.tip1,
      subtitle: t.tipsSubtitle,
      icon: <ShieldCheck size={18} />,
      detail: {
        situation: t.tip1Situation,
        prevention: t.tip1Prevention,
        action: t.tip1Action,
      },
    },
    {
      key: 2,
      title: t.tip2,
      subtitle: t.tipsSubtitle,
      icon: <Building2 size={18} />,
      detail: {
        situation: t.tip2Situation,
        prevention: t.tip2Prevention,
        action: t.tip2Action,
      },
    },
    {
      key: 3,
      title: t.tip3,
      subtitle: t.tipsSubtitle,
      icon: <MapPin size={18} />,
      detail: {
        situation: t.tip3Situation,
        prevention: t.tip3Prevention,
        action: t.tip3Action,
      },
    },
    {
      key: 4,
      title: t.tip4,
      subtitle: t.tipsSubtitle,
      icon: <ShieldAlert size={18} />,
      detail: {
        situation: t.tip4Situation,
        prevention: t.tip4Prevention,
        action: t.tip4Action,
      },
    },
    {
      key: 5,
      title: t.tip5,
      subtitle: t.direct112,
      icon: <Phone size={18} />,
      detail: {
        situation: t.tip5Situation,
        prevention: t.tip5Prevention,
        action: t.tip5Action,
      },
    },
    {
      key: 6,
      title: t.tip6,
      subtitle: t.tipsSubtitle,
      icon: <CreditCard size={18} />,
      detail: {
        situation: t.tip6Situation,
        prevention: t.tip6Prevention,
        action: t.tip6Action,
      },
    },
    {
      key: 7,
      title: t.tip7,
      subtitle: t.tipsSubtitle,
      icon: <Send size={18} />,
      detail: {
        situation: t.tip7Situation,
        prevention: t.tip7Prevention,
        action: t.tip7Action,
      },
    },
    {
      key: 8,
      title: t.tip8,
      subtitle: t.tipsSubtitle,
      icon: <FileWarning size={18} />,
      detail: {
        situation: t.tip8Situation,
        prevention: t.tip8Prevention,
        action: t.tip8Action,
      },
    },
  ];

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
                {tipDetails.map((tip) => (
                  <TipDetailCard
                    key={tip.key}
                    title={tip.title}
                    subtitle={tip.subtitle}
                    icon={tip.icon}
                    detail={tip.detail}
                    isOpen={openTip === tip.key}
                    onToggle={() =>
                      setOpenTip(openTip === tip.key ? null : tip.key)
                    }
                    t={t}
                  />
                ))}
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
                      <MapPin size={16} /> {t.mapSearchLabel}
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
