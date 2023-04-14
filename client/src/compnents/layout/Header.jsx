import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import plusWhite from "../../assets/icons/plus_white.png";
import plusGray from "../../assets/icons/plus_gray.png";

const Header = ({ sidebarToggle, setSidebarToggle }) => {
  const [toggleHeader, setToggleHeader] = useState("");
  const {
    authState: {
      user: { username },
    },
    logoutUser,
  } = useContext(AuthContext);

  const logout = () => logoutUser();
  return (
    <div className="header">
      <button
        className={`header__burger ${
          sidebarToggle === "visible" ? "active" : ""
        }`}
        onClick={setSidebarToggle.bind(
          this,
          sidebarToggle === "visible" ? "" : "visible"
        )}
      ></button>
      <div
        className={`header__item header__item_browse js-header-item ${
          toggleHeader === "browser" ? "active" : ""
        }`}
      >
        <div
          className="header__head js-header-head"
          onClick={setToggleHeader.bind(
            this,
            toggleHeader === "browser" ? "" : "browser"
          )}
        >
          <img
            src="https://cdn2.iconfinder.com/data/icons/unoline-social-set/24/Safari-512.png"
            alt=""
            className="icon icon-location"
          />{" "}
          Browse
          <img
            src="https://cdn1.iconfinder.com/data/icons/iconoir-vol-3/24/nav-arrow-down-512.png"
            alt=""
            className="icon icon-arrow-down"
          />
        </div>
        <div className="header__body">
          <Link to="/home" className="header__line">
            <div className="header__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="icon icon-camera"
              >
                <path
                  fill="currentColor"
                  d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z"
                />
              </svg>
            </div>
            <div className="header__text">Popular Categories</div>
          </Link>
          <Link to="/home" className="header__line">
            <div className="header__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="icon icon-camera"
              >
                <path
                  fill="currentColor"
                  d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z"
                />
              </svg>
            </div>
            <div className="header__text">Hot Streamers</div>
          </Link>
          <Link to="/home" className="header__line">
            <div className="header__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="icon icon-camera"
              >
                <path
                  fill="currentColor"
                  d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z"
                />
              </svg>
            </div>
            <div className="header__text">Trending Videos</div>
          </Link>
          <Link to="/home" className="header__line">
            <div className="header__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="icon icon-camera"
              >
                <path
                  fill="currentColor"
                  d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z"
                />
              </svg>
            </div>
            <div className="header__text">Sign In</div>
          </Link>
          <Link to="/home" className="header__line">
            <div className="header__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="icon icon-camera"
              >
                <path
                  fill="currentColor"
                  d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z"
                />
              </svg>
            </div>
            <div className="header__text">Sign Up</div>
          </Link>
          <Link to="/home" className="header__line">
            <div className="header__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="icon icon-camera"
              >
                <path
                  fill="currentColor"
                  d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z"
                />
              </svg>
            </div>
            <div className="header__text">Stories</div>
          </Link>
        </div>
      </div>
      <form className="header__search">
        <input
          className="header__input"
          type="text"
          placeholder="Search Everything"
        />
        <button className="header__btn-search">
          <img
            src="https://cdn1.iconfinder.com/data/icons/unicons-line-vol-5/24/search-512.png"
            alt=""
            className="icon icon-search"
          />
        </button>
      </form>
      <div className="header__control">
        <div
          className={`header__item header__item_add js-header-item ${
            toggleHeader === "add" ? "active" : ""
          }`}
        >
          <button
            className="header__head js-header-head"
            onClick={setToggleHeader.bind(
              this,
              toggleHeader === "add" ? "" : "add"
            )}
          >
            <img
              src={toggleHeader === "add" ? plusWhite : plusGray}
              alt=""
              className="icon icon-plus-sm"
            />
          </button>
          <div className="header__body js-header-body">
            <Link to="/home" className="header__line">
              <div className="header__icon">
                {/* <img
                  src="https://cdn.iconfinder.com/stored_data/464017/128/png?token=1656316650-wtMLTnKHGVrseBMucLYrJpuBZUVobwWDqxkeDfhfxsk%3D"
                  alt=""
                  
                /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  className="icon icon-camera"
                >
                  <path
                    fill="currentColor"
                    d="M384 112v288c0 26.51-21.49 48-48 48h-288c-26.51 0-48-21.49-48-48v-288c0-26.51 21.49-48 48-48h288C362.5 64 384 85.49 384 112zM576 127.5v256.9c0 25.5-29.17 40.39-50.39 25.79L416 334.7V177.3l109.6-75.56C546.9 87.13 576 102.1 576 127.5z"
                  />
                </svg>
              </div>
              <div className="header__text">New Video</div>
              <div className="header__icon">
                {/* <img
                  src="https://cdn.iconfinder.com/stored_data/464014/128/png?token=1656316526-FROsQPFyeoBxT5T0JSwXEruiMXY6Qc%2FfJPzjH8w2RiI%3D"
                  alt=""
                  
                /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="icon icon-add"
                >
                  <path
                    fill="currentColor"
                    d="M200 344V280H136C122.7 280 112 269.3 112 256C112 242.7 122.7 232 136 232H200V168C200 154.7 210.7 144 224 144C237.3 144 248 154.7 248 168V232H312C325.3 232 336 242.7 336 256C336 269.3 325.3 280 312 280H248V344C248 357.3 237.3 368 224 368C210.7 368 200 357.3 200 344zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z"
                  />
                </svg>
              </div>
            </Link>
            <Link to="/home" className="header__line">
              <div className="header__icon">
                {/* <img
                  src="https://cdn.iconfinder.com/stored_data/463946/128/png?token=1656314211-hOGY8j0RpwroZQgo%2FbMh51mhLM%2FQrf7FfY%2BY1WUH0gQ%3D"
                  alt=""
                
                /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  className="icon icon-camera"
                >
                  <path
                    fill="currentColor"
                    d="M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z"
                  />
                </svg>
              </div>
              <div className="header__text">Go Live</div>
              <div className="header__icon">
                {/* <img
                  src="https://cdn.iconfinder.com/stored_data/464023/128/png?token=1656317142-6WmmGe1RGUb7%2Fkyy982%2F0lYKJLzSKIPPT1cDPXdhvnQ%3D"
                  alt=""
                  
                /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  className="icon icon-add"
                >
                  <path
                    fill="currentColor"
                    d="M319.1 351.1c-35.35 0-64 28.66-64 64.01s28.66 64.01 64 64.01c35.34 0 64-28.66 64-64.01S355.3 351.1 319.1 351.1zM320 191.1c-70.25 0-137.9 25.6-190.5 72.03C116.3 275.7 115 295.9 126.7 309.2C138.5 322.4 158.7 323.7 171.9 312C212.8 275.9 265.4 256 320 256s107.3 19.88 148.1 56C474.2 317.4 481.8 320 489.3 320c8.844 0 17.66-3.656 24-10.81C525 295.9 523.8 275.7 510.5 264C457.9 217.6 390.3 191.1 320 191.1zM630.2 156.7C546.3 76.28 436.2 32 320 32S93.69 76.28 9.844 156.7c-12.75 12.25-13.16 32.5-.9375 45.25c12.22 12.78 32.47 13.12 45.25 .9375C125.1 133.1 220.4 96 320 96s193.1 37.97 265.8 106.9C592.1 208.8 600 211.8 608 211.8c8.406 0 16.81-3.281 23.09-9.844C643.3 189.2 642.9 168.1 630.2 156.7z"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
        <div className="header__item header__item_search">
          <Link to="/home" className="header__item header__item_search">
            <img
              src="https://cdn1.iconfinder.com/data/icons/unicons-line-vol-5/24/search-512.png"
              alt=""
              className="icon icon-search"
            />
          </Link>
        </div>
        <div
          className={`header__item header__item_notifications js-header-item ${
            toggleHeader === "notifications" ? "active" : ""
          }`}
        >
          <button
            className="header__head js-header-head"
            onClick={setToggleHeader.bind(
              this,
              toggleHeader === "notifications" ? "" : "notifications"
            )}
          >
            <img
              src="https://cdn2.iconfinder.com/data/icons/facebook-ui/48/Jee-24-512.png"
              alt=""
              className="icon icon-bell"
            />
            <div className="header__counter">2</div>
          </button>
          <div className="header__body js-header-body">
            <div className="notifications">
              <div className="notifications__info h6">Recent Notification</div>
              <div className="notifications__list">
                <Link to="/home" className="notifications__item">
                  <div className="notifications__ava">
                    <img
                      src="https://ui8-unity-gaming.herokuapp.com/img/ava-1.png"
                      alt=""
                      className="notifications__pic"
                    />
                    <div className="notifications__status bg-blue">
                      <img
                        src="https://ui8-unity-gaming.herokuapp.com/img/chat.svg"
                        alt=""
                        className="notification__pic"
                      />
                    </div>
                  </div>
                  <div className="notifications__details">
                    <div className="notifications__line">
                      <div className="notifications__user">Sarah Saunders</div>
                      <div className="notifications__time">8h</div>
                    </div>
                    <div className="notifications__text">
                      Commented on{" "}
                      <span className="notifications__project">
                        The result are beautiful
                      </span>
                    </div>
                  </div>
                </Link>
                <Link to="/home" className="notifications__item">
                  <div className="notifications__ava">
                    <img
                      src="https://ui8-unity-gaming.herokuapp.com/img/ava-2.png"
                      alt=""
                      className="notifications__pic"
                    />
                    <div className="notifications__status bg-blue">
                      <img
                        src="https://ui8-unity-gaming.herokuapp.com/img/chat.svg"
                        alt=""
                        className="notification__pic"
                      />
                    </div>
                  </div>
                  <div className="notifications__details">
                    <div className="notifications__line">
                      <div className="notifications__user">Sarah Saunders</div>
                      <div className="notifications__time">8h</div>
                    </div>
                    <div className="notifications__text">
                      Commented on{" "}
                      <span className="notifications__project">
                        The result are beautiful
                      </span>
                    </div>
                  </div>
                </Link>
                <Link to="/home" className="notifications__item">
                  <div className="notifications__ava">
                    <img
                      src="https://ui8-unity-gaming.herokuapp.com/img/ava-4.png"
                      alt=""
                      className="notifications__pic"
                    />
                    <div className="notifications__status bg-blue">
                      <img
                        src="https://ui8-unity-gaming.herokuapp.com/img/chat.svg"
                        alt=""
                        className="notification__pic"
                      />
                    </div>
                  </div>
                  <div className="notifications__details">
                    <div className="notifications__line">
                      <div className="notifications__user">Sarah Saunders</div>
                      <div className="notifications__time">8h</div>
                    </div>
                    <div className="notifications__text">
                      Commented on{" "}
                      <span className="notifications__project">
                        The result are beautiful
                      </span>
                    </div>
                  </div>
                </Link>
                <Link to="/home" className="notifications__item">
                  <div className="notifications__ava">
                    <img
                      src="https://ui8-unity-gaming.herokuapp.com/img/ava-4.png"
                      alt=""
                      className="notifications__pic"
                    />
                    <div className="notifications__status bg-green">
                      <img
                        src="https://ui8-unity-gaming.herokuapp.com/img/chat.svg"
                        alt=""
                        className="notification__pic"
                      />
                    </div>
                  </div>
                  <div className="notifications__details">
                    <div className="notifications__line">
                      <div className="notifications__user">Sarah Saunders</div>
                      <div className="notifications__time">8h</div>
                    </div>
                    <div className="notifications__text">
                      Commented on{" "}
                      <span className="notifications__project">
                        The result are beautiful
                      </span>
                    </div>
                  </div>
                </Link>
                <Link to="/home" className="notifications__item">
                  <div className="notifications__ava">
                    <img
                      src="https://ui8-unity-gaming.herokuapp.com/img/ava-2.png"
                      alt=""
                      className="notifications__pic"
                    />
                    <div className="notifications__status bg-purple">
                      <img
                        src="https://ui8-unity-gaming.herokuapp.com/img/message.svg"
                        alt=""
                        className="notification__pic"
                      />
                    </div>
                  </div>
                  <div className="notifications__details">
                    <div className="notifications__line">
                      <div className="notifications__user">Sarah Saunders</div>
                      <div className="notifications__time">8h</div>
                    </div>
                    <div className="notifications__text">
                      Commented on{" "}
                      <span className="notifications__project">
                        The result are beautiful
                      </span>
                    </div>
                  </div>
                </Link>
                <Link to="/home" className="notifications__item">
                  <div className="notifications__ava">
                    <img
                      src="https://ui8-unity-gaming.herokuapp.com/img/ava-5.png"
                      alt=""
                      className="notifications__pic"
                    />
                    <div className="notifications__status bg-orange">
                      <img
                        src="https://ui8-unity-gaming.herokuapp.com/img/heart.svg"
                        alt=""
                        className="notification__pic"
                      />
                    </div>
                  </div>
                  <div className="notifications__details">
                    <div className="notifications__line">
                      <div className="notifications__user">Sarah Saunders</div>
                      <div className="notifications__time">8h</div>
                    </div>
                    <div className="notifications__text">
                      Commented on{" "}
                      <span className="notifications__project">
                        The result are beautiful
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`header__item header__item_profile ${
          toggleHeader === "avatar" ? "active" : ""
        }`}
      >
        <div
          //   href="/#"
          className="header__head"
          onClick={setToggleHeader.bind(
            this,
            toggleHeader === "avatar" ? "" : "avatar"
          )}
        >
          <img
            src="https://ui8-unity-gaming.herokuapp.com/img/avatar.png"
            alt=""
            className="header__pic"
          />
        </div>
        <div className="header__body">
          <Link to="/home" className="header__link">
            <div className="header__img">
              <img
                src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-256.png"
                alt=""
                className="icon icon-profile"
              />
            </div>
            Profile of {username}
          </Link>
          <Link to="/dashboard" className="header__link">
            <div className="header__img">
              <img
                src="https://cdn3.iconfinder.com/data/icons/office-310/10/11-512.png"
                alt=""
                className="icon icon-profile"
              />
            </div>
            My Dashboard
          </Link>
          <Link to="/home" className="header__link">
            <div className="header__img">
              <img
                src="https://cdn4.iconfinder.com/data/icons/education-free/512/education-school-learn-study-14-256.png"
                alt=""
                className="icon icon-profile"
              />
            </div>
            My Channel
          </Link>
          <Link to="/home" className="header__link">
            <div className="header__img">
              <img
                src="https://cdn1.iconfinder.com/data/icons/jumpicon-basic-ui-line-1/32/-_Gear-Settings-Setting-Wheel--512.png"
                alt=""
                className="icon icon-profile"
              />
            </div>
            Settings
          </Link>
          <div className="header__link" onClick={logout}>
            <div className="header__img">
              <img
                src="https://cdn3.iconfinder.com/data/icons/basic-user-interface-5/64/Door_enter_entrance_exit_leave_logout_out_-256.png"
                alt=""
                className="icon icon-profile"
              />
            </div>
            Log Out
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
