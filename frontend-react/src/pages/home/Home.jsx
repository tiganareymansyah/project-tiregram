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
      <div className="bg-home">
        <main>{/* {data.map((d) => d.nama)} */}</main>
        <footer></footer>
      </div>
    </>
  );
}
