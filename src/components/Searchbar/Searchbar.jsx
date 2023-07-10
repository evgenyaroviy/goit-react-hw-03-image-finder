import { Component } from "react";
import { requestApi } from "../api"
import css from "./searchbar.module.css"

export class Searchbar extends Component {
    state = {
        q: [],
    }

    handleSubmit = async e => {
        e.preventDefault();
        const searchQuery = e.target.elements[1].value;
        const data = await requestApi(searchQuery);
        const images = data.hits
        // console.log(images);
        this.props.searchQuery(images);
        this.setState({ q: images })
    }

    render() {
        return (
            <header className={css.searchbar}>
                <form className={css.form} onSubmit={this.handleSubmit}>
                    <button type="submit" className={css.button}>
                        <span className={css.buttonLabel}></span>
                    </button>

                    <input
                        className={css.input}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    // value={this.state.q}
                    // onSubmit={this.handleSubmit}
                    />
                </form>
            </header>
        );
    }
}
