import React from "react";
import ItemCount from "../ItemCount/ItemCount";

function ItemListContainer(props) {
	return (
		<>
			<div className="display-1--description">{props.text}</div>
			<ItemCount onHandInventory="10" defaultQty="1" />
		</>
	);
}

export default ItemListContainer;
