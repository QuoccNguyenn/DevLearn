import videoThumb from "../../assets/video.png";
import followingThumb from "../../assets/following.jpg";
import trendingThumb from "../../assets/trending.webp";
import dashboardThumb from "../../assets/playlist.png";
import userThumb from "../../assets/user.png";
import codeThumb from "../../assets/code.png";
import brand from "../../assets/brand.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const SideBar = ({ sidebarToggle, setSidebarToggle }) => {
  const [active, setActive] = useState(1);
  const sidebarItems = [
    {
      id: 1,
      title: "News Feed",
      imgUrl: codeThumb,
      link: "/home",
    },
    {
      id: 2,
      title: "Trending",
      imgUrl: trendingThumb,
      link: "/home",
    },
    {
      id: 3,
      title: "Following",
      imgUrl: followingThumb,
      link: "/home",
    },
    {
      id: 4,
      title: "Your video",
      imgUrl: videoThumb,
      link: "/home",
    },
    {
      id: 5,
      title: "Dashboard",
      imgUrl: dashboardThumb,
      link: "/dashboard",
    },
  ];
  return (
    <div
      className={`sidebar ${
        sidebarToggle === "toggle"
          ? "active"
          : sidebarToggle === "visible"
          ? "visible"
          : ""
      }`}
    >
      <div className="sidebar__top">
        <a href="/#" className="sidebar__logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMI6LMRvk8ksEv3aF7-_UUDAHPIhpmiVEp4Q&usqp=CAU"
            alt=""
            className="sidebar__pic"
          />
        </a>
        <button
          className="sidebar__burger"
          onClick={setSidebarToggle.bind(
            this,
            sidebarToggle === "toggle" ? "" : "toggle"
          )}
        ></button>
        <button
          className="sidebar__close"
          onClick={setSidebarToggle.bind(
            this,
            sidebarToggle === "visible" ? "" : "visible"
          )}
        >
          <img
            src="https://cdn0.iconfinder.com/data/icons/user-interface-2063/24/UI_Essential_icon_expanded-02-512.png"
            alt=""
            className="icon icon-remove"
          />
        </button>
      </div>
      <div className="sidebar__wrapper">
        <div className="sidebar__inner">
          <div className="sidebar__group">
            <div className="sidebar__caption caption-sm">
              <span>New </span>Feeds
            </div>
            <div className="sidebar__menu">
              {sidebarItems.map((item) => (
                <Link
                  to={item.link}
                  className={`sidebar__item ${
                    active === item.id ? "active" : ""
                  }`}
                  key={item.id}
                  onClick={setActive.bind(this, item.id)}
                >
                  <div className="sidebar__icon">
                    <img src={item.imgUrl} alt="" />
                  </div>
                  <div className="sidebar__text">{item.title}</div>
                </Link>
              ))}
            </div>
          </div>
          <div className="sidebar__group">
            <div className="sidebar__caption caption-sm">Following</div>
            <div className="sidebar__list">
              <Link to="/home" className="sidebar__item online">
                <div className="sidebar__ava">
                  <img className="sidebar__pic" src={userThumb} alt="" />
                </div>
                <div className="sidebar__text">Dylan Hodges</div>
              </Link>
              <Link to="/home" className="sidebar__item online">
                <div className="sidebar__ava">
                  <img className="sidebar__pic" src={userThumb} alt="" />
                </div>
                <div className="sidebar__text">Dylan Hodges</div>
              </Link>
              <Link to="/home" className="sidebar__item">
                <div className="sidebar__ava">
                  <img className="sidebar__pic" src={userThumb} alt="" />
                </div>
                <div className="sidebar__text">Dylan Hodges</div>
              </Link>
              <Link to="/home" className="sidebar__item">
                <div className="sidebar__ava">
                  <img className="sidebar__pic" src={userThumb} alt="" />
                </div>
                <div className="sidebar__text">Dylan Hodges</div>
              </Link>
            </div>
          </div>
          <div className="sidebar__group">
            <div className="sidebar__caption caption-sm">
              <span>Unity </span>Gaming
            </div>
            <div className="sidebar__menu">
              <a className="sidebar__item" href="chat.html">
                <div className="sidebar__icon">
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Slack_svg2-512.png"
                    alt=""
                  />
                </div>
                <div className="sidebar__text">Chat</div>
                <div className="sidebar__counter">20</div>
              </a>
              <a
                className="sidebar__item js-popup-open"
                href="#popup-settings"
                data-effect="mfp-zoom-in"
              >
                <div className="sidebar__icon">
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Slack_svg2-512.png"
                    alt=""
                  />
                </div>
                <div className="sidebar__text">Settings</div>
              </a>
              <a className="sidebar__item" href="channel-analytics.html">
                <div className="sidebar__icon">
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Slack_svg2-512.png"
                    alt=""
                  />
                </div>
                <div className="sidebar__text">Analytics</div>
              </a>
            </div>
          </div>
        </div>
        <div className="sidebar__banner">
          <div className="sidebar__bg"></div>
          <button className="sidebar__remove">
            <img
              src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_exit-512.png"
              alt=""
              className="icon icon-remove"
            />
          </button>
        </div>
      </div>
      <div className="sidebar__bottom">
        <label className="switch switch_theme js-switch-theme">
          <input className="switch__input" type="checkbox" />
          <span className="switch__in">
            <span className="switch__box"></span>
            <span className="switch__icon">
              <img
                src="https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_39-512.png"
                alt=""
                className="icon icon-sun"
              />
              <img
                src="https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_5-256.png"
                alt=""
                className="icon icon-moon"
              />
            </span>
          </span>
        </label>
        <a href="/#" className="sidebar__download">
          <img
            src="https://cdn4.iconfinder.com/data/icons/music-ui-solid-24px/24/download_save_arrow-3-512.png"
            alt=""
            className="icon icon-download"
          />
        </a>
      </div>
    </div>
  );
};

export default SideBar;
