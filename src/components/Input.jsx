import React, { useEffect, useRef, useState } from "react";
import List from "./List";
import Chip from "./Chip";
import Users from "../data.json";

const Input = () => {
  const [input, setInput] = useState("");
  const [searchedUsers, setSearchedUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [visitedUsers,setVisitedUsers] = useState({});
  const [activeChip, setActiveChip] = useState(-1);
  const inputRef = useRef();

  const handleChange = () => {
    let searchResult;
    if (input.length) {
        searchResult = Users.filter(
          (user) => user.name.includes(input) || user.email.includes(input)
        ).filter(user=> !visitedUsers[user.id])
        console.log({searchResult});
      setSearchedUsers(searchResult);
    }
  };

  // setting active chips
  const handleKeyUp = (e) => {
    if(input.length===1) setActiveChip(-2);

    else if(activeChip!==-1 && activeChip!==-2){
        let temp = selectedUsers.pop();
        setSearchedUsers(ps=>[...ps,temp]);
        setActiveChip(-1);
        setVisitedUsers(ps=>({...ps,[temp.id]:0}))
        setSelectedUsers(selectedUsers);
    }

    else if(!input.length && e.key === 'Backspace'){
        if(activeChip===-2) setActiveChip(ps=>ps+1);
        if(activeChip===-1)
        setActiveChip(selectedUsers.length-1);
    }

    else if(!input.length) setActiveChip(-1)
  }

//   console.log({selectedUsers,searchedUsers,currentSearchResult,visitedUsers});
  const addChip = (id) => {
    setSelectedUsers((ps) => [...ps, searchedUsers[id]]);
    let filteredSearch = searchedUsers.filter((s, i) => i !== id);
    setSearchedUsers(filteredSearch);
    setVisitedUsers(ps=> ({...ps,[searchedUsers[id].id]:1}))
    setInput('')
    setActiveChip(-1)
    inputRef.current.focus();
  };

  const deleteChip = (idx) => {
    const updatedChips = selectedUsers.filter((s,i)=>i!==idx);
    setSelectedUsers(updatedChips);
    setSearchedUsers((ps)=>[...ps,selectedUsers[idx]])
    setVisitedUsers(ps=> ({...ps,[selectedUsers[idx].id]:0}))
  }

  
  useEffect(() => {
    handleChange();
  }, [input]);

  return (
    <>
      {selectedUsers.length>0 && selectedUsers.map((u, i) => (
        <Chip key={i} user={u} idx={i} deleteChip={deleteChip} className={activeChip===i ? 'border-2 border-blue-400' : ''}/>
      ))}

      <div className="flex-col justify-center flex-1 flex-wrap">
        <input
          type="text"
          value={input || ''}
          ref={inputRef}
          onChange={(e) => setInput(e.target.value)}
          onKeyUp={handleKeyUp}
          className="outline-none py-1.5 px-2 text-gray-900 placeholder:text-gray-500 sm:text-sm min-w-max w-full"
          placeholder="search users"
        />
        {searchedUsers.length > 0 && input.length > 0 && (
          <div>
            <List userList={searchedUsers} addChip={addChip} />
          </div>
        )}
      </div>
    </>
  );
};

export default Input;
