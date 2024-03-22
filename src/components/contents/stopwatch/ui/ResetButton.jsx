const ResetButton = ({ handleReset }) => {
  return (
    <button
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
      onClick={handleReset}
    >
      Reset
    </button>
  );
};

export default ResetButton;
