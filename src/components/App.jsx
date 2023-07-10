import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";



export class App extends Component {
  state = {
    list: [],
    page: 1,
    query: '',
    isLoading: false,
    loadMore: false,
    modalData: null,
    isModalVisible: false,
  };

  searchQuery = (query) => {
    console.log(query);
    this.setState({ list: [...query] });
  }

  render() {
    const { list } = this.state;
    return (<div>
      <Searchbar searchQuery={this.searchQuery} />
      <ImageGallery gallery={list} />
    </div >
    );
  }
};
