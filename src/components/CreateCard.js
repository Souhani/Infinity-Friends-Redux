
const CreateCard = ({ onNameFieldChange, onNicknameFieldChange, handlAddCards, index, handleGoBack}) => {
    return (
      <div>
        <h3 className='pt5'>Create Unlimited Number of Robots</h3>  
        <div className=' f3 white b '> You Have Created {index} Robots  </div>
            <div className="measure center pa4">
              <fieldset id="create-card" className="ba b--transparent ph0 mh0">
                <div className="mt3">
                  <input 
                      key={`name${index}`} 
                      placeholder ="name"
                      className="b--dark-blue bg-light-yellow pa2 input-reset ba  hover-bg-light-green hover-black w-40 mr3" 
                      type="text"  
                      onChange={onNameFieldChange} />
                    <input
                      key={`nickname${index}`} 
                      placeholder ="nickname"
                      className="b--dark-blue bg-light-yellow pa2 input-reset ba  hover-bg-light-green hover-black w-40" 
                      type="text"  
                      onChange={onNicknameFieldChange} />
                  </div>
              </fieldset>
                <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" onClick={handlAddCards}>create now</button>
             </div>
             <button className="b ph2 grow bg-gold pv1  br4 ba b--yellow pointer f6 "
                 onClick={ handleGoBack }>
                 Done ? Go Back
         </button>      
      </div>   
    );
  };
  export default CreateCard;
  