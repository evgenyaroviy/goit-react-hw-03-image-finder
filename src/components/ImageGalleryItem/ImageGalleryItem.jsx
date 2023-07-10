import css from "./imageGalleryItem.module.css"

export const ImageGalleryItem = ({ gallery }) => {
    const items = gallery.gallery;
    return items.map((item) => (
        < li key={item.id} className={css.galleryItem} >
            <img src={item.webformatURL} alt={item.tags} className={css.galleryItemImage} />
        </li >
    ));
}
