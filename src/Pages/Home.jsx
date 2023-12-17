import Title from "../Components/Home/Title";
import NavStorageAndCloudes from "../Components/Home/NavStorageAndCloudes";
import BarFeature from "../Components/Home/BarFeature";
import ListItems from "../Components/Home/ListItems";

const Home = () => {
  return (
    <div className="myBg">
      <Title />
      <NavStorageAndCloudes />
      <BarFeature />
      <ListItems />
    </div>
  );
};
export default Home;
