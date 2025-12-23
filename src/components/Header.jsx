import style from "./Header.module.css"
import links from "../data/LinksNavbar.js"
function Header() {
  return (
    <header className={style.header}>
      <div id={style.navBar} className=" boxed d-flex">
        <img src="/dc-logo.png" alt="logo-dc" />
        <ul>{

          links.map((link,i) => {

            return <li><a key={i} href={link.url}>{link.text}</a></li>
          })}

        </ul>

      </div>


    </header>
  );
}
export default Header;