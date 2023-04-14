const Categories = () => {
  return (
    <div className="categories">
      <div className="categories__info h5">
        Popular Programming Language Categories
      </div>
      <div className="categories__list">
        <div className="categories__item categories__item_big">
          <div className="categories__box">
            <div
              className="categories__preview"
              style={{
                backgroundImage:
                  "url(https://images.ctfassets.net/51xdmtqw3t2p/2w0H06U9MYaJNsonXhyD3I/0cd72a4b4e01460bcd7145e984b05c38/Portada_react.jpg?w=1280&q=50)",
              }}
            ></div>
            <div className="categories__details">
              <div className="categories__tags">
                <div className="categories__tag">Front end</div>
                <div className="categories__tag">Framework</div>
              </div>
              <div className="categories_title h5">ReactJS</div>
              <div className="status green">4.9k Visited</div>
              <button className="categories__btn btn btn_purple">Follow</button>
            </div>
          </div>
        </div>
        <div className="categories__item categories__item_sm">
          <div
            className="categories__preview"
            style={{
              backgroundImage:
                "url(https://wallpaperaccess.com/full/4584347.png)",
            }}
          ></div>
          <div className="categories_details">
            <div className="categories_tags">
              <div className="categories_tag">Frontend</div>
            </div>
            <div className="categories__title h6">VueJS</div>
            <div className="status green">4.9k Visited</div>
            <button className="categories__btn btn btn_gray">Follow</button>
          </div>
        </div>
        <div className="categories__item categories__item_sm">
          <div
            className="categories__preview"
            style={{
              backgroundImage:
                "url(https://ostraining.com/wp-content/uploads/coding/html5-css3-hd.jpg)",
            }}
          ></div>
          <div className="categories_details">
            <div className="categories_tags">
              <div className="categories_tag">Web Developer</div>
            </div>
            <div className="categories__title h6">HTML/CSS</div>
            <div className="status green">4.9k Visited</div>
            <button className="categories__btn btn btn_gray">Follow</button>
          </div>
        </div>
        <div className="categories__item categories__item_sm">
          <div
            className="categories__preview"
            style={{
              backgroundImage:
                "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ53GjfEfvWbzeQ-ukuRT_qXBxxfFau2TJcbg&usqp=CAU)",
            }}
          ></div>
          <div className="categories_details">
            <div className="categories_tags">
              <div className="categories_tag">Data Science</div>
            </div>
            <div className="categories__title h6">Python</div>
            <div className="status green">4.9k Visited</div>
            <button className="categories__btn btn btn_gray">Follow</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
