// import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";

export default function Home() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/api/tampildata", {
  //     method: "GET",
  //   })
  //     .then((response) => response.json())
  //     .then((datadb) => setData(datadb));
  // }, []);

  return (
    <>
      <Navbar />
      <main className="flex justify-center gap-60">
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
        <div className="border border-black w-40 h-40">Saran teman</div>
      </main>
    </>
  );
}
