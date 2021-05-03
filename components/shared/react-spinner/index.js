import ClipLoader from "react-spinners/ClipLoader";

const Spinner = ({ color, loading, size }) => {
  return <ClipLoader color={color} loading={loading} size={size} />;
};

export default Spinner;
