import data from "../data";
import Telement from "./Telement";

const Tlist = () => {
  const tList = data.map((d) => {
    return <Telement key={d.id} d={d} />;
  });
  return <div>{tList}</div>;
};
export default Tlist;
