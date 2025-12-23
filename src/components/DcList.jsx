import style from "./DcList.module.css";
import comics from "../data/comics.js";
import Card from "./Card.jsx";

function dcList() {
    return <div className={`d-flex boxed ${style.cardWrapper}`}>
        {comics.map(comic => {
           
            return <Card pingo={comic.id} image={comic.thumb} nome={comic.series}/>


        })}
    </div>
}
export default dcList;