import Itemcopy from "./Itemcopy";
const Todoitems = ({ todoitems, ondeleteclick }) => {
  return (
    <div className="item-cont">
      {todoitems.map((item, index) => (
        <Itemcopy
          key={index}
          todoname={item.name}
          tododate={item.date}
          ondeleteclick={ondeleteclick}
        />
      ))}
    </div>
  );
};

export default Todoitems;
