import { useState } from "react";
import "./work.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "E-comm website using Django",
      desc:
        "Made an E-com site using Django",
      img:
        "assets/ecom.png",
      url:"https://github.com/Paras0681/E-commerce-website-using-Django"
    },
    {
      id: "2",
      icon: "./assets/writing.png",
      title: "Meetup-events site using React & Firebase",
      desc:
        "This is a meetup events site where people can share their intrests.",
      img:
        "assets/meetup.png",
      url:"https://github.com/Paras0681/Meetup-events-website"
    },
    {
      id: "3",
      icon: "./assets/blog1.png",
      title: "Blogging website using Django",
      desc:
        "Cool blogging website which has login,logout,add,update,delete post pages. With user authentication",
      img:
        "assets/blog.png",
      url:"https://github.com/Paras0681/Blogging-website-using-Django"
    },
    {
      id: "4",
      icon: "./assets/forn.png",
      title: "Form status site using Django",
      desc:
        "This project was made to check the scholarship form status so that everyone can post their form status",
      img:
        "assets/formwebsite.png",
      url:"https://github.com/Paras0681/Form-Status-website-using_Django"
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 3)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="work">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span><a href={d.url}>Checkout code here...</a></span>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}