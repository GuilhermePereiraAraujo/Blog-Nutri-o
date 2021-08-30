import { useEffect, useState} from "react";
import api from "../../services/api";
import {Link} from "react-router-dom";
import "./home.scss";

export default function Home(){
    const [posts, setPosts] = useState([]);

    useEffect(() =>{
        async function loadPosts(){
            const response = await api.get("rn-api/?api=posts");
            setPosts(response.data);
        }
        loadPosts();
    }, []);

    return(
        <div className="container">
            <div className="listaPosts">
                {posts.map((post) =>{
                    return(
                        <article key={post.id}>
                            <div className="conteudo-wrapper">
                                <div className="titulo-wrapper">
                                    <span className="titulo">{post.titulo}</span>
                                </div>
                                <div className="capa-wrapper">
                                    <img src={post.capa} alt={post.titulo}/>
                                </div>
                                <div className="subtitulo-wrapper">
                                    <span className="subtitulo">{post.subtitulo}</span>
                                </div>
                                <div className="categoria-wrapper">
                                    <span className="categoria">{post.categoria}</span>
                                </div>
                                <div>
                                    <Link to={`/post/${post.id}`}>Detalhes</Link>
                                </div>
                            </div>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}