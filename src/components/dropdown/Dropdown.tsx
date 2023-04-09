import { useEffect, useState, useRef } from "react";
import { useSource } from "../../hooks";
import "./dropdown.css";

export const Dropdown = () => {
  const { init, mediaSources, hasPermission, getPermission } = useSource();
  const [currentDevice, setCurrentDevice] = useState<string>("Select Device");
  const dropRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!hasPermission) getPermission();
  }, []);

  const options = mediaSources.map((source) => ({
    label: source.name,
    value: source.id,
  }));

  const handleClick = (e: React.FormEvent<HTMLAnchorElement>) => {
    const target = e.target as HTMLAnchorElement;
    const selectedInput = mediaSources.find((input) => input.id === target.id);

    if (selectedInput) {
      dropRef!.current!.checked = false;
      setCurrentDevice(selectedInput.name);
      init(selectedInput);
    }
  };

  return (
    <div className='device-options'>
      <input
        ref={dropRef}
        className='dropdown'
        type='checkbox'
        id='dropdown'
        name='dropdown'
      />
      <label
        id='current-device'
        className='for-dropdown device'
        htmlFor='dropdown'>
        {currentDevice}
      </label>
      <div id='section-dropdown' className='section-dropdown'>
        {options.map((option) => (
          <a
            id={option.value}
            key={option.value}
            href='#'
            className='option'
            onClick={handleClick}>
            {option.label}
          </a>
        ))}
      </div>
    </div>
  );
};
