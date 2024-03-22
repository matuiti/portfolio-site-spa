const StartStopButton = ({ isRunning, handleStartStop }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleStartStop}
    >
      {isRunning ? 'Stop' : 'Start'}
    </button>
  );
};

export default StartStopButton;
