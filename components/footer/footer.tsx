import Image from "next/image";
import Styles from "./style.module.css"
const Footer = ()=>{
    return(
        <div className={Styles.footContainer}>
        <Image
            aria-hidden
            src="https://nextjs.org/icons/github.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
        </div>
    )
}
export default Footer;