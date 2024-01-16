import React from "react";

const Chip = ({user,idx,deleteChip,className}) => {
  return (
    <div className={`w-max rounded-full bg-gray-200 m-1 flex justify-center items-center ${className}`}>
      <img src="https://i.pravatar.cc/40" className="rounded-full" alt="" />
      <span className="px-2 text-gray-700 font-semibold">{user && user.name}</span>
      <span className="pr-2 cursor-pointer" onClick={()=>deleteChip(idx)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          width="12"
          viewBox="0 0 384 512"
        >
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
        </svg>
      </span>
    </div>
  );
};

export default Chip;
