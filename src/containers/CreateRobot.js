import { connect } from 'react-redux';
import { addingName, addingNickname, 
         createRobotPage, addCreatedRobot } from "../actions";
import CreateRobotPage from '../components/CreateRobotPage';

const mapStateToProps = (state) => {
   return {
      name: state.createRobots.name,
      nickname: state.createRobots.nickname,
      createPage: state.createRobotPage.createPage,
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      onNameFieldChange: event => dispatch(addingName(event?.target?.value)),
      onNicknameFieldChange: event => dispatch(addingNickname(event?.target?.value)),
      onCreateRobotPage: () => dispatch(createRobotPage()),
      onAddingCreatedRobot: (robot) => dispatch(addCreatedRobot(robot))
   }
}
const CreateRobot = (props) => {
      return (
      <CreateRobotPage {...props} />
        )
   }; 

export default connect(mapStateToProps, mapDispatchToProps) (CreateRobot);