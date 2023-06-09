import "./employers-list-item.css";

export default function EmployersListItem(props) {
  const { name, salary, increase, rise, onToggleProp } = props;

  let classNames = "list-group-item d-flex justify-content-between";
  classNames += increase ? " increase" : "";
  classNames += rise ? " like" : "";

  return (
    <li className={classNames}>
      <span
        onClick={onToggleProp}
        data-toggle="rise"
        className="list-group-item-label"
      >
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + " $"}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          onClick={onToggleProp}
          data-toggle="increase"
          className="btn-cookie btn-sm "
        >
          <i className="fas fa-cookie"></i>
        </button>
        <button
          onClick={props.onDelete}
          type="button"
          className="btn-trash btn-sm "
        >
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
}
