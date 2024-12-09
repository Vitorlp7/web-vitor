import styles from "componentes/Rodape/rodape.module.css"
import {ReactComponent as MarcaRegistrada} from 'assets/marca_registrada.svg'

export default function Rodape(){
    return(
        <footer className={styles.rodape}>
            <MarcaRegistrada/>
            Desenvolvido por Vitor.
        </footer>
    )
}