import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState("");
  function handleSubmit(e) {
    e.preventDefault();

    setName("");
    setEmail("");
    setMessage("");
    setStatus("message sent successfully! ✨");

    setTimeout(() => {
      setStatus();
    }, 700);
  }
   const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
      <main className="min-h-screen font-poppins text-white overflow-x-hidden">
        <div className="md:fixed left-15 top-4 mx-3 my-4">
                <button
                  className="block text-white "
                  aria-label="Open menu"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <HiMenu className="icon"/>
                </button>
                {menuOpen && (
                  <div className="absolute md:-left-13 md:top-9 left-2 top-11 rounded-2xl p-2 font-poppins bg-gray-900/95 backdrop-blur-md shadow-2xl">
                    <button
                      className="block w-full text-left p-2 text-white hover:bg-white/10 rounded-xl active:bg-white/10"
                      onClick={() => {
                        navigate("/");
                        setMenuOpen(false);
                      }}
                    >
                      Home
                    </button>
                    <button
                      className="block w-full text-left p-2 text-white hover:bg-white/10 active:bg-white/10 rounded-xl"
                      onClick={() => {
                        navigate("/about");
                        setMenuOpen(false);
                      }}
                    >
                      About
                    </button>
                  </div>
                )}
              </div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center font-extrabold text-4xl md:text-5xl lg:text-6xl mt-11"
        >
          Let"s Build Something Unique!
        </motion.h2>
        {status && (
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring" }}
            className="text-orange-400 font-semibold text-center"
          >
            {status}
          </motion.p>
        )}

        <div className=" flex justify-center px-7">
          <motion.form
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 120,
            }}
            className="my-7"
            onSubmit={handleSubmit}
          >
            <fieldset className="flex flex-col gap-4 border p-4 md:p-7 rounded-xl">
              <legend className="font-supermercado">Contact Me</legend>

              <label htmlFor="name">Name</label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="enter your name..."
                autoComplete="name"
                required
                className="px-4 py-2 bg-gray-800 rounded-lg"
              />

              <label htmlFor="email">Email</label>
              <input
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="example@email.com"
                autoComplete="email"
                required
                className="px-4 py-2 bg-gray-800 rounded-lg"
              />

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                minLength={10}
                maxLength={500}
                placeholder="watchu got for me 🙂"
                required
                className="px-4 py-2 bg-gray-800 rounded-lg"
              ></textarea>

              <button type="submit" className="text-orange-400">
                send{" "}
                <span className="inline-block transition-transform duration-300 group hover:translate-x-2">
                  💨
                </span>
              </button>
            </fieldset>
          </motion.form>
        </div>
      </main>
  );
}
