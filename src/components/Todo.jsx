import Todo1 from "./Todo1";

const Todo = ({items, deletItem}) => {
  
  return (
    <div>
   
        {items.map((item, index)=>(
        <Todo1 name={item.name}  date={item.date}  key={index} deletItem={deletItem} />
        ))}
    
    </div>
  );
};

export default Todo;
