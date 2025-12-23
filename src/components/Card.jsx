      import style from "./Card.module.css";
      function card(props) {

        const {pingo,image,nome}=props;
       
     let classSwitch = "";
            if (pingo == 1 || pingo == 12) {

                classSwitch = style.imgCardAdd;

            }
         return  <div className={style.card}>
                                <div className={style.containerImg}>
                                    <img className={classSwitch} src= {image} alt="" />
                                </div>
                                <p >{nome}</p>
                            </div>

        
}
export default card;
