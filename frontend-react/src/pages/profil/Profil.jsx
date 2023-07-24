import { useState } from "react";
import Navbar from "../../components/Navbar";

export default function Profil() {
  const [bio, setBio] = useState("");
  const [openBio, setOpenBio] = useState(false);
  return (
    <>
      <Navbar />
      <main className="flex justify-center mt-10">
        <div className="flex flex-col gap-3">
          <div className="flex gap-14">
            <img
              src="../images/trs.jpg"
              alt="user"
              className="w-28 h-28 rounded-full"
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
          <div className="flex justify-center">
            <button
              className="border-black font-bold bg-zinc-300 px-48 h-8 rounded-lg"
              onClick={() => setOpenBio(true)}
            >
              Edit profil
            </button>
          </div>
        </div>
      </main>
      {openBio && <div>Santuy</div>}
    </>
  );
}
