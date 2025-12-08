import style from "./Main.module.css";

function Main() {
    return (
        <main className={style.main}>
            <div className="boxed d-flex">
                <h2>&rarr;Content goes here&larr;</h2>
            </div>
            <div className={style.info}>
                <div id={style.containerCard} className="boxed d-flex">
                    <div className="d-flex marcketItem">
                        <span><img className="img-marcket" src="/buy-comics-digital-comics.png" alt="DIGITAL COMICS" /></span>
                        <p className="text-marcket">DIGITAL COMICS</p>
                    </div>
                    <div className="d-flex marcketItem">
                        <span><img className="img-marcket" src="/buy-comics-merchandise.png" alt="DIGITAL COMICS" /></span>
                        <p className="text-marcket">DC MERCHANDISE</p>
                    </div>
                    <div className="d-flex  marcketItem">
                        <span><img className="img-marcket" src="/buy-comics-subscriptions.png" alt="DIGITAL COMICS" /></span>
                        <p className="text-marcket">SUBSCRITION</p>
                    </div>
                    <div className="d-flex  marcketItem">
                        <span><img className="img-marcket" src="/buy-comics-shop-locator.png" alt="DIGITAL COMICS" /></span>
                        <p className="text-marcket">COMIC SHOP LOCATOR</p>
                    </div>
                    <div className="d-flex  marcketItem">
                        <span><img className="img-marcket" src="/buy-dc-power-visa.svg" alt="DIGITAL COMICS" /></span>
                        <p className="text-marcket">DC POWER VISA</p>
                    </div>
                </div>
            </div>

        </main>
    );
}
export default Main;