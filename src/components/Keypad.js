// Code Keypad Component Here
import React from "react"; 

function Keypad() {
	function changes() {
		console.log("Entering password...")
	}
	return (
		<div>
		<input
		type = "password" 
		onChange = {changes} 
		/>
	</div>	
	)

}

export default Keypad
