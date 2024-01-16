import React, { useEffect, useRef, useState } from "react";
import List from "./List";
import Chip from "./Chip";
import Users from "../data.json";

const Input = () => {
  const [input, setInput] = useState("");
  const [searchedUsers, setSearchedUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [currentSearchResult,setCurrentSearchResult] = useState([]);
  const [activeChip, setActiveChip] = useState(-1);
  const inputRef = useRef();

  const handleChange = () => {
    let searchResult;
    if (input.length) {
      if (!searchedUsers.length) {
        searchResult = Users.filter(
          (user) => user.name.includes(input) || user.email.includes(input)
        );
      } else {
        searchResult = searchedUsers.filter(
          (user) => user.name.includes(input) || user.email.includes(input)
        );
      }
      setCurrentSearchResult(searchResult);
    }
  };

  // setting active chips
  const handleKeyUp = (e) => {
    if(input.length===1) setActiveChip(-2);

    else if(activeChip!==-1 && activeChip!==-2){
        let temp = selectedUsers.pop();
        setSearchedUsers(ps=>[...ps,temp]);
        setActiveChip(-1);
        setSelectedUsers(selectedUsers);
    }

    else if(!input.length && e.key === 'Backspace'){
        if(activeChip===-2) setActiveChip(ps=>ps+1);
        if(activeChip===-1)
        setActiveChip(selectedUsers.length-1);
    }

    else if(!input.length) setActiveChip(-1)
  }


  const addChip = (id) => {
    setSelectedUsers((ps) => [...ps, currentSearchResult[id]]);
    let filteredSearch = currentSearchResult.filter((s, i) => i !== id);
    setSearchedUsers(filteredSearch);
    setInput('')
    setActiveChip(-1)
    inputRef.current.focus();
  };

  const deleteChip = (idx) => {
    const updatedChips = selectedUsers.filter((s,i)=>i!==idx);
    setSelectedUsers(updatedChips);
    setSearchedUsers((ps)=>[...ps,selectedUsers[idx]])
  }

  
  useEffect(() => {
    handleChange();
  }, [input,]);

  return (
    <>
      {selectedUsers.length>0 && selectedUsers.map((u, i) => (
        <Chip key={i} user={u} idx={i} deleteChip={deleteChip} className={activeChip===i ? 'border-2 border-blue-400' : ''}/>
      ))}

      <div className="flex-col justify-center flex-1">
        <input
          type="text"
          value={input || ''}
          ref={inputRef}
          onChange={(e) => setInput(e.target.value)}
          onKeyUp={handleKeyUp}
          className="outline-none py-1.5 px-2 text-gray-900 placeholder:text-gray-400 sm:text-sm w-full"
          placeholder="search here"
        />
        {currentSearchResult.length > 0 && input.length > 0 && (
          <div>
            <List userList={currentSearchResult} addChip={addChip} />
          </div>
        )}
      </div>
    </>
  );
};

export default Input;
