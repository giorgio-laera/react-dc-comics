import style from "./LinkHeader.module.css"
import links from "../data/LinksNavbar.js"

function LinksHeader (){
    
    
        {links.map(link=>{
       
            return <li><a  href="">{link}</a></li>
})}
}
export default LinksHeader