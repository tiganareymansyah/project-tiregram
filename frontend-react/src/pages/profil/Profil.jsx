import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import { AiOutlineClose } from "react-icons/ai";

export default function Profil() {
  const [user, setUser] = useState();
  const [bio, setBio] = useState();
  const [editAccount, setEditAccount] = useState(false);
  const [newUsername, setNewUsername] = useState("");
  const [newGender, setNewGender] = useState("Male");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [imgProfil, setImgProfil] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/user", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((user) => setUser(user));
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex justify-center mt-5">
        {user ? (
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
                  className="bg-zinc-300 rounded-lg w-20 h-7 font-bold tracking-widest hover:bg-zinc-400 ease-in-out duration-200"
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
                src={`http://localhost:3000/img-profil/${user.profil_img}`}
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
            <p className="font-bold tracking-widest">{user.username}</p>
            <p>{user.bio}</p>
            <div className="flex justify-center gap-14">
              <button
                className="border-black font-bold bg-zinc-300 tracking-widest px-12 h-8 rounded-lg hover:bg-zinc-400 ease-in-out duration-200"
                onClick={() => setBio(user.bio)}
              >
                Edit bio
              </button>
              <button
                className="border-black font-bold bg-zinc-300 tracking-widest px-12 h-8 rounded-lg hover:bg-zinc-400 ease-in-out duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  const konfirmasi = confirm(
                    "Apakah anda yakin ingin memperbarui akun anda ?"
                  );
                  if (konfirmasi) {
                    setEditAccount(true);
                  } else {
                    setEditAccount(false);
                  }
                }}
              >
                Update Account
              </button>
            </div>
          </div>
        ) : (
          "Loading..."
        )}
      </main>
      {bio !== undefined && (
        <>
          <AiOutlineClose
            className="close-bio"
            onClick={(e) => {
              e.preventDefault();
              setBio();
            }}
          />
          <div className="div-bio">
            <form
              className="flex flex-col gap-5 p-7 mt-3"
              onSubmit={(e) => {
                e.preventDefault();
                const newUser = {
                  ...user,
                  bio,
                };
                fetch("http://localhost:3000/api/user", {
                  method: "PUT",
                  headers: {
                    "Content-type": "application/json",
                  },
                  body: JSON.stringify(newUser),
                  credentials: "include",
                }).then(async (response) => {
                  if (response.ok) {
                    setUser(newUser);
                    setBio();
                  }
                });
              }}
            >
              <textarea
                cols="30"
                rows="5"
                placeholder="Perbarui Bio Anda..."
                className="border border-black rounded-md px-1"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              ></textarea>
              <Button name="Save" />
            </form>
          </div>
        </>
      )}
      {editAccount && (
        <>
          <AiOutlineClose
            className="close-edit-account"
            onClick={(e) => {
              e.preventDefault();
              setEditAccount(false);
            }}
          />
          <div className="div-edit-account">
            <form
              className="flex flex-col gap-5 p-7 mt-3"
              onSubmit={(e) => {
                e.preventDefault();
                fetch("http://localhost:3000/api/editaccount", {
                  method: "PUT",
                  headers: {
                    "Content-type": "application/json",
                  },
                  body: JSON.stringify({
                    newUsername,
                    newGender,
                    newEmail,
                    newPassword,
                  }),
                  credentials: "include",
                }).then(async (response) => {
                  if (response.ok) {
                    alert(await response.text());
                    window.location = "/";
                  }
                });
              }}
            >
              <input
                type="text"
                placeholder="New username"
                required
                className="rounded-md h-10 px-1"
                onChange={(e) => setNewUsername(e.target.value)}
              />
              <div className="flex flex-col gap-3">
                <label className="text-zinc-400">New Gender :</label>
                <select
                  value={newGender}
                  onChange={(e) => setNewGender(e.target.value)}
                  className="rounded-md text-zinc-700"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <input
                type="email"
                placeholder="New email"
                required
                className="rounded-md h-10 px-1"
                onChange={(e) => setNewEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="New password"
                required
                className="rounded-md h-10 px-1"
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <div className="mt-5">
                <Button name="Save" />
              </div>
              <p className="text-center">---------- Atau ----------</p>
              <div className="flex justify-center">
                <button
                  className="bg-pink-600 text-white rounded-full px-5 h-10"
                  onClick={(e) => {
                    e.preventDefault();
                    const konfirmasi = confirm(
                      "Apakah anda yakin ingin menghapus account anda ?"
                    );
                    if (konfirmasi) {
                      fetch("http://localhost:3000/api/deleteakun", {
                        method: "DELETE",
                        credentials: "include",
                      }).then(async (response) => {
                        if (response.ok) {
                          alert(await response.text());
                          window.location = "/";
                        }
                      });
                    } else {
                      location.reload();
                    }
                  }}
                >
                  Delete Account
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
}
