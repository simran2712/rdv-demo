import "./component.css";
import clock from "../../assets/clock.png";
function tasks() {
  return (
    <div class="list-i">
      <p class="col-9">This is dummy data for scrollable list for your task</p>
      <div class="timer col-3">
        <img class="clock" src={clock} alt=""></img>
        <div class="tim-con">
          <p>
            11:59 PM
            <br />
            18/02/20022
          </p>
        </div>
      </div>
    </div>
  );
}

export default tasks;
