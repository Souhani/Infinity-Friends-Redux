import { useState } from "react";

const CreateCard = ({ onNameFieldChange, 
                      onNicknameFieldChange, 
                      name, 
                      nickname, 
                      onCreateRobotPage, 
                      onAddingCreatedRobot,}) => {

  //button the user clicks to create a robot
  const [howMany, setHowmany] = useState(0);
  const handlAddCards = () => {
    if(name?.length>0 && nickname?.length>0){
      onAddingCreatedRobot({id: nickname,firstName: name, lastName: nickname});
      onNameFieldChange('');
      onNicknameFieldChange('');
      setHowmany(prev => prev+1)
      }
      };
    return (
      <div>
        <h3 className='pt5'>Create Unlimited Unique Friends</h3>  
        <div className=' f3 white b '> You Have Created {howMany} Friends  </div>
            <div className=" measure center pa4">
              <div id="create-card" className="ba b--transparent ph0 mh0">
                <div className="mt3 flex ">
                  <input 
                      key={`name${howMany}`} 
                      placeholder ="name"
                      className="b--dark-blue bg-light-yellow pa2 input-reset ba  hover-bg-light-green hover-black w-50 mr3" 
                      type="text"  
                      onChange={onNameFieldChange} />
                    <input
                      key={`nickname${howMany}`} 
                      placeholder ="nickname"
                      className="b--dark-blue bg-light-yellow pa2 input-reset ba  hover-bg-light-green hover-black w-50" 
                      type="text"  
                      onChange={onNicknameFieldChange} />
                  </div>
              </div>
              <div>
                   <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib mt3" onClick={handlAddCards}>create now</button>
              </div>
             </div>
             <button className="b ph2 grow bg-gold pv1  br4 ba b--yellow pointer f6 "
                 onClick={ onCreateRobotPage }>
                 Done ? Go Back
         </button>      
      </div>   
    );
  };
  export default CreateCard;
  