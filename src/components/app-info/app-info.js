import "./app-info.css";

const AppInfo = ({ amount, increase, company = "Apple" }) => {
  return (
    <div className="app-info">
      <h1>The number of workers in company : {company}</h1>
      <h2>The employees getting increase : {increase}</h2>
      <h2>Total amount of workers : {amount} </h2>
    </div>
  );
};

export default AppInfo;
