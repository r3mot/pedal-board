import { useRef, useState } from "react";
import { usePedalChain } from "./usePedalChain";
import { PingPongDelay } from "tone";
import { Source } from "../types";

/**
 * Docs: https://tonejs.github.io/docs/14.7.77/PingPongDelay
 */
export const useDelay = () => {
  const { add, remove } = usePedalChain();
  const [delayTime, setDelayTime] = useState(0);
  const [feedback, setFeedbackAmount] = useState(0);
  const [mixAmount, setMixAmount] = useState(0);
  const ref = useRef<Source<PingPongDelay>>();

  const setDelay = (value: number) => {
    setDelayTime(value / 100);
    ref.current?.effect.delayTime.set({ value: value / 100 });
  };

  const setFeedback = (value: number) => {
    setFeedbackAmount(value / 100);
    ref.current?.effect.feedback.set({ value: value / 100 });
  };

  const setMix = (value: number) => {
    setMixAmount(value / 100);
    ref.current?.effect.wet.set({ value: value / 100 });
  };

  const activate = () => {
    ref.current = new Source({
      id: 1,
      effect: new PingPongDelay(),
    });
    ref.current.effect.wet.set({ value: mixAmount });
    ref.current.effect.delayTime.set({ value: delayTime });
    ref.current.effect.feedback.set({ value: feedback });
    add(ref.current);
  };

  const bypass = () => {
    ref.current?.effect.dispose();
    remove(ref.current);
  };

  return {
    delay: {
      delayTime,
      feedback,
      mixAmount,
      setDelay,
      setFeedback,
      setMix,
      bypass,
      activate,
    },
  };
};
