import React, { useState } from "react";

const projects = [
  {
    title: "Yena-Portfolio",
    period: "2025.01-2025.02 (개인 프로젝트)",
    summary: "프론트엔드 포트폴리오 제작",
    details: [
      "React, HTML, CSS, JS을 활용한 포트폴리오 웹사이트 제작",
      "취업용으로 기획 및 반응형 디자인을 구상 및 적용",
      "스크롤 및 애니메이션 활용하여 가독성 향상",
      "직관적인 UI/UX로 프로젝트와 역량 강조",
    ],
    url: "https://github.com/yyyenaak/yyyenaa-portfolio.git",
    stack: ["React", "HTML", "CSS", "JS", "SCSS", "Tsx"],
  },
  {
    title: "Farmy",
    period: "2024.07-2024.11 (학교 프로젝트)",
    summary: "AI를 활용한 스마트팜 원격제어 시스템",
    details: [
      "Chat GPT를 활용한 스마트팜 제어 시스템 구축 및 개발",
      "온도, 습도, 조도, 토양 수분센서 연동, 모니터링 및 제어",
      "안드로이드 스튜디오, GPTs, HTML, CSS, JS 개발 담당",
      "IT 캡스톤 디자인 출품 및 최우수상 수상",
    ],
    url: "https://github.com/yyyenaak/Farmy_fin-ver..git",
    stack: [
      "HTML",
      "CSS",
      "JS",
      "Java",
      "Android Studio",
      "Arduino",
      "LLM",
      "Prompt Engineering",
      "Ascii",
    ],
  },
  {
    title: "이순종, Design for Life",
    period: "2024.01-2024.06 (U:Companion)",
    summary: "이순종 교수님 포트폴리오 웹사이트 제작",
    details: [
      "서울대학교 미술대학 소속 교수님의 작품,전시를 기록한 포트폴리오 사이트 제작",
      "화이트 톤의 미니멀한 디자인과 직관적인 UI 구현",
      "작품 키워드 분류 기능과과 Contact 기능 추가로 접근성 향상",
      "PM, 기획, 일부 퍼블리싱을 담당하여 프로젝트 전반을 주도",
    ],
    url: "http://leesoonjong.com/",
    stack: ["PM", "Excel", "Figma", "HTML", "CSS", "JS", "MySQL"],
  },
  {
    title: "U:COMPANION GROUP",
    period: "2024.06-2024.08 (U:Companion)",
    summary: "유컴패니온 웹사이트 Dropbox 구축 및 리뉴얼",
    details: [
      "유컴패니온 회사명 변경, 자회사 설립을 위한 웹사이트 리뉴얼 진행",
      "네이게이션 바 X 버튼 동작 수정",
      "랜딩페이지 슬라이더 구축 및 수정",
      "퍼블리싱 수정 후 php 개발 및 업로드",
    ],
    url: "https://ucomp.co.krt",
    stack: ["HTML", "CSS", "JS", "PHP"],
  },
  {
    title: "KALDA",
    period: "2024.04-2024.05 (U:Companion)",
    summary: "한국국토교통데이터진흥협회 공식 웹사이트 구축",
    details: [
      "한국국토교통데이터진흥협회(KALDA) 공식 웹사이트 구축",
      "구축 퍼블리싱 단독으로 담당",
      "메인 슬라이더의 부드러운 동작 최적화",
      "지도 API를 활용한 위치 기반 정보 제공 구현",
    ],
    url: "https://Kalda.or.kr",
    stack: ["HTML", "CSS", "JS"],
  },
  {
    title: "Crewdays Demo",
    period: "2024.01-2024.02 (U:Companion)",
    summary: "크루데이즈 랜딩페이지 데모 제작",
    details: [
      "크루데이즈(CrewDays) 기업 연휴선물 쇼핑몰 데모버전 제작",
      "초기 프로토타입 개발 및 사용자 테스트 진행",
      "React 및 TypeScript 기반 UI/UX 설계 및 동적 요소 구현",
      "스크롤 애니메이션 추가로 부드러운 사용자 경험 제공",
    ],
    url: "https://github.com/yyyenaak/crewdays-demo",
    stack: ["React", "Tsx", "JS", "SCSS"],
  },
];

export default Projects;
