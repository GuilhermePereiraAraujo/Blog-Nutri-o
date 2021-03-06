import { useEffect, useState} from "react";
import api from "../../services/api";
import { useHistory } from 'react-router-dom';
import "./home.scss";
import { toast } from "react-toastify";

export default function Home(){
    const [posts, setPosts] = useState([]);
    const history = useHistory();

    useEffect(() =>{
        async function loadPosts(){
            const response = await api.get("rn-api/?api=posts");
            setPosts(response.data);
        }
        loadPosts();
    }, []);

    function favoritar(id){
        const favPosts = localStorage.getItem("posts");
        let postsSalvos = JSON.parse(favPosts) || [];
        const findPost = posts.find((post) => post.id === id);
        const hasPosts = postsSalvos.some((post) => post.id === id);

        if(hasPosts){
             toast.info("Esse post já foi favoritado");
             return;
        }

        postsSalvos.push(findPost);
        localStorage.setItem("posts", JSON.stringify(postsSalvos));
        toast.success("Post salvo com sucesso");
    }

    return(
        <div className="container">
            <div className="listaPosts">
            <div className="pseudo-cabecalho">
                <h1>Nutri Blue</h1>
                <button className="botao-favoritos"><a href={`http://localhost:3000/favoritos`}>Favoritos</a></button> 
            </div>
            
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
                                    <div className="botao-wrapper"><button className="botao-favorito" onClick={()=>favoritar(post.id)}>Favoritar</button></div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}