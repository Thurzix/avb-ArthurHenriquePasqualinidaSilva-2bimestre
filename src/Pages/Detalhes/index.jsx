import axios from "axios"
import { useEffect, useState } from "react";
import {useParams } from "react-router-dom";

export default function Home() {
    const { id } = useParams();

    const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10")
    .then(res => (setPosts(res.data), console.log(res.data)));
  }, []);

  return (
    <>
    <h2>{posts.title}</h2>
    <p>{posts.body}</p>
    </>
  )
}