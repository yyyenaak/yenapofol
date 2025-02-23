import Project from "./Projects";

const Projects = () => {
  const projectData = [
    {
      title: "U:COMPANION GROUP",
      date: "2024.06-2024.08 (U:Companion)",
      summary: "유컴패니온 웹사이트 Dropbox 구축 및 리뉴얼",
      details: [
        "유컴패니온 회사명 변경, 자회사 설립을 위한 웹사이트 리뉴얼 진행",
        "네이게이션 바 X 버튼 동작 수정",
        "랜딩페이지 슬라이더 구축 및 수정",
        "퍼블리싱 수정 후 PHP 개발 및 업로드",
      ],
      url: "https://ucomp.co.kr/",
      stack: "HTML, CSS, JS, PHP",
      modalId: "popupModaldrop",
    },
    {
      title: "KALDA",
      date: "2024.04-2024.05 (U:Companion)",
      summary: "한국국토교통데이터진흥협회 공식 웹사이트 구축",
      details: [
        "한국국토교통데이터진흥협회(KALDA) 공식 웹사이트 구축",
        "구축 퍼블리싱 단독으로 담당",
        "메인 슬라이더의 부드러운 동작 최적화",
        "지도 API를 활용한 위치 기반 정보 제공 구현",
      ],
      url: "https://Kalda.or.kr",
      stack: "HTML, CSS, JS",
      modalId: "popupModalkalda",
    },
  ];

  return (
    <section className="component" id="projects">
      <div className="mainzone">
        <div className="main_title">
          <img
            style={{ paddingRight: "1rem" }}
            src="img/project.svg"
            alt="project icon"
          />
          <h1>Projects</h1>
        </div>
        <div className="porjectzone">
          {projectData.map((project) => (
            <Project key={project.modalId} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
