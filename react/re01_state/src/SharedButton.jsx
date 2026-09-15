
// Notice that the state and click handler are passed to the Component
// from its parent component
export default function SharedButton(props) {
	return (
		<button onClick={props.onClick}>
			Clicked {props.count} times
		</button>
	)
}