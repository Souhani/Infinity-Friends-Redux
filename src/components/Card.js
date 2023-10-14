const Card = ({filteredRobots , onDeleteRobot, selectedAvatars }) => {
    return(
        <div>
            {
                filteredRobots.map(
                    (card, key) => {
                        let felterRobots;
                        return(
                            <div className='bg-light-yellow  tc br3 dib shadow-2 dib pa3 bw2 ma2'
                             key={key+card.id}
                                style={{position: 'relative'}}>
                                <button className="b ph2  grow link  bg-gold pv1  br4 ba b--yellow pointer f6 "
                                        onClick={ felterRobots =() => {onDeleteRobot(card.lastName)}}
                                        style={{position: 'absolute', top:'1%', right:'1%'}}>
                                        Delete
                                </button>
                                <div className="pa3">
                                    <img 
                                        alt='robot'
                                        src= {`https://robohash.org/${card.firstName+card.id+card.lastName}?set=${selectedAvatars}&size=100x100`} />
                                    </div>
                                <div className='grow navy'
                                     style={{cursor: "pointer"}}>
                                    <h2>{card.firstName}</h2>
                                    <h4>{card.lastName}</h4>
                                </div>
                           </div>
                        )   
                    }  
                )
            }      
        </div>     
    )
};
export default Card;
