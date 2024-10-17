import Link from "next/link";
import Styles from "./style.module.css"
const Navbar = ()=>{
    return(
        <div className={Styles.navContainer}>
            <div className="navLeft">ShoppingKart</div>
            <div className={Styles.navRight}>
            <Link href="/">Home</Link>
            <Link href="./products">Products</Link>
            <Link href="/">About</Link>
            <Link href="/">Cart</Link>
            </div>
        </div>
    )
}
export default Navbar;