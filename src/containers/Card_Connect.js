import { connect } from 'react-redux';
import { deleteRobot} from "../actions";
import Card from '../components/Card';

const mapStateToProps = (state) => {
   return {
    selectedAvatars: state.selectAvatars.selectedAvatars
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      onDeleteRobot: (robotNickname) => dispatch(deleteRobot(robotNickname)),
   }
}
const CardConnect = (props) => {
      return (
      <Card {...props} />
        )
   }; 

export default connect(mapStateToProps, mapDispatchToProps) (CardConnect);