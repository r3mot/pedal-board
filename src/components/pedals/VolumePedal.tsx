import { useVolume } from "../../hooks";
import { Pedal } from "./Pedal";

export const VolumePedal = () => {
  const { volume } = useVolume();

  return (
    <Pedal
      title="Volume"
      knobs={[
        {
          min: -25,
          max: 5,
          initial: -10,
          change: volume.setVolume,
          name: "Vol",
        },
      ]}
      activate={volume.activate}
      bypass={volume.bypass}
    />
  );
};
