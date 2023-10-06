import CreateCard from "../components/CreateCard";
import SearchBox from "../components/SearchBox";
import { useState, useEffect } from "react";
import { connect } from 'react-redux';
import Card from "../components/Card";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";
import { searching, requestRobots, addingName, addingNickname } from "../actions";


const mapStateToProps = (state) => {
   return {
      searchField: state.searcheRobots.searchField,
      isPending: state.requestRobots.isPending,
      requestedRobots: state.requestRobots.requestedRobots,
      error: state.requestRobots.error,
      name: state.createRobots.name,
      nickname: state.createRobots.nickname
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      onSearchFieldChange: event => dispatch(searching(event.target.value)),
      onRequestRobots: () => dispatch(requestRobots()),
      onNameFieldChange: event => dispatch(addingName(event.target.value)),
      onNicknameFieldChange: event => dispatch(addingNickname(event.target.value))
   }
}
const App = (props) => {

  let { onSearchFieldChange, searchField,
        onRequestRobots, isPending, requestedRobots, error,
        onNameFieldChange, name,
        onNicknameFieldChange, nickname
     } = props;
/// in here we fitch robots data( name, ...)
 useEffect(() => {
   onRequestRobots()
    }, []);

 //states that we use.
   const [cards, setCards] = useState([]);
   const [index, setIndex] = useState(0);
   const [create, setCreate] = useState(false);

  
///functions used to create cards:
            // handle the create robot button
            const handlCreatClick = () => {
               setCreate(true);
            };
            
            //button the user clicks to create a robot
            const handlAddCards = () => {
             if(name.length!==0 && nickname.length!==0){
               let newCard = { id:cards.length+1, firstName: name, lastName: nickname}
               setCards([newCard,...cards]  );
                // Clear the name input field when the user done
               // Clear the Nickname input field also
               setIndex(index+1);
               }
               };

 //go back to the main page from the create card component
            const handleGoBack = () => {
               setCreate(false)
            }

///functions used to delete a robots
            const handleDeleteCard = (deletedItem) => {
               let filteredCards= cards.filter( card => {
                  return card.id!== deletedItem;
                   })
               setCards(filteredCards)
            };
            const handleDeleteAll = () => {
                      setCards([]);
                      setIndex(0);
            }

///search for a robot
   const robots = [...requestedRobots, ...cards]
   const filteredRobots = robots.filter(robot => {
      return robot.firstName.toLowerCase().includes(searchField.toLowerCase()) || robot.lastName.toLowerCase().includes(searchField.toLowerCase())
   });
/// if there is no robots
   const isCards = (robots) => {
      if(!robots.length){
         return (<h1>No Robots</h1>)
      }else{ 
         return <Card filteredRobots={filteredRobots} handleDeleteCard={handleDeleteCard}/>
      };
   };

// if create state is true we show the user the page where he can create robots
   if(create){
      return(      
       <CreateCard 
                   onNameFieldChange={onNameFieldChange} 
                   onNicknameFieldChange={onNicknameFieldChange} 
                   handlAddCards={handlAddCards} index={index} 
                   handleGoBack={handleGoBack}
                   />        
      )
 // if create state is false we show the user the page where he can see robots
   } else if(!create){
      return (
         <div>
         <h1>Infinity Robots</h1>
         <SearchBox onSearchFieldChange={ onSearchFieldChange }/>
         <button className="b ph2 grow bg-gold pv1  br4 ba b--yellow pointer f6 "
                 onClick={ handleDeleteAll }
                 style={{position: 'absolute', top:'2%', right:'2%'}}>
                 Delete All
         </button> 
         <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                 onClick={handlCreatClick}>
                 Create Robots
         </button>
         <Scroll>
            <ErrorBoundry>
               { 
                  isCards(robots)

               }
             
            </ErrorBoundry>
         </Scroll>   
         </div>
        )
   }; 
};
export default connect(mapStateToProps, mapDispatchToProps) (App);