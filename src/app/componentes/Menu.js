import Link from "next/link"
import styles from "./menu.module.css"
import Image from "next/image"

export default function Menu(){
    return(
     <header className = {styles.cabecalho} >
      <Image width={300} height={100} src={"https://ead.ifms.edu.br/pluginfile.php/1/theme_moove/logo/1699458447/banner%20topo%20capa%20sem%20brasao.jpg"}></Image>
      <h1></h1>
       <nav className = {styles.nav}>
          <ul className = {styles.lista
          }>
            <Link href="/">
            <li>Cursos Disponíveis</li>
            </Link>

            <Link href="/registro">
            <li>Criar Mebôus</li>
            </Link>

            <Link href="/localizacao">
            <li>Procure uma instituição perto de você</li>
            </Link>
          </ul>
       </nav>

     </header>

    )
}