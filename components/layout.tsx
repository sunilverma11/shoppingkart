import Footer from "./footer/footer";
import Navbar from "./navbar/navbar";
import { ReactNode } from 'react'

interface ChildComponentProps {
  children: ReactNode
}
const Layout: React.FC<ChildComponentProps>= ({children}) =>{
    return(
        <div className="pageLayout">
            <nav>
                <Navbar/>
            </nav>
            <main>
                {children}
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}
export default Layout;