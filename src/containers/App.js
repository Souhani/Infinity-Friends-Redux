import { connect } from "react-redux";
import {
  searching,
  requestRobots,
  createRobotPage,
  deleteAllRobots,
  getAllRobots,
} from "../actions";
import MainPage from "../components/mainPage/MainPage";
import { useEffect } from "react";

const mapStateToProps = (state) => {
  return {
    searchField: state.searcheRobots.searchField,
    isPending: state.requestRobots.isPending,
    requestedRobots: state.requestRobots.requestedRobots,
    error: state.requestRobots.error,
    createPage: state.createRobotPage.createPage,
    robots: state.allRobots.robots,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchFieldChange: (event) => dispatch(searching(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
    onCreateRobotPage: () => dispatch(createRobotPage()),
    onDeleteAllRobots: () => dispatch(deleteAllRobots()),
    onGetAllRobots: (robots) => dispatch(getAllRobots(robots)),
  };
};
const App = (props) => {
  const { requestedRobots, onRequestRobots, onGetAllRobots } = props;
  useEffect(() => {
    onRequestRobots();
  }, [onRequestRobots]);
  useEffect(() => {
    onGetAllRobots([...requestedRobots]);
  }, [onGetAllRobots, requestedRobots]);
  return <MainPage {...props} />;
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
