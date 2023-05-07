import EmployersListItem from "../employers-list-item/employers-list-item";
import "./employers-list.css";

export default function EmployersList({ data, onDelete, onToggleProp }) {
  let elements = data.map((item) => {
    const { id, ...itemProps } = item;
    // return <EmployersListItem name={item.name} salary={item.salary} />;
    return (
      <EmployersListItem
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
        onToggleProp={(e) =>
          onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))
        }
      />
    );
  });

  if (!elements.length) {
    elements = (
      <h3 align="center" className="notifying-message">
        There are no workers in the list
      </h3>
    );
  }
  return <ul className="app-list list-group">{elements}</ul>;
}
