import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import styles from "paginas/SobreMim/sobremim.module.css";
import fotoSobreMim from "assets/fotoSobreMim.jpg";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo={"Sobre mim"}>
      <h3 className={styles.subtitulo}>Olá, eu sou o Vitor!</h3>
      <img
        src={fotoSobreMim}
        alt="Foto do Vitor"
        className={styles.fotoSobreMim}
      />
      <p  className={styles.paragrafo}>
        Olá, tudo bem? Sou estudante de Análise e Desenvolvimento de Sistemas na
        Faculdade de Informática e Administração Paulista (FIAP).
      </p>
      <p className={styles.paragrafo}>
        Mas minha história na tecnologia começou bem antes disso. Aos 15 anos,
        iniciei minha jornada na programação com um curso de Front-End, onde
        aprendi HTML, CSS, JavaScript, Bootstrap e Sass. Foi meu primeiro
        contato com o desenvolvimento, onde adquiri conhecimentos básicos e,
        principalmente, a certeza de que queria seguir uma carreira nessa área.
      </p>
      <p className={styles.paragrafo}>
        Aos 18 anos, comecei o curso de Ciência da Computação no Instituto
        Federal de Ciência e Tecnologia – Câmpus Anápolis. Durante um ano nessa
        instituição, tive acesso a conteúdos aprofundados sobre programação e
        tive meu primeiro contato com a linguagem Java, que se tornou um marco
        importante no meu aprendizado.
      </p>
      <p className={styles.paragrafo}>
        Desde então, tenho me dedicado a aprimorar constantemente minhas
        habilidades, tanto técnicas quanto pessoais, buscando sempre crescer
        profissionalmente.
      </p>
      <p className={styles.paragrafo}>
        Aos 19 anos, decidi migrar de curso e comecei Análise e Desenvolvimento
        de Sistemas na FIAP. Nesse mesmo período, consegui meu primeiro emprego
        como Estagiário de TI e, em apenas cinco meses, fui efetivado como
        Auxiliar de TI. Nesse cargo, tive a oportunidade de enfrentar diversos
        desafios, desde suporte N1, envolvendo a manutenção de equipamentos, até
        o tratamento de chamados sistêmicos. Essas experiências foram
        fundamentais para ampliar meu conhecimento e consolidar minha base
        profissional.
      </p>
      <p className={styles.paragrafo}>
        Hoje, sigo motivado e em constante evolução, com o objetivo de
        contribuir cada vez mais com o universo do desenvolvimento e alcançar
        novas conquistas na área de tecnologia.
      </p>
    </PostModelo>
  );
}
