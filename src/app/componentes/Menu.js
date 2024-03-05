import Link from "next/link"
import styles from "./menu.module.css"
import Image from "next/image"

export default function Menu(){
    return(
     <header className = {styles.cabecalho} >
      <Image width={300} height={100} src={"https://ead.ifms.edu.br/pluginfile.php/1/theme_moove/logo/1699458447/banner%20topo%20capa%20sem%20brasao.jpg"}></Image>
      <h1>Samambaia Gameplays</h1>
       <nav>
          <ul>
            <Link href="/">
            <li>Castunfo</li>
            </Link>

            <Link href="/registro">
            <li>Criar Mebôus</li>
            </Link>

            <Link href="/localizacao">
            <li>Mapa Mundi</li>
            </Link>
           
          </ul>
       </nav>
     </header>

    )
}