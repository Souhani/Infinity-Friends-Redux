import CreateRobot from "../../containers/CreateRobot";
import SearchBox from "../SearchBox";
import Scroll from "../Scroll";
import ErrorBoundry from "../ErrorBoundry";
// import CounterButton from "../CounterButton ";
import "./MainPage.css";
import filterRobots from "../FilterRobots";
import SelectAvatarsConnect from "../../containers/SelectAvatars_Connect";
import CardConnect from "../../containers/Card_Connect";

const MainPage = (props) => {
  let {
    onSearchFieldChange,
    searchField,
    onCreateRobotPage,
    createPage,
    onDeleteAllRobots,
    robots,
    isPending,
  } = props;
  /// if there is no robots
  const isCards = (robots) => {
    if (isPending) {
      return <h1>Loading...</h1>;
    }
    if (!robots.length) {
      return <h1>No Friends 😔</h1>;
    } else {
      return <CardConnect filteredRobots={filterRobots(robots, searchField)} />;
    }
  };

  // if create state is true we show the user the page where he can create robots
  if (createPage) {
    return <CreateRobot />;
    // if create state is false we show the user the page where he can see robots
  } else if (!createPage) {
    return (
      <div>
        <h1>Infinity Friends</h1>
        {/* <CounterButton /> */}
        <SearchBox onSearchFieldChange={onSearchFieldChange} />
        <button
          className="b ph2 grow bg-gold pv1  br4 ba b--yellow pointer f6 "
          onClick={onDeleteAllRobots}
          style={{ position: "absolute", top: "2%", right: "2%" }}
        >
          Delete All
        </button>
        <div className="flex justify-center">
          <SelectAvatarsConnect />
          <button
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib ml2"
            onClick={onCreateRobotPage}
          >
            Create Friends
          </button>
        </div>
        <Scroll>
          <ErrorBoundry>{isCards(robots)}</ErrorBoundry>
        </Scroll>
      </div>
    );
  }
};

export default MainPage;
