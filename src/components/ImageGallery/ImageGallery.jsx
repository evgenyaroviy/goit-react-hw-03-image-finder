import css from "./imageGallery.module.css"

import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = (gallery) => {

    return (
        <ul className={css.gallery}>
            <ImageGalleryItem gallery={gallery} />
        </ul>
    )
} 