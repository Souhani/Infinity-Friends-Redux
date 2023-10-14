const SelectAvatars = (onSelectingAvatars, selectedAvatars) => {
    return (
        <>
         <select className='b ph3 pv2  ba b--black bg-transparent pointer f6 dib'
                 value={onSelectingAvatars.selectedAvatars}
                 onChange={onSelectingAvatars.onSelectingAvatars} >
            <option value="set4">Kittens</option>
            <option value="set1">Robts</option>
            <option value="set3">Modern robots</option>
            <option value="set2">Monsters</option>
            <option value="set5">Human avatars</option>
         </select>
        </>
    )
};

export default SelectAvatars;