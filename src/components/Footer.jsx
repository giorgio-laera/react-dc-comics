<h3>footer</h3>

function Footer() {
    return (
        <footer>
            <div className="boxed d-flex container-footer">
                <div id="container-link" className="d-flex">
                    <div>
                        <div className="titles-footer">DC COMICS</div>
                        <div className="link-footer ">
                            <a href="#">Characters</a>
                            <a href="#">Comics</a>
                            <a href="#">Movies</a>
                            <a href="#">TV</a>
                            <a href="#">Games</a>
                            <a href="#">Videos</a>
                            <a href="#">News</a>
                        </div>
                        <div className="titles-footer">SHOP</div>
                        <div className="link-footer ">
                            <a href="#">Shop DC</a>
                            <a href="#">Shop DC Collectibles</a>

                        </div>
                    </div>
                    <div>
                        <div className="titles-footer">DC</div>
                        <div className="link-footer ">
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
                        <div className="titles-footer">SITES</div>
                        <div className="link-footer ">
                            <a href="#">DC</a>
                            <a href="#">MAD Magazine</a>
                            <a href="#">DC Kids</a>
                            <a href="#">DC Universe</a>
                            <a href="#">DC Power Visa</a>
                        </div>
                    </div>
                </div>
                {/* Bg DC  */}
                <div id="bg-DC">
                    {/* <img src="/dc-logo-bg.png" alt="" /> */}

                </div>
            </div>
            <div id="footer-down" className="d-flex">
                <div className="boxed d-flex footer-social">
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