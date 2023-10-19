import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="flex flex-col items-center mt-5">
      <div className="spinner"></div>
      Loading...
    </div>
  );
};

export default Spinner;
