import { useEffect, useState} from "react";
import api from "../../services/api";
import {Link, useParams} from "react-router-dom";
import "./post.scss";


export default function Post(){
    const { id } = useParams();
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState([]);

    useEffect(() =>{
        async function loadPosts(){
            const response = await api.get("rn-api/?api=posts");
            setPosts(response.data);
        }
        loadPosts();     
    }, []);
    

    useEffect(() =>{
        setPost(posts.filter(post =>post.id == id))
    },[id, posts]);

    //console.log(post.categoria);
    
    return(
        <div className="container">
                    <div>
                        {post.map(post =>{return(
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
                            <div className="botao-wrapper">
                                <button className="botao-detalhes"><a href={`http://localhost:3000/`}>Voltar</a></button>
                            </div>
                        </div>
                        )})}
                        
                    </div>
        </div>
    )

}