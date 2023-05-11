import { useRecord } from "../../hooks";

export const Record = () => {
  const { startRecording, stopRecording } = useRecord();
  return (
    <div>
      <button onClick={startRecording}>record</button>
      <button onClick={stopRecording}>stop recording</button>
    </div>
  );
};
