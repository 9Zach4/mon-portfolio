
import { dataportfolio } from '../../content_options';


export function getPortfolio() {
    const gallery = dataportfolio;
    return gallery;
}

export function filtredGallery(projectType) { 
    let filtredGallery = getPortfolio().filter( item => item.type === projectType);
    return  filtredGallery;
}

