import React from "react";
import ListItem from "./ListItem";

const List = ({userList,addChip}) => {
  return (
    <div className="absolute mt-3">
     <ul className="bg-white max-h-[360px] overflow-y-scroll shadow-md rounded-lg shadow-zinc-200	">
       {userList.map((u,i)=><ListItem key={i} user={u} idx={i} addChip={addChip}/>)}
     </ul>
    </div>
  );
};

export default List;
