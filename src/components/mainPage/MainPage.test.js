import { shallow } from "enzyme";
import MainPage from "./MainPage";
import filterRobots from "../FilterRobots";

let wrapper;
beforeEach(() => {
  const mockProps = {
    onSearchFieldChange: jest.fn(),
    searchField: "",
    onRequestRobots: jest.fn(),
    requestedRobots: [],
    onCreateRobotPage: jest.fn(),
    createPage: false,
    onDeleteAllRobots: jest.fn(),
    onGetAllRobots: jest.fn(),
    robots: [],
    onDeleteRobot: jest.fn(),
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});
describe("test MainPage component", () => {
  it("MainPage renders without crashing", () => {
    expect.assertions(1);
    expect(wrapper).toMatchSnapshot();
  });
  it("renders if there is robots", () => {
    const mockProps1 = {
      onSearchFieldChange: jest.fn(),
      searchField: "",
      onRequestRobots: jest.fn(),
      requestedRobots: [],
      onCreateRobotPage: jest.fn(),
      createPage: false,
      onDeleteAllRobots: jest.fn(),
      onGetAllRobots: jest.fn(),
      robots: [
        {
          id: 1,
          firstName: "ali",
          lastName: "ahmed",
        },
        {
          id: 2,
          firstName: "jhon",
          lastName: "snow",
        },
      ],
      onDeleteRobot: jest.fn(),
    };
    const wrapper1 = shallow(<MainPage {...mockProps1} />);
    expect.assertions(1);
    expect(wrapper1).toMatchSnapshot();
  });

  it("renders for create robots Page", () => {
    const mockProps2 = {
      onSearchFieldChange: jest.fn(),
      searchField: "",
      onRequestRobots: jest.fn(),
      requestedRobots: [],
      onCreateRobotPage: jest.fn(),
      createPage: true,
      onDeleteAllRobots: jest.fn(),
      onGetAllRobots: jest.fn(),
      robots: [],
      onDeleteRobot: jest.fn(),
    };
    const wrapper2 = shallow(<MainPage {...mockProps2} />);
    expect.assertions(1);
    expect(wrapper2).toMatchSnapshot();
  });

  it("renders for request Robots", () => {
    const mockProps3 = {
      onSearchFieldChange: jest.fn(),
      searchField: "",
      onRequestRobots: jest.fn(),
      requestedRobots: [
        {
          id: 1,
          firstName: "ali",
          lastName: "ahmed",
        },
        {
          id: 1,
          firstName: "jhon",
          lastName: "snow",
        },
      ],
      onCreateRobotPage: jest.fn(),
      createPage: false,
      onDeleteAllRobots: jest.fn(),
      onGetAllRobots: jest.fn(),
      robots: [],
      onDeleteRobot: jest.fn(),
    };
    const wrapper3 = shallow(<MainPage {...mockProps3} />);
    expect.assertions(1);
    expect(wrapper3).toMatchSnapshot();
  });
});
