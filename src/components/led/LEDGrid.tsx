import { gridMatrix } from "./gridMatrix";
import "./grid.css";

export const LEDGrid = () => {
  return (
    <div className='led-grid'>
      {gridMatrix.map((row, i) => {
        return (
          <div key={i} className='row'>
            {row.map((col, j) => {
              return (
                <div key={j} className='col'>
                  <div className={`led ${col === "1" ? "active" : ""}`}></div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
