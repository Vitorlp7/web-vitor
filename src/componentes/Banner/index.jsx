import styles from "./banner.module.css";
import code from "assets/code.jpeg"
import minhaFoto from "assets/vitor-foto.png"

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá, mundo!</h1>
        <p className={styles.paragrafo}>
          Boas-vindas ao meu espaço, pessoal! Eu sou Vitor, estudante de Análise
          e Desenvolvimento de Sistemas e apaixonado por tecnologia. Aqui, quero
          compartilhar diversos conhecimentos e experiências. Espero que você
          encontre algo útil e aprenda algo novo nos artigos que preparamos.
        </p>
      </div>
      <div className={styles.imagens}>
        <img src={code} alt="" className={styles.code} aria-hidden={true}/>
        <img src={minhaFoto} alt="Foto-Vitor" className={styles.minhaFoto}/>
      </div>
    </div>
  );
}
