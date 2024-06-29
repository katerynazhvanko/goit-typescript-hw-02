import { ProgressBar } from "react-loader-spinner";

const Loader: React.FC = () => {
  return (
    <ProgressBar
      visible={true}
      height="80"
      width="80"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass=""
      borderColor="#000080"
      barColor="#4fa94d"
    />
  );
};
export default Loader;
