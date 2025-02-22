import React from "react";
import people from "../assets/about_svg/people.svg";
import calender from "../assets/about_svg/calender.svg";
import location from "../assets/about_svg/location.svg";
import phone from "../assets/about_svg/phone.svg";
import github from "../assets/about_svg/github.svg";
import email from "../assets/about_svg/email.svg";
import send from "../assets/about_svg/send.svg";
import profile from "../assets/yyyenaa1.jpg";
import dia from "../assets/dia.png";

const aboutData = [
  { icon: people, title: "NAME", text: "조예나 (Yena Jo)" },
  { icon: calender, title: "DoB", text: "2002.01.18" },
  { icon: location, title: "LOCATION", text: "서울시 송파구" },
  { icon: phone, title: "NUMBER", text: "010-7715-0958" },
  {
    icon: github,
    title: "Github",
    text: <a href="https://github.com/yyyenaak">github.com/yyyenaak</a>,
  },
  {
    icon: email,
    title: "E-MAIL",
    text: "dpsk185@naver.com",
    extra: (
      <a href="mailto:dpsk185@naver.com">
        <img className="subimg" src={send} alt="send" />
      </a>
    ),
  },
];

const About = () => {
  return (
    <section className="component" id="about">
      <div className="mainzone">
        <div className="main_title">
          <img style={{ paddingRight: "1rem" }} src={dia} alt="dia" />
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
                  src={profile} // 프로필 사진
                  alt="Yena Jo"
                />
              </div>
              <div className="about_col">
                <div className="about_wrap">
                  {aboutData.map(({ icon, title, text, extra }, index) => (
                    <div className="about_info" key={index}>
                      <div className="info_detail">
                        <img src={icon} alt={title} />
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
