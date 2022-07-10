import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Write = (props) => {
  const [posta, onPostChange] = useState("");

  const postChange = (e) => {
    onPostChange(e.target.value);
  };
  const user = props.users;
  const onSubmit = (e) => {
    e.preventDefault();
    const post = {
      name: user,
      post: posta,
    };
    console.log(post);

    axios
      .post("http://localhost:5001/posts/add", post)
      .then((res) => Swal.fire("İletiniz Gönderildi"));
  };

  return (
    <label class="text-gray-700" for="name">
      <textarea
        class="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        id="comment"
        placeholder="Enter your comment"
        name="comment"
        rows="5"
        cols="40"
        onChange={postChange}
      ></textarea>
      <button
        onClick={onSubmit}
        type="button"
        class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
      >
        Gönder
      </button>
    </label>
  );
};

export default Write;
