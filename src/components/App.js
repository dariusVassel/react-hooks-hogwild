import React, { useState } from "react";
import Nav from "./Nav";
import Tilegrid from "./Tilegrid"
import StatFilter from "./StatFilter"

import hogs from "../porkers_data";


function App() {
	const [showGreased, setShowGreased] = useState(false)
	const [sortBy, setSortBy] = useState("name");

	const visibleHogs = hogs
		.filter((hog) => (showGreased ? hog.greased : true))
		.sort((hog1, hog2) => {
			if (sortBy === "Weight") {
				return hog1.weight - hog2.weight;
			} else {
				return hog1.name.localeCompare(hog2.name);
			}
		});

	function handleChangeSortBy(event) {
		const red = event.target.value
		console.log(red)
		setSortBy(red)
	}

	function handleClick() {
		setShowGreased((showGreased) => !showGreased)
	}

	return (
		<div className="ui grid container App">
			<div className="sixteen wide column centered">
				<Nav />
			</div>
			<div className="sixteen wide column centered">
				<StatFilter handleClick={handleClick} onChangeSortBy={handleChangeSortBy} sortBy={sortBy} />
			</div>
			<div className="sixteen wide column centered">
				<Tilegrid hogs={visibleHogs} />
			</div>
		</div>
	);
}

export default App;
