import React from "react";

const ListItem = ({user,idx,addChip}) => {
  return (
    <li className="flex justify-between gap-x-6 py-2 border-b-2 border-neutral-300" onClick={()=>addChip(idx)}>
      <div className="flex min-w-0 gap-x-4 px-2">
        <img
          className="h-12 w-12 flex-none rounded-full bg-gray-50"
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <div className="min-w-0 flex-auto">
          <p className="text-sm font-semibold  text-gray-900">
            {user && user.name}
          </p>
          <p className="mt-1 truncate text-xs  text-gray-500">
            {/* john.alexander@example.com */}
            {user && user.email}
          </p>
        </div>
      </div>
    </li>
  );
};

export default ListItem;
