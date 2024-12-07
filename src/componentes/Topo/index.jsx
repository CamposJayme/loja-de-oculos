import Image from "next/image";
import Logo from "../../../public/logo.png";
import styles from "./Topo.module.css";

export default function Topo() {
    return(
        <header>
            <div className={styles.header_container}>
                <div className={styles.logo_container}>
                    <Image src={Logo} alt="Logo da ótica"/>
                </div>
                <nav className={styles.nav_container}>
                    <ul>
                        <li>
                            <a href="#">PRODUTOS</a>
                        </li>
                        <li>
                            <a href="#">SOBRE</a>
                        </li>
                        <li>
                            <a href="#">CONTATO</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}