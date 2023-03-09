import "./CardApresentacao.css";

function CardApresentacao(props) {
    return(
      <div id="containerCard">
        <img src={props.foto} alt={props.nome}/>
        <div>
          <div id="corLetra">
            <h1 id="nome">{props.nome}</h1>
            <h2 id="idade">idade: {props.idade} anos</h2>
          </div>
          <div id="social">
            <a id="git" href={props.git} target ="_blank"> <box-icon type='logo' name="github" color='white' size='md' title='Link para o github'></box-icon> </a>
            <a id="linkedin" href={props.linkedin} target ="_blank"> <box-icon type='logo' name="Linkedin" color='white' size='md' title='Link para o Linkedin'></box-icon></a>
          </div>
        </div>    
      </div>
    );
}

export default CardApresentacao