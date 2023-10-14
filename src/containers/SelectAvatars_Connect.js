import { connect } from 'react-redux';
import { selectingAvatars} from "../actions";
import SelectAvatars from '../components/SelectAvatars';

const mapStateToProps = (state) => {
   return {
      selectedAvatars: state.selectAvatars.selectedAvatars
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      onSelectingAvatars: event => dispatch(selectingAvatars(event.target.value)),
   }
}
const SelectAvatarsConnect = (props) => {
      return (
      <SelectAvatars {...props} />
        )
   }; 

export default connect(mapStateToProps, mapDispatchToProps) (SelectAvatarsConnect);