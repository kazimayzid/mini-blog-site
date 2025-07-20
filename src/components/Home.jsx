import React, { useEffect, useState } from "react";
import Logo from "../assets/Mini-blog.png";
import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
  set,
} from "firebase/database";
import myVideo from "../assets/video.mp4";
export const Home = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [titleErr, setTitleErr] = useState("");
  const [descriptionErr, setDescriptionErr] = useState("");
  const [post, setPost] = useState([]);
  const db = getDatabase();

  const titleHandle = (e) => {
    setTitle(e.target.value);
    setTitleErr("");
  };
  const descriptionHandle = (e) => {
    setDescription(e.target.value);
    setDescriptionErr("");
  };
  useEffect(() => {
    const starCountRef = ref(db, "users/");
    onValue(starCountRef, (snapshot) => {
      let dataArr = [];
      console.log(snapshot.val());

      snapshot.forEach((item) => {
        console.log(item.key);

        dataArr.push({ id: item.key, ...item.val() });
      });
      console.log(dataArr);

      setPost(dataArr);
    });
  }, []);

  const postHandle = () => {
    if (!title) {
      setTitleErr("Plz enter at least one word");
    }
    if (!description) {
      setDescriptionErr("Plz enter your description");
    }
    if (title || description) {
      set(push(ref(db, "users/")), {
        title: title,
        description: description,
      });
      setTitle("");
      setDescription("");
    }
  };
  const deleteHandle = (data) => {
    console.log(data, "one");

    remove(ref(db, `users/${data.id}`));
  };
  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center">
      <div className="bg-[#000000cc] w-[99%] h-[98%] rounded-2xl p-5">
        <div className="flex justify-between items-center">
          <div>
            <img
              src={Logo}
              alt="#logo"
              className="px-6 py-2 rounded-xl text-4xl backdrop-blur-md bg-white/10 border border-white/30 text-white shadow-lg"
            />
          </div>
          <div className="flex gap-x-[50px]">
            <a
              href="#home"
              className="px-6 py-2 rounded-xl backdrop-blur-md bg-white/10 border border-white/30 text-white shadow-lg hover:bg-white/20 transition"
            >
              Home
            </a>
            <a
              href="#about"
              className="px-6 py-2 rounded-xl backdrop-blur-md bg-white/10 border border-white/30 text-white shadow-lg hover:bg-white/20 transition"
            >
              About
            </a>
            <a
              href="#settings"
              className="px-6 py-2 rounded-xl backdrop-blur-md bg-white/10 border border-white/30 text-white shadow-lg hover:bg-white/20 transition"
            >
              Settings
            </a>
          </div>
        </div>
        <div className="h-[85%] flex mt-[80px] gap-x-[50px]">
          <div className=" h-[90%] w-[20%] text-center">
            <div className="flex flex-col mb-10">
              <label
                className="font-bold text-[36px] text-[rgba(255,255,255,0.6)]"
                htmlFor="title"
              >
                Title
              </label>
              <input
                onChange={titleHandle}
                value={title}
                className="rounded-[6px] bg-[#ffffff15] text-[rgba(255,255,255,0.6)]"
                id="title"
                type="text"
              />
              <p>{titleErr}</p>
            </div>
            <div className="flex flex-col h-[50%]">
              <label
                className="font-bold text-[36px] text-[rgba(255,255,255,0.6)]"
                htmlFor="title"
              >
                Description
              </label>
              <textarea
                value={description}
                onChange={descriptionHandle}
                className="rounded-[6px] bg-[#ffffff15] h-[80%] text-[rgba(255,255,255,0.6)]"
                id="title"
                type="text"
              />
              <p>{descriptionErr}</p>
            </div>
            <button
              onClick={postHandle}
              className="px-6 py-2 rounded-xl backdrop-blur-md bg-white/10 border border-white/30 text-white shadow-lg hover:bg-white/20 transition mt-7 mb-3"
            >
              Post
            </button>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-[80%] rounded-[10px] mx-auto "
            >
              <source src={myVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="w-[80%] h-[100%] rounded-xl overflow-hidden backdrop-blur-md bg-white/10 border border-white/30 text-white shadow-lg">
            <div className="h-full overflow-y-auto px-5 py-2">
              {post.map((data) => (
                <div
                  key={data.id}
                  className="mb-4 pb-4 border-b border-white/30"
                >
                  <p className="text-4xl text-[#9fc1ff] mb-3">{data.title}</p>
                  <p className="text-[rgba(255,255,255,0.6)]">
                    {data.description}
                  </p>
                  <div className="mt-4 flex justify-end">
                    <button
                      onClick={() => deleteHandle(data)}
                      className="px-4 py-1 rounded-xl backdrop-blur-md bg-white/10 border border-white/30 text-white shadow-lg hover:bg-white/20 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <script src="/node_modules/flowbite/dist/flowbite.min.js"></script>
    </div>
  );
};
