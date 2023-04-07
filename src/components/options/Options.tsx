import { useEffect, useState } from "react";
import { useSource } from "../../hooks";
import "./options.css";

export const Options = () => {
  const { init, mediaSources, hasPermission, getPermission } = useSource();
  const [changed, setChanged] = useState(false);
  useEffect(() => {
    if (!hasPermission) getPermission();
  }, []);

  const options = mediaSources.map((source) => ({
    label: source.name,
    value: source.id,
  }));

  const handleChange = (e: React.FormEvent<HTMLSelectElement>) => {
    setChanged(!changed);
    const target = e.target as HTMLSelectElement;
    const selectedInput = mediaSources.find(
      (input) => input.id === target.value
    );

    if (selectedInput) {
      init(selectedInput);
    }
  };

  useEffect(() => {}, [changed]);

  return (
    <select onChange={handleChange}>
      <option value=''>Select Input</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
