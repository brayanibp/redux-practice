import './style.css';

const FatalError = (props) => (
  <div className="ErrorContainer">
    <h2>Oops!</h2>
    <p>An error has ocurred</p>
    <h3 style={{ color: "red" }}>{props.message}</h3>
  </div>
);

export default FatalError;