

export default function SubmittedFormDisplay(props) {
	return (
		<p>
			Your input was: {props.myInput}, {props.myCheckbox}, {props.myRadio}
		</p>
	);
}