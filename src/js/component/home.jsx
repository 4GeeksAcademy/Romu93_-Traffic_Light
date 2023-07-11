import React from "react";
import { Trafficlight } from "./Trafficlight";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Trafficlight/>			
		</div>
	);
};

export default Home;
