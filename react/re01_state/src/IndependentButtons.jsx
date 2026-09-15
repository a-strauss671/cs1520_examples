import IndependentButton from "./IndependentButton.jsx";

export default function IndependentButtons() {
  return (
	<div className="buttonDivs everyElem">
	  <h1>Counters that update separately</h1>
	  <IndependentButton />
	  <IndependentButton />
	</div>
  );
}