import assets from "../assets/index";
import Card from "./Card";
interface Data {
  image: string;
  tag: string;
  title: string;
  description: string;
}
const Cards = ({ myState }: { myState: Function }) => {
  const data: Data[] = [
    {
      image: assets.fullStack,
      tag: "Web Application",
      title: "  Full Stuck Application Development Course",
      description:
        "Create powerful web apps, push the boundaries of innovation, and achieve exvellence",
    },
    {
      image: assets.fullStack,
      tag: "Web Application",
      title: "  Full Stuck Application Development Course",
      description:
        "Create powerful web apps, push the boundaries of innovation, and achieve exvellence",
    },
    {
      image: assets.fullStack,
      tag: "Web Application",
      title: "  Full Stuck Application Development Course",
      description:
        "Create powerful web apps, push the boundaries of innovation, and achieve exvellence",
    },
  ];
  return (
    <>
      {data.map((cur, index) => (
        <Card
          key={index}
          data={{ ...cur, id: index.toString() }}
          myState={myState}
        />
      ))}
    </>
  );
};

export default Cards;
