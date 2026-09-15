import { useState } from "react";
import SubmittedFormDisplay from "./SubmittedFormDisplay.jsx";

export default function MyForm() {
  const [submissions, setSubmissions] = useState([]);

  function handleSubmit(e) {
	// Prevent the browser from default form behavior, check the MDN docs
    e.preventDefault();

    const formData = new FormData(e.target);
    const formJson = Object.fromEntries(formData.entries());

	// Alternatively to passing a new state value, we can pass
	// a function that accepts the previous state and returns the new state
    setSubmissions((previous) => [...previous, formJson]);
  }

  return (
    <div id="formArea">
      <form method="post" onSubmit={handleSubmit}>
        <label>
          Text input: <input name="myInput" defaultValue="Some initial value" />
        </label>

        <hr />

        <label>
          Checkbox:
          <input type="checkbox" name="myCheckbox" defaultChecked value="checked" />
        </label>

        <hr />

        <p>
          Radio buttons:
          <label>
            <input type="radio" name="myRadio" value="option1" /> Option 1
          </label>
          <label>
            <input type="radio" name="myRadio" value="option2" defaultChecked />
            Option 2
          </label>
          <label>
            <input type="radio" name="myRadio" value="option3" /> Option 3
          </label>
        </p>

        <hr />

        <button type="reset">Reset form</button>
        <button type="submit">Submit form</button>
      </form>

      {submissions.map((submission, index) => (
        <SubmittedFormDisplay
          key={index}
          myInput={submission.myInput}
          myCheckbox={submission.myCheckbox}
          myRadio={submission.myRadio}
        />
      ))}
    </div>
  );
}