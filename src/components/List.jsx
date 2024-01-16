import React from "react";
import ListItem from "./ListItem";

const List = ({userList,addChip}) => {
  return (
    <div className="absolute mt-3">
     <ul className="bg-white rounded-md max-h-[360px] overflow-y-scroll">
       {userList.map((u,i)=><ListItem key={i} user={u} idx={i} addChip={addChip}/>)}
     </ul>
    </div>
  );
};

export default List;
