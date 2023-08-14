import react, { useEffect } from 'react';
import { dataportfolio } from '../../content_options';
import { getPortfolio, filtredGallery } from '../services/services';


export default function Filter() {
    const [filtredGallery, setFiltredGallery] = useState(null);
    useEffect(() => {
        setFiltredGallery(getPortfolio());

},[]);

function handleGallery(e) {
    let workType = e.target.value;
    workType  !=="all" ? setFiltredGallery(filtredGallery (workType)) : setFiltredGallery(getPortfolio());

}

}
