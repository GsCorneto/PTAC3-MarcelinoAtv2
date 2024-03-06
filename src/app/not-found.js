import styles from "./not-found.modules.css";
import Image from "next/image";

export default function NotFound(){
    return (
        <div className="page">
            <div className= {styles.error}> 
                <h1>Página com defeito! Compre outra máquina ;) </h1>
                <Image width={600} height={500} src={'https://cdn4.iconfinder.com/data/icons/computer-emoticons/512/Sad-Emoji-Emotion-Face-Expression-Feeling_1-512.png'}/>
            </div>
        </div>
    )
}
