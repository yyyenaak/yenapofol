import React from "react";

const About: React.FC = () => {
  return (
    <section className="component" id="about">
      <div className="mainzone">
        <div className="main_title flex items-center">
          <img className="pr-4" src="img/dia.png" alt="dia" />
          <h1>About</h1>
        </div>
        <div className="aboutzone">
          <div className="about_row flex flex-col md:flex-row">
            <div className="about_introduce flex flex-col md:flex-row">
              <div className="about_photo">
                <img
                  className="border border-black rounded-full w-80 h-84"
                  src="src/assets/yyyenaa1.jpg"
                  alt="Yena Jo"
                />
              </div>
              <div className="about_col">
                <div className="about_wrap">
                  {aboutInfo.map((info, index) => (
                    <div key={index} className="about_info flex items-center">
                      <div className="info_detail">
                        <img src={info.icon} alt={info.alt} />
                      </div>
                      <div className="info_side ml-4">
                        <div className="info_title font-semibold">
                          {info.title}
                        </div>
                        <div className="info_text">
                          {info.isLink ? (
                            <a href={info.value} className="text-blue-600">
                              {info.value}
                            </a>
                          ) : (
                            info.value
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="values mt-6 md:mt-0">
              <span className="block font-bold">
                "책임을 다하는 사람만이 변화의 기회를 얻을 수 있습니다."
              </span>
              <p className="mt-4">
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

const aboutInfo = [
  {
    icon: "./assets/about_svg/people.svg",
    alt: "name",
    title: "NAME",
    value: "조예나 (Yena Jo)",
  },
  {
    icon: "./assets/about_svg/calender.svg",
    alt: "Date of Birth",
    title: "DoB",
    value: "2002.01.18",
  },
  {
    icon: "./assets/about_svg/location.svg",
    alt: "Location",
    title: "LOCATION",
    value: "서울시 송파구",
  },
  {
    icon: "./assets/about_svg/phone.svg",
    alt: "phone",
    title: "NUMBER",
    value: "010-7715-0958",
  },
  {
    icon: "./assets/about_svg/github.svg",
    alt: "github",
    title: "Github",
    value: "https://github.com/yyyenaak",
    isLink: true,
  },
  {
    icon: "./assets/about_svg/email.svg",
    alt: "e-mail",
    title: "E-MAIL",
    value: "dpsk185@naver.com",
  },
];

export default About;
