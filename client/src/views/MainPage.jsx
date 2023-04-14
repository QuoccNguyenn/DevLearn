const MainPage = () => {
  return (
    <div className="main__container">
      <div
        className="main__item"
        style={{
          backgroundImage:
            "url(https://codersera.com/blog/wp-content/uploads/2019/12/Learn-Reactjs.jpeg)",
        }}
      >
        <div className="main__details">
          <div className="main__live live live_big">Live</div>
          <div className="main__title h4">ReactJS - React Router Dom V6</div>
          <div className="main__parameters">
            <div className="main__parameter">
              <div className="main__icon">
                <img
                  src="https://cdn.auth0.com/blog/optimizing-react/logo.png"
                  alt=""
                  className="main__pic"
                />
              </div>
              <div className="main__text">ReactJS</div>
            </div>
            <div className="main__parameter">
              {/* <span role="img" aria-label="english-icon"> */}
              <img
                height="18"
                width="18"
                alt="🇺🇸"
                referrerpolicy="origin-when-cross-origin"
                src="https://static.xx.fbcdn.net/images/emoji.php/v9/t66/1.5/32/1f1fa_1f1f8.png"
              />{" "}
              {/* </span>{" "} */}
              English
            </div>
          </div>
          <button className="main__btn btn btn_purple">Watch</button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
