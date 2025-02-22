import React from "react";

const About = () => {
  return (
    <section className="component" id="about">
      <div className="mainzone">
        <div className="main_title">
          <img style={{ paddingRight: "1rem" }} src="img/dia.png" alt="dia" />
          <h1>About</h1>
        </div>
        <div className="aboutzone">
          <div className="about_row">
            <div className="about_introduce">
              <div className="about_photo">
                <img
                  style={{
                    border: "1px solid black",
                    borderRadius: "100%",
                    width: "20rem",
                    height: "21rem",
                  }}
                  src="img/yyyenaa1.jpg"
                  alt="Yena Jo"
                />
              </div>
              <div className="about_col">
                <div className="about_wrap">
                  {[
                    {
                      icon: "people.svg",
                      title: "NAME",
                      text: "조예나 (Yena Jo)",
                    },
                    { icon: "calender.svg", title: "DoB", text: "2002.01.18" },
                    {
                      icon: "location.svg",
                      title: "LOCATION",
                      text: "서울시 송파구",
                    },
                    {
                      icon: "phone.svg",
                      title: "NUMBER",
                      text: "010-7715-0958",
                    },
                    {
                      icon: "github.svg",
                      title: "Github",
                      text: (
                        <a href="https://github.com/yyyenaak">
                          github.com/yyyenaak
                        </a>
                      ),
                    },
                    {
                      icon: "email.svg",
                      title: "E-MAIL",
                      text: "dpsk185@naver.com",
                      extra: (
                        <a href="mailto:dpsk185@naver.com">
                          <img
                            className="subimg"
                            src="img/about_svg/send.svg"
                            alt="send"
                          />
                        </a>
                      ),
                    },
                  ].map(({ icon, title, text, extra }, index) => (
                    <div className="about_info" key={index}>
                      <div className="info_detail">
                        <img src={`img/about_svg/${icon}`} alt={title} />
                      </div>
                      <div className="info_side">
                        <div className="info_title">
                          {title}{" "}
                          {extra && <div className="title_sub">{extra}</div>}
                        </div>
                        <div className="info_text">{text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="values">
              <span>
                "책임을 다하는 사람만이 변화의 기회를 얻을 수 있습니다."
              </span>
              <p>
                책임을 다하는 과정에서 배움을 얻고, 이를 바탕으로 더 큰 도전에
                나아갈 수 있다고 믿습니다. <br />
                변화의 순간이 찾아왔을 때 주저하지 않는 것도, 성실히 쌓아온
                경험과 신뢰가 있기에 단순히 주어진 업무를 수행하는 것을 넘어, 그
                안에서 성장하고 새로운 가능성을 만들어 나가는 것이 저의
                원동력입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
