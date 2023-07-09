import avatar from "../../../public/profile.JPG";

function Avatar({ onClick }) {
  return (
    <div onClick={onClick} className="">
      <div className="relative cursor-pointer">
        <img className="h-10  w-10 rounded-full" src={avatar} alt="avatar" />
        <span className="absolute bottom-0 right-0  h-[10px] w-[10px] rounded-full border-2 border-white bg-green-400"></span>
      </div>
    </div>
  );
}

export default Avatar;
