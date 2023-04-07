import { useDelay } from "../../hooks";
import { Pedal } from "./Pedal";

export const DelayPedal = () => {
  const { delay } = useDelay();

  return (
    <Pedal
      title='Delay'
      knobs={[
        { min: 0, max: 100, initial: 0, change: delay.setMix, name: "Mix" },
        { min: 0, max: 100, initial: 0, change: delay.setDelay, name: "Time" },
        {
          min: 0,
          max: 100,
          initial: 0,
          change: delay.setFeedback,
          name: "Feed",
        },
      ]}
      activate={delay.activate}
      bypass={delay.bypass}
    />
  );
};
