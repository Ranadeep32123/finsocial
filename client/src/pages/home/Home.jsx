import Posts from "../../components/posts/Posts";
import Share from "../../components/share/Share";
import "./home.scss";
import Stats from "../../components/stats/stats";

const Home = () => {
  return (
    <div className="home">
      <Stats />
      <Share />
      <Posts />
    </div>
  );
};

export default Home;
