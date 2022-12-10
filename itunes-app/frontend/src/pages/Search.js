//search page for itunes store
import React from 'react';
import ReactDOM from 'react-dom';
import ItemsList from './ItemsList';
import { itunesApiRequest, mediaTypes } from './Utils';
import styled, { createGlobalStyle } from 'styled-components';
import Palette from './Palette';
import SearchBar from './SearchBar';

//css
const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    width: 100%;
		margin: 0;
		background-color: ${Palette('Grey', 800)};
  }
`;

const Content = styled.div`
	width: 100%;
	height: 100%;
`;

//creating the search bar
class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = { searchResults: [] };
		this.updateSearch = this.updateSearch.bind(this);
	}

	async updateSearch(text, media) {
		const response = await itunesApiRequest(text, media);
		this.setState({ searchResults: response.results });
	}

  //returning the search bar and the item list once you search for something
	render() {
		const { searchResults } = this.state;
		return (
			<>
				<GlobalStyle />
				<Content>
					<SearchBar mediaTypes={mediaTypes} startSearch={this.updateSearch} />
					<ItemsList items={searchResults} />
				</Content>
			</>
		);
	}
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Search />, rootElement);

export default Search;