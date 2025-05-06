import axios from "axios"
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10")
    .then(res => (setPosts(res.data), console.log(res.data)));
  }, []);

  return (
    <>

    </>
  )
}