import { useEffect, useState} from "react";
import api from "../../services/api";
import { useHistory } from 'react-router-dom';
import "./favoritos.scss";
import { toast } from "react-toastify";

export default function Home(){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const favPosts = localStorage.getItem("posts");
        setPosts(JSON.parse(favPosts) || []);
      }, []);

      function desfavoritar(id) {
        let filtraPosts = posts.filter((post) => {
          return post.id !== id;
        });
        setPosts(filtraPosts);
        localStorage.setItem("posts", JSON.stringify(filtraPosts));
        toast.success("Post excluido com sucesso");
      }

    return(
        <div className="container">
            <div className="listaPosts">
            <div className="pseudo-cabecalho">
                <h1>Nutri Blue</h1>
                <h2>Meus Posts</h2>
                <button className="botao-home"><a href={`http://localhost:3000/`}>Home</a></button> 
            </div>
            
            {posts.length === 0 && (
                <span>Você não favoritou nenhum post </span>
            )}
                {posts.map((post) =>{
                    return(
                        <div className="post" key={post.id}>
                            <div className="conteudo-wrapper">
                                <div className="titulo-wrapper">
                                    <span className="titulo">{post.titulo}</span>
                                </div>
                                <div className="capa-wrapper">
                                    <picture><img className="capa" src={post.capa} alt={post.titulo}/></picture>
                                </div>
                                <div className="subtitulo-wrapper">
                                    <span className="subtitulo">{post.subtitulo}</span>
                                </div>
                                <div className="categoria-wrapper">
                                    <span className="categoria">{post.categoria}</span>
                                </div>
                                <div className="acoes-wrapper">
                                    <div className="botao-wrapper">
                                        <button className="botao-detalhes"><a href={`http://localhost:3000/post/${post.id}`}>Detalhes</a></button>
                                    </div>
                                    <div className="botao-wrapper"><button className="botao-desfavorita" onClick={()=>desfavoritar(post.id)}>Deletar</button></div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}