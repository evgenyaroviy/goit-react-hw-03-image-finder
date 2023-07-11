import PropTypes from "prop-types";
import { Component } from "react";
import css from "./modal.module.css";

export class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.closeModal)
        window.addEventListener('click', this.closeModal)
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.closeModal)
        window.removeEventListener('click', this.closeModal)
    }
    
    closeModal = e => {
        console.log(e)
        console.log(e.target);
        console.log(e.currentTarget);
        console.log();
        console.log(e.target === e.currentTarget );
        if (e.target === e.currentTarget || e.code === 'Escape') {
            this.props.modalClose();
        }
    }

    render() {
        const { modalData: { largeImage, tags }} = this.props
        return (
            <div className={css.overlay} >
                <div className={css.modal}>
                    <img src={largeImage} alt={tags} />
                </div>
            </div>
        )
    }
}

Modal.propTypes = {
  modalData: PropTypes.shape({
    largeImage: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  modalClose: PropTypes.func.isRequired,
};