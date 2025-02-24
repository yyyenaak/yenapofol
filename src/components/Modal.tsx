/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "../assets/css/Modal.css";

const Modal: React.FC = () => {
  return (
    <div id="popupModalyyyenaa" className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Hello, Yena</h3>
          <button
            className="close-btn"
            onClick={() => closePopup("popupModalyyyenaa")}
          >
            X
          </button>
        </div>
        <div className="modal-body">
          <div className="header-title">
            <h2>Yena-Portfolio</h2>
            <p>2025.01-2025.02 (개인 프로젝트)</p>
          </div>
          <div className="modal-detail">
            <div className="detail-text">
              <ul>📌 Summary</ul>
              <li>React, HTML, SCSS, JS을 활용한 포트폴리오 웹사이트 제작</li>
              <li>취업용으로 기획 및 반응형 디자인을 구상 및 적용</li>
              <li>스크롤 및 애니메이션 활용하여 가독성 향상</li>
              <li>직관적인 UI/UX로 프로젝트와 역량 강조하고자 함</li>
            </div>
            <div className="detail-text">
              <ul>💡 Background</ul>
              <li>
                <span>"Hello World, Hello Yena !"</span>
              </li>
              <li>
                프론트엔드 개발자로서의 기술력과 UI/UX 설계 역량을 확인하고, 제
                자신을 효과적으로 소개할 수 있는 사이트를 만들고 싶어 취업용
                포트폴리오 웹사이트를 제작했습니다.
                <br />
                초기에는 HTML, CSS, JavaScript를 활용하여 정적인 웹사이트를
                개발한 후, 유지보수성과 확장성을 고려하여 React 기반으로
                리팩토링을 진행했습니다.
                <br />
                React의 컴포넌트 기반 아키텍처를 적용해 코드의 재사용성을
                높였으며, map 함수를 활용하여 카드 뷰, 모달 팝업, 이미지
                슬라이드 등 반복되는 UI 요소를 동적으로 렌더링하도록
                구현했습니다. 또한, 프로젝트별 필터 기능을 추가해 원하는 정보를
                쉽게 찾을 수 있도록 했으며, 인터랙티브 요소를 활용하여 사용자
                경험을 개선했습니다.
                <br />
                반응형 웹 디자인을 적용해 다양한 디바이스에서 최적의 경험을
                제공하며, 이미지 최적화 및 비동기 데이터 로딩을 통해 성능을
                개선했습니다. 단순한 소개용 페이지를 넘어, 실제 프로젝트 경험과
                역량을 강조할 수 있는 플랫폼이 되도록 개발했습니다.
              </li>
            </div>
            <div className="detail-text">
              <ul>🔗 URL</ul>
              <div className="modal_url">
                <a
                  href="https://github.com/yyyenaak/yyyenaa-portfolio.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/yyyenaak/yyyenaa-portfolio.git
                  <p>HTML5 버전</p>
                </a>
                <a
                  href="https://github.com/yyyenaak/yenapofol.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  hhttps://github.com/yyyenaak/yenapofol.git
                  <p>React 버전</p>
                </a>
              </div>
            </div>
            <div className="detail-text">
              <ul>🔨 Technology Stack(s)</ul>
              <div className="modal_taskbox">
                React, HTML, CSS, SCSS, Tsx, JS
              </div>
            </div>
            <div className="detail-img">
              <div className="sildertitle">🖼️ Image</div>
              <div className="slider-container">
                <button className="prev">&#10094;</button>
                <div className="slider-wrapper">
                  <div className="slider">
                    <div className="slide">
                      <img src="img/cardview/portfolio/1.png" alt="Image 1" />
                      <div className="slide-description">
                        <span>Main Landing Page</span>
                      </div>
                    </div>
                    <div className="slide">
                      <img src="img/cardview/portfolio/2.png" alt="Image 2" />
                      <div className="slide-description">
                        <span>About</span>
                      </div>
                    </div>
                    <div className="slide">
                      <img src="img/cardview/portfolio/3.png" alt="Image 3" />
                      <div className="slide-description">
                        <span>Skills</span>
                      </div>
                    </div>
                    <div className="slide">
                      <img src="img/cardview/portfolio/4.png" alt="Image 4" />
                      <div className="slide-description">
                        <span>Projects</span>
                      </div>
                    </div>
                    <div className="slide">
                      <img src="img/cardview/portfolio/5.png" alt="Image 5" />
                      <div className="slide-description">
                        <span>Modal page</span>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="next">&#10095;</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
