import './style.css';

export default function Loader() {
  return (
    <>
      <div className="spinner">
        <div className="lds-ripple"><div></div><div></div></div>
      </div>
    </>
  )
}