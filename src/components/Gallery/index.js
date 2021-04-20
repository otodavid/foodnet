import { data } from './data'; 
import {
    GalleryContent,
    GallerySection, 
} from './Gallery.style.js';

const Gallery = () => {
    return ( 
        <GallerySection>
            { data.map((item, index) => (
                <GalleryContent key={index}>
                    <img src={item.picture} alt={item.desc} loading="lazy" />
                </GalleryContent>               
            )) }
        </GallerySection>
     );
}
 
export default Gallery;