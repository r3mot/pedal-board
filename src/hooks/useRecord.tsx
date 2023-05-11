import { useSource } from "./useSource";
export const useRecord = () => {
  const { recorder } = useSource();

  const startRecording = () => {
    recorder.start();
  };

  const stopRecording = async () => {
    setTimeout(async () => {
      const recording = new Blob([await recorder.stop()], {
        type: "audio/mpeg-3",
      });
      const url = URL.createObjectURL(recording);
      const anchor = document.createElement("a");
      anchor.download = "pedal.mp3";
      anchor.href = url;
      anchor.click();
    }, 5000);
  };

  return { startRecording, stopRecording };
};
