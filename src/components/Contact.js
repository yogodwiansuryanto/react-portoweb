import { fetchApi, useState } from "react";
import { postData } from "../services/ExperContactServ";
export default function Contact() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");

  const onChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  const onChangeUserEmail = (e) => {
    setUserEmail(e.target.value);
  };

  const onChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const submitMessage = async () => {
    const params = {
      userName: params.userName,
      userEmail: params.userEmail,
      message: params.message,
    };
    const data = await postData(params);
    if (data) {
      fetchApi();
    }
  };

  return (
    <>
      <div id="contact" className="pt-36-pb-32">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-bold text-lg text-secondary mb-2 md:text-xl lg:text-3xl mt-16 pb-0">
                Contact
              </h4>
              <h2 className="font-bold text-2xl text-black md:text-2xl">
                Hubungi Saya
              </h2>
              <p className="font-semibold text-[12px] text-fourth mt-1 md:text-lg">
                Anda dapat menghubungi saya melalui dibawah ini
              </p>
            </div>
          </div>
          <form>
            <div className="w-full lg:w-2/3 mx-auto">
              <div className="w-full mb-8 px-4">
                <label
                  //   for="name"
                  className="text-base font-bold text-secondary"
                >
                  Nama
                </label>
                <input
                  value={userName}
                  onChange={onChangeUserName}
                  // type="name"
                  id="name"
                  className="w-full bg-slate-200 text-black p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                />
              </div>
              <div className="w-full mb-8 px-4">
                <label
                  //   for="email"
                  className="text-base font-bold text-secondary"
                >
                  email
                </label>
                <input
                  value={userEmail}
                  onChange={onChangeUserEmail}
                  // type="email"
                  id="email"
                  className="w-full bg-slate-200 text-black p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                />
              </div>
              <div className="w-full mb-8 px-4">
                <label
                  //   for="massege"
                  className="text-base font-bold text-secondary"
                >
                  Pesan
                </label>
                <textarea
                  value={message}
                  onChange={onChangeMessage}
                  // name="message"
                  id="massege"
                  className="w-full bg-slate-200 text-black p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32"
                ></textarea>
              </div>
              <div className="w-full px-4">
                <button
                  onClick={submitMessage}
                  type="submit"
                  className="text-base font-semibold text-white bg-primary bg-opacity-80 py-3 px-8 rounded-full w-full mb-40 hover:shadow-lg hover:bg-primary hover:text-secondary transition duration-500 ease-in-out"
                >
                  Kirim
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
