import { useRef, useState, useEffect } from "react";
import { usePedalChain } from "./usePedalChain";
import { PingPongDelay, Signal } from "tone";

/**
 * Docs: https://tonejs.github.io/docs/14.7.77/PingPongDelay
 */
export const useDelay = () => {
  const { add } = usePedalChain();
  const [delayTime, setDelayTime] = useState(0);
  const [feedback, setFeedbackAmount] = useState(0);
  const [mixAmount, setMixAmount] = useState(0);
  const ref = useRef<PingPongDelay>();

  useEffect(() => {
    if (!ref.current) {
      const signal = new Signal(0);
      ref.current = new PingPongDelay();
      ref.current.connect(signal);
      ref.current.wet.set({ value: mixAmount });
      ref.current.delayTime.set({ value: delayTime });
      ref.current.feedback.set({ value: feedback });
      add(ref.current);
    }
  }, []);

  const setDelay = (value: number) => {
    setDelayTime(value / 100);
    ref.current?.delayTime.set({ value: value / 100 });
  };

  const setFeedback = (value: number) => {
    setFeedbackAmount(value / 100);
    ref.current?.feedback.set({ value: value / 100 });
  };

  const setMix = (value: number) => {
    setMixAmount(value / 100);
    ref.current?.wet.set({ value: value / 100 });
  };

  const activate = () => {
    ref.current?.wet.rampTo(mixAmount, 0.6, 0);
  };

  const bypass = () => {
    ref.current?.wet.set({ value: 0 });
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
