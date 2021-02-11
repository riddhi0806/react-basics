import React from "react";
import ProductDisplay from "./ProductDisplay";
import SpringBootServer from "../API/SpringBootServer";

class App extends React.Component {
	state = {
		data: [
			{ id: 1, name: "Riddhi" },
			{ id: 2, name: "Rakshit" },
			{ id: 3, name: "Parv" },
			{ id: 4, name: "Nakul" },
			{ id: 5, name: "Rashmi" },
		],
		products: [],
	};

	componentDidMount() {
		SpringBootServer.get("/products").then((res) => {
			console.log(res);
			this.setState({ products: res.data });
		});
	}

	render() {
		return (
			<div className="ui raised very padded text container segment">
				<h1>Rakuten Store</h1>
				{this.state.products.map((product) => {
					return <ProductDisplay key={product.id} prod={product} />;
				})}
			</div>
		);
	}
}

export default App;
