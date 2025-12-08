import style from "./Footer.module.css";

function Footer() {
    return (
        <footer className={style.footer}>
            <div id={style.containerFooter} className="boxed d-flex ">
                <div id={style.containerLink} className="d-flex">
                    <div>
                        <div className={style.titlesFooter}>DC COMICS</div>
                        <div>
                            <a href="#">Characters</a>
                            <a href="#">Comics</a>
                            <a href="#">Movies</a>
                            <a href="#">TV</a>
                            <a href="#">Games</a>
                            <a href="#">Videos</a>
                            <a href="#">News</a>
                        </div>
                        <div className={style.titlesFooter}>SHOP</div>
                        <div>
                            <a href="#">Shop DC</a>
                            <a href="#">Shop DC Collectibles</a>

                        </div>
                    </div>
                    <div>
                        <div className={style.titlesFooter}>DC</div>
                        <div>
                            <a href="#">Term Of Use</a>
                            <a href="#">Privacy policy(New)</a>
                            <a href="#">Ad Choices</a>
                            <a href="#">Advertising</a>
                            <a href="#">Jobs</a>
                            <a href="#">Subscriptions</a>
                            <a href="#">Talent Workshops</a>
                            <a href="#">CPSC Certificates</a>
                            <a href="#">Ratings</a>
                            <a href="#">Shop Help</a>
                            <a href="#">Contact Us</a>
                        </div>

                    </div>
                    <div>
                        <div className={style.titlesFooter}>SITES</div>
                        <div>
                            <a href="#">DC</a>
                            <a href="#">MAD Magazine</a>
                            <a href="#">DC Kids</a>
                            <a href="#">DC Universe</a>
                            <a href="#">DC Power Visa</a>
                        </div>
                    </div>
                </div>
               
                <div id={style.bgDC}>
                  

                </div>
            </div>
            <div id={style.footerDown} className="d-flex">
                <div id={style.footerSocial} className="boxed d-flex footerSocial">
                    <div><button>SING-UP NOW!</button></div>
                    <div className="d-flex">
                        <p>FOLLOW US</p>
                        <a href="#"><img className="social" src="/footer-facebook.png" alt="facebook" /></a>
                        <a href="#"><img className="social" src="/footer-twitter.png" alt="twitter" /></a>
                        <a href="#"><img className="social" src="/footer-youtube.png" alt="youtube" /></a>
                        <a href="#"><img className="social" src="/footer-pinterest.png" alt="pinterest" /></a>
                        <a href="#"><img className="social" src="/footer-periscope.png" alt="periscope" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;