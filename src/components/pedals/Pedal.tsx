import { useRef } from "react";
import { Knob } from "../knob";
import { KnobType } from "../../types/type";
import "./pedal.css";

interface PedalProps {
  title: string;
  knobs: {
    min: number;
    max: number;
    initial: number;
    change: KnobType;
    name: string;
  }[];
  activate: () => void;
  bypass: () => void;
}

export const Pedal = ({ title, knobs, activate, bypass }: PedalProps) => {
  const activeRef = useRef<HTMLInputElement>(null);
  const lightRef = useRef<HTMLDivElement>(null);

  const handleChange = () => {
    const active = activeRef.current?.checked;
    if (active) {
      activate();
      lightRef.current?.classList.add("on");
    } else {
      bypass();
      lightRef.current?.classList.remove("on");
    }
  };

  const handleDown = (e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
    const target = e.target as HTMLLabelElement;
    e.preventDefault();
    target.classList.add("animated");
  };

  const handleUp = (e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
    const target = e.target as HTMLLabelElement;
    e.preventDefault();
    target.classList.remove("animated");
  };

  return (
    <div className={`pedal ${title.toLocaleLowerCase()}-pedal`}>
      <div className='pedal-indicator'>
        <div ref={lightRef} className='pedal-indicator__light'></div>
      </div>
      <div className='pedal-controls-wrapper'>
        {knobs.map((knob, idx) => (
          <Knob
            key={idx}
            min={knob.min}
            max={knob.max}
            initial={knob.initial}
            change={knob.change}
            name={knob.name}
          />
        ))}
      </div>
      <div className='pedal-stomp'>
        <div className='pedal-stomp__title'>
          <h2>{title}</h2>
        </div>
        <label
          className='pedal-stomp__button'
          onMouseDown={(e) => handleDown(e)}
          onMouseUp={(e) => handleUp(e)}>
          <input
            ref={activeRef}
            id='active-toggle'
            type='checkbox'
            className='hidden-checkbox'
            onChange={handleChange}
          />
        </label>
      </div>
    </div>
  );
};
