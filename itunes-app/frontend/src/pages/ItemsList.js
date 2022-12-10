import React from 'react';
import Item from './Item';
import styled from 'styled-components';

//list css
const Liste = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex: 0 1 auto;
	padding-top: 80px;
`;

//creating the list of items from array returned from itunes
const ItemsList = ({ items }) => {
	const itemsArray = items.map((item, index) => <Item key={index} {...item} />);
	return <Liste>{itemsArray}</Liste>;
};

export default ItemsList;