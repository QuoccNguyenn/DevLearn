import userThumb from "../../assets/user.png";

const Collection = () => {
  return (
    <div className="collection">
      <div className="collection__head">
        <div className="collection__title h5">Collection</div>
        <div className="collection__field field">
          <div className="field__wrap">
            <select name="field_select" id="select" className="field__select">
              <option value="popular">Popular</option>
              <option value="new">New</option>
              <option value="free">Free</option>
              <option value="recent">Recent</option>
            </select>
          </div>
        </div>
      </div>
      <div className="collection__list">
        <a href="/#" className="card">
          <div className="card__preview">
            <img
              src={
                "https://global-uploads.webflow.com/5f59f5829ccb43e646633b1d/61dff6b94a2f755042155cf7_How-Reacte-Native-can-save-you-business-cover.png"
              }
              alt=""
              className="card__pic"
            />
          </div>
          <div className="card__body">
            <div className="card__title h6">React Router v6</div>
            <div className="card__user">
              <div className="card__ava">
                <img src={userThumb} alt="" className="card__pic" />
              </div>
              <div className="card__desc">
                <div className="card__man confirm">Jason Aa</div>
                <div className="card__game">ReactJS</div>
              </div>
            </div>
          </div>
          <div className="card__foot">
            <div className="live">Live</div>
            <div className="status blue">4.2K Watching</div>
          </div>
        </a>
        <a href="/#" className="card">
          <div className="card__preview">
            <img
              src={
                "https://global-uploads.webflow.com/5f59f5829ccb43e646633b1d/61dff6b94a2f755042155cf7_How-Reacte-Native-can-save-you-business-cover.png"
              }
              alt=""
              className="card__pic"
            />
          </div>
          <div className="card__body">
            <div className="card__title h6">React Router v6</div>
            <div className="card__user">
              <div className="card__ava">
                <img src={userThumb} alt="" className="card__pic" />
              </div>
              <div className="card__desc">
                <div className="card__man confirm">Jason Aa</div>
                <div className="card__game">ReactJS</div>
              </div>
            </div>
          </div>
          <div className="card__foot">
            <div className="live">Live</div>
            <div className="status blue">4.2K Watching</div>
          </div>
        </a>
        <a href="/#" className="card">
          <div className="card__preview">
            <img
              src={
                "https://global-uploads.webflow.com/5f59f5829ccb43e646633b1d/61dff6b94a2f755042155cf7_How-Reacte-Native-can-save-you-business-cover.png"
              }
              alt=""
              className="card__pic"
            />
          </div>
          <div className="card__body">
            <div className="card__title h6">React Router v6</div>
            <div className="card__user">
              <div className="card__ava">
                <img src={userThumb} alt="" className="card__pic" />
              </div>
              <div className="card__desc">
                <div className="card__man confirm">Jason Aa</div>
                <div className="card__game">ReactJS</div>
              </div>
            </div>
          </div>
          <div className="card__foot">
            <div className="live">Live</div>
            <div className="status blue">4.2K Watching</div>
          </div>
        </a>
        <a href="/#" className="card">
          <div className="card__preview">
            <img
              src={
                "https://global-uploads.webflow.com/5f59f5829ccb43e646633b1d/61dff6b94a2f755042155cf7_How-Reacte-Native-can-save-you-business-cover.png"
              }
              alt=""
              className="card__pic"
            />
          </div>
          <div className="card__body">
            <div className="card__title h6">React Router v6</div>
            <div className="card__user">
              <div className="card__ava">
                <img src={userThumb} alt="" className="card__pic" />
              </div>
              <div className="card__desc">
                <div className="card__man confirm">Jason Aa</div>
                <div className="card__game">ReactJS</div>
              </div>
            </div>
          </div>
          <div className="card__foot">
            <div className="live">Live</div>
            <div className="status blue">4.2K Watching</div>
          </div>
        </a>
        <a href="/#" className="card">
          <div className="card__preview">
            <img
              src={
                "https://global-uploads.webflow.com/5f59f5829ccb43e646633b1d/61dff6b94a2f755042155cf7_How-Reacte-Native-can-save-you-business-cover.png"
              }
              alt=""
              className="card__pic"
            />
          </div>
          <div className="card__body">
            <div className="card__title h6">React Router v6</div>
            <div className="card__user">
              <div className="card__ava">
                <img src={userThumb} alt="" className="card__pic" />
              </div>
              <div className="card__desc">
                <div className="card__man confirm">Jason Aa</div>
                <div className="card__game">ReactJS</div>
              </div>
            </div>
          </div>
          <div className="card__foot">
            <div className="live">Live</div>
            <div className="status blue">4.2K Watching</div>
          </div>
        </a>
      </div>
    </div>
  );
};
export default Collection;
