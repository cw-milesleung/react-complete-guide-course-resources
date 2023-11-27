import "../index.css";
import { data } from "../util/investment.js";

const UserInput = ({ onSelectInvestment, userInput }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(e) =>
              onSelectInvestment(data.initialInvestment, e.target.value)
            }
          />
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(e) =>
              onSelectInvestment(data.annualInvestment, e.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN (%)</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(e) =>
              onSelectInvestment(data.expectedReturn, e.target.value)
            }
          />
        </p>
        <p>
          <label>DURATION</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(e) => onSelectInvestment(data.duration, e.target.value)}
          />
        </p>
      </div>
    </section>
  );
};
export default UserInput;
