import { useState } from "react";
import MoveContent from "../../components/MoveContent";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Navabco from "../../components/Navabco";

export default function Navreg() {
  const [regUsername, setRegUsername] = useState("");
  const [regGender, setRegGender] = useState("Male");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  return (
    <>
      <Navabco />
      <div className="div-bg">
        <main className="flex justify-center items-center gap-52">
          <div className="bg-white px-5 py-5 rounded-2xl w-72 div-fw mt-10">
            <h1 className="text-pink-600 text-2xl text-center tracking-widest font-serif">
              Register
            </h1>
            <form
              className="flex flex-col gap-5 mt-7 form-login"
              onSubmit={(e) => {
                e.preventDefault();
                fetch("http://localhost:3000/api/register", {
                  method: "POST",
                  headers: {
                    "Content-type": "application/json",
                  },
                  body: JSON.stringify({
                    regUsername,
                    regGender,
                    regEmail,
                    regPassword,
                  }),
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
                placeholder="Username"
                onChange={(e) => setRegUsername(e.target.value)}
                required
              />
              <div className="flex flex-col gap-3">
                <label className="text-zinc-400">Gender :</label>
                <select
                  value={regGender}
                  onChange={(e) => setRegGender(e.target.value)}
                  className="border border-pink-600 rounded-md text-zinc-700"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setRegEmail(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Password"
                onChange={(e) => setRegPassword(e.target.value)}
                required
              />
              <div className="mt-7">
                <Button name="Register" />
              </div>
            </form>
          </div>
          <div className="flex flex-col gap-5 font-serif tracking-widest mt-16">
            <p className="text-white text-7xl welcome">Welcome To</p>
            <MoveContent />
          </div>
        </main>
        <div className="footer-register">
          <Footer />
        </div>
      </div>
    </>
  );
}
