import style from "./Header.module.css"

function Header(){
    return(
        <header className={style.header}>
            <div id={style.navBar} className=" boxed d-flex">
              <img src="/dc-logo.png" alt="logo-dc" />  
              <div>
                <a href="">CHARACTERS</a>
                <a href="">COMICS</a>
                <a href="">MOVIES</a>
                <a href="">TV</a>
                <a href="">GAMES</a>
                <a href="">COLLECTIBLES</a>
                <a href="">VIDEOS</a>
                <a href="">FANS</a>
                <a href="">NEWS</a>
                <a href="">SHOP</a>
              </div>

            </div>
            

        </header>
    );
}
export default Header;