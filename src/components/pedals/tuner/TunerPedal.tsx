import { useRef } from "react";
import { LEDGrid } from "../../led";
import "./tuner.css";

export const TunerPedal = () => {
  const activeRef = useRef<HTMLInputElement>(null);

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
    <div className='tuner-pedal'>
      <div className='pedal-display'>
        <div className='screen'>
          <p>Coming Soon</p>
          <LEDGrid />
        </div>
        <div className='in-out'>
          <h3>in</h3>
          <h3>out</h3>
        </div>
      </div>
      <div className='buffer'>
        <div className='pedal-title'>
          <h2>tuner</h2>
        </div>
      </div>
      <div className='pedal-lower'>
        <div className='stomp-outer'>
          <label
            className='pedal-btn'
            onMouseDown={(e) => handleDown(e)}
            onMouseUp={(e) => handleUp(e)}>
            <input
              ref={activeRef}
              id='active-toggle'
              type='checkbox'
              className='hidden-checkbox'
            />
          </label>
        </div>
        <div className='lower-label'>
          <h3>
            <span>r3mot</span> electronic
          </h3>
        </div>
      </div>
    </div>
  );
};
