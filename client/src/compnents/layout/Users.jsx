import plusWhite from "../../assets/icons/plus_white.png";

const Users = () => {
  const users = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
    {
      id: 9,
    },
  ];
  return (
    <div className="users">
      <div className="users__container">
        <div className="users__info h6">From Languages You Follow</div>
        <div className="users__list">
          <a href="/#" className="users__item users__item_add">
            <div className="users__add">
              <img src={plusWhite} alt="" className="icon icon-plus" />
            </div>
            <div className="users__title">Add Yours</div>
          </a>
          {users.map((item) => (
            <a href="/#" className="users__item" key={item.id}>
              <div className="ava ava_online">
                <img
                  src="https://images.viblo.asia/8da4cd51-46c5-45f4-ac10-7c734f3a24ad.png"
                  alt=""
                  className="ava__pic"
                />
              </div>
              <div className="users__title">AngularJS</div>
              <div className="users__time">2 months ago</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
