import { useContext } from "react";
import { Statistic } from "./Choice";
import './Statistics.css'
export default function Statistics() {
  const statistic = useContext(Statistic)
  return (
    <>     
    <div className="statistic__area">
        <h3>Actions:{statistic.stat} </h3>
    </div>
    </>
  );
}