import Title from "../Components/Home/Title";
import NavStorage from "../Components/Home/NavStorage";
import BarFeature from "../Components/Home/BarFeature";
import ListItems from "../Components/Home/ListItems";

const Home = () => {
  return (
    <div className="myBg">
      <Title />
      <NavStorage />
      <BarFeature />
      <ListItems />
    </div>
  );
};
export default Home;
