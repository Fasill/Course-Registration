interface Data {
  image: string;
  tag: string;
  title: string;
  description: string;
  id: string;
}
const Card = ({ data, myState }: { data: Data; myState: Function }) => {
  return (
    <div className=" rounded-[1rem] overflow-clip w-[20rem] bg-white">
      <div className="flex flex-col w-[100%]">
        <img src={data.image} className="" />
        <div className=" w-[100%] p-[1rem] flex flex-col gap-[0.1rem]">
          <div className=" w-[100%] flex flex-col  gap-5">
            <p className="">{data.tag}</p>
            <h1 className="text-[1.5rem] font-bold">{data.title}</h1>
            <p>{data.description}</p>
          </div>
          <div
            className=" flex cursor-pointer"
            onClick={() => myState(data.id)}
          >
            <div className="  p-[1rem] rounded-[1rem] border border-[#0d49052c]">
              <p className="text-[#0d4905] text-[1.3rem]">Register Now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
