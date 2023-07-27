import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";

export default function Profil() {
  const [bio, setBio] = useState("");
  const [openBio, setOpenBio] = useState(false);
  const [imgProfil, setImgProfil] = useState("");

  useEffect(() => {
    {
      fetch("http://localhost:3000/api/tampilpp", {
        method: "GET",
        credentials: "include",
      })
        .then((response) => response.json())
        .then((data) => {
          setImgProfil(data.profil_img);
        });
    }
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex justify-center mt-5">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <label>Buat / Ganti profil</label>
            <div className="flex">
              <input
                type="file"
                className="w-96"
                onChange={(e) => setImgProfil(e.target.files[0])}
              />
              <button
                className="bg-zinc-300 rounded-lg w-20 h-7 font-bold"
                onClick={async (e) => {
                  e.preventDefault();
                  const profilImg = new FormData();
                  profilImg.append("profil", imgProfil);
                  await fetch("http://localhost:3000/api/changeppuser", {
                    method: "PUT",
                    body: profilImg,
                    credentials: "include",
                  }).then(async (response) => {
                    if (response.ok) {
                      alert(await response.text());
                      location.reload();
                    }
                  });
                }}
              >
                Save
              </button>
            </div>
          </div>
          <div className="flex gap-14">
            <img
              className="bg-gray-200 rounded-full w-28 h-28 p-1 img-profil"
              src={`http://localhost:3000/img-profil/${imgProfil}`}
            />
            <div className="flex items-center text-center gap-10">
              <div>
                <p className="font-bold">20</p>
                <p>Postingan</p>
              </div>
              <div>
                <p className="font-bold">254</p>
                <p>Pengikut</p>
              </div>
              <div>
                <p className="font-bold">313</p>
                <p>Mengikuti</p>
              </div>
            </div>
          </div>
          <p className="font-bold">Tigana Reymansyah</p>
          <p>{bio}</p>
          <div className="flex justify-center gap-10">
            <button
              className="border-black font-bold bg-zinc-300 px-12 h-8 rounded-lg"
              onClick={() => setOpenBio(true)}
            >
              Edit bio profil
            </button>
            <button className="border-black font-bold bg-zinc-300 px-12 h-8 rounded-lg">
              Update Account
            </button>
          </div>
        </div>
      </main>
      {openBio && <div>Santuy</div>}
    </>
  );
}
