function Card(props) {
	return (
		<div class="bg-white card p-4 text-center text-black rounded-md shadow-md">
			{props.children}
		</div>
	)
}

export default Card;