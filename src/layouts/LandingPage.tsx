import { GiGuitarHead } from "react-icons/gi";
import { RiMic2Line } from "react-icons/ri";
import { RiMusicLine } from "react-icons/ri";
import "./LandingPage.css";

export const LandingPage = () => {
  return (
    <section className='landing-page'>
      <div className='intro__content'>
        <div className='intro-title-container'>
          <h1 className='intro__title'>Smash the pedal, not your wallet</h1>
          <p className='intro__subtitle'>
            Select one of our audio samples, or plug in your instrument and
            play. It's that simple!
          </p>
        </div>
        <button className='intro__button'>Get Started</button>
      </div>

      <div className='stepper-container'>
        <div className='stepper'>
          <RiMic2Line className='stepper__circle' />
          <p className='stepper__text'>Allow Access</p>
        </div>
        <div className='line' />
        <div className='stepper'>
          <GiGuitarHead className='stepper__circle' />
          <p className='stepper__text'>Select Input</p>
        </div>
        <div className='line' />
        <div className='stepper'>
          <RiMusicLine className='stepper__circle' />
          <p className='stepper__text'>Get it!</p>
        </div>
      </div>
    </section>
  );
};
