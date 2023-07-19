import { NavLink, Link } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
// import MoveContent from "../../components/MoveContent";
import { useState } from "react";

export default function Navlog() {
  const [data, setData] = useState([
    {
      id: 1,
      username: "trs",
      passowrd: "2502",
    },
  ]);

  const [register, setRegister] = useState(false);
  const [regUsername, setRegUsername] = useState("");
  const [regPassword, setRegPassword] = useState("");

  //   console.log(data);
  return (
    <>
      <header className="flex justify-between items-center px-10 py-5 header-navlog">
        <Link to={"/"}>
          <h1 className="text-3xl text-pink-600 judulnavlogreg">TiRegram</h1>
        </Link>
        <NavLink to={"/register"}>
          <MdAccountCircle className="fill-pink-600 text-3xl" />
        </NavLink>
      </header>
      <div className="div-bg">
        <main className="flex justify-center items-center gap-52">
          <div className="bg-white px-5 py-5 rounded-2xl w-72 div-fw mt-20">
            <h1 className="text-pink-600 text-2xl text-center tracking-widest font-serif">
              Login
            </h1>
            <form
              className="flex flex-col gap-7 mt-7 form-login"
              onSubmit={(e) => {
                e.preventDefault();
                let found;
                data.forEach((d) => {
                  if (
                    document.querySelector("#username").value === d.username
                  ) {
                    found = d;
                  }
                });
                if (found) {
                  if (
                    document.querySelector("#password").value === found.passowrd
                  ) {
                    alert("Login Berhasil");
                    window.location = "/home";
                  } else {
                    alert("Password Salah");
                    location.reload();
                  }
                } else {
                  alert("Username Salah");
                  location.reload();
                }
              }}
            >
              <input
                type="text"
                placeholder="Username"
                id="username"
                required
              />
              <input
                type="text"
                placeholder="Password"
                id="password"
                required
              />
              <Button name="Login" />
              <div className="flex justify-center text-xs">
                <p>Don't have account ?</p>
                <p
                  className="pl-1 text-blue-700 font-bold border-black cursor-pointer hover:text-black"
                  onClick={(e) => {
                    e.preventDefault();
                    setRegister(true);
                  }}
                >
                  Register
                </p>
              </div>
            </form>
          </div>
          <div>
            <p className="text-white text-7xl welcome">Welcome To</p>
            {/* <MoveContent /> */}
          </div>
        </main>
      <Footer />
      </div>
      {register && (
        <div>
          <div className="flex justify-center ">
            <div className="div-form-register">
              <h1 className="text-pink-600 text-2xl text-center tracking-widest font-serif">
                Register
              </h1>
              <form
                className="mt-5 flex flex-col gap-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  data.map((d) => {
                    setData([
                      ...data,
                      {
                        id: d.id + 1,
                        username: regUsername,
                        passowrd: regPassword,
                      },
                    ]);
                    alert("Register berhasil");
                    setRegister(false);
                  });
                }}
              >
                <input
                  type="text"
                  placeholder="Username"
                  className="h-7 ps-2"
                  required
                  onChange={(e) => setRegUsername(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Password"
                  className="h-7 ps-2"
                  required
                  onChange={(e) => setRegPassword(e.target.value)}
                />
                <Button name="Register" />
              </form>
            </div>
          </div>
          <AiOutlineClose
            className="close"
            onClick={(e) => {
              e.preventDefault();
              setRegister(false);
            }}
          />
        </div>
      )}
    </>
  );
}
