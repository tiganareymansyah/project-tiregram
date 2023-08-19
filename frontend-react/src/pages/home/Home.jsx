import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";

export default function Home() {
  const [teman, setTeman] = useState([]);
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/saranteman", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((datauser) => setTeman(datauser));
  }, []);

  useEffect(() => {
    fetch("https://localhost:3000/api/postuser", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((postuser) => setPost(postuser));
  }, []);

  console.log(post);

  return (
    <>
      <Navbar />
      <main className="flex justify-between px-5">
        <div className="px-96">
          <div className="border border-black w-40 h-40">
            <div>
              <img src="" />
              <p>username</p>
            </div>
            <img src="" />
            <div>
              <p>like</p>
              <p>comment</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p>Saran Teman</p>
          {teman.map((t) => {
            return (
              <div className="flex">
                <div className="flex items-center gap-10">
                  <div className="flex items-center gap-3">
                    <img
                      className="bg-gray-200 rounded-full w-12 h-12 p-1"
                      src={`http://localhost:3000/img-profil/${t.profil_img}`}
                    />
                    <p>{t.username}</p>
                  </div>
                  <button className="bg-gray-300 px-3 rounded-md">Ikuti</button>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
