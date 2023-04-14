import MainPage from "./MainPage";
import Collection from "../compnents/layout/Collection";
import Users from "../compnents/layout/Users";
import Categories from "../compnents/layout/Categories";

const Home = () => {
  return (
    <>
      <div className="main js-main">
        <MainPage />
      </div>
      <div className="page__center">
        <Collection />
        <Users />
        <Categories />
      </div>
    </>
  );
};

export default Home;
