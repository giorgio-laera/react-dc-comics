import style from "./Main.module.css";
import comics from "../comics";

function Main() {
    return (
        <main className={style.main}>
            <div className="boxed ">
                <div id={style.jumbotron}>
                    <img id={style.ImgJumbo} src="/jumbotron.jpg" alt="" />
                </div>
                <div id={style.mainFooter}>
                    {/* <div className={style.series}> CURRENT SERIES</div> */}
                    <div className={`d-flex ${style.cardWrapper}`}>
                    {
                        comics.map(object => {
                            if(object.id ===1 || object.id ===12 ){}
                            return  <div className={style.card}>
                                <div className={style.containerImg}>
                                    <img className={style.imgCard} src= {object.thumb} alt="" />
                                </div>
                            </div>

                        })}
                </div>
                </div>

            </div>
            <div className={style.info}>
                <div id={style.containerCard} className="boxed d-flex">
                    <div className={`d-flex  ${style.marcketItem}`}><span><img className="img-marcket" src="/buy-comics-digital-comics.png" alt="DIGITAL COMICS" /></span>
                        <p className="text-marcket">DIGITAL COMICS</p>
                    </div>
                    <div className={`d-flex  ${style.marcketItem}`}>
                        <span><img className="img-marcket" src="/buy-comics-merchandise.png" alt="DIGITAL COMICS" /></span>
                        <p className="text-marcket">DC MERCHANDISE</p>
                    </div>
                    <div className={`d-flex  ${style.marcketItem}`}>
                        <span><img className="img-marcket" src="/buy-comics-subscriptions.png" alt="DIGITAL COMICS" /></span>
                        <p className="text-marcket">SUBSCRITION</p>
                    </div>
                    <div className={`d-flex  ${style.marcketItem}`}>
                        <span><img className="img-marcket" src="/buy-comics-shop-locator.png" alt="DIGITAL COMICS" /></span>
                        <p className="text-marcket">COMIC SHOP LOCATOR</p>
                    </div>
                    <div className={`d-flex  ${style.marcketItem}`}>
                        <span><img className="img-marcket" src="/buy-dc-power-visa.svg" alt="DIGITAL COMICS" /></span>
                        <p className="text-marcket">DC POWER VISA</p>
                    </div>
                </div>
            </div>

        </main>
    );
}
export default Main;