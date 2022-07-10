import React, { useEffect, useState } from "react";
import Write from "../components/Write";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import SearchBox from "../components/SearchBox";
import PostList from "../components/PostList";
import Scroll from "../components/Scroll";

const HomePage = (props) => {
  const [searchfield, searchChange] = useState("");

  const onSearchChange = (e) => {
    searchChange(e.target.value);
    console.log("username", username);
  };

  let location = useLocation();

  const posts = props.posts;

  //useEffect(() => console.log("page rendered", props.products), []);
  // get products as props, filter relevant product
  const product = props.products.filter(
    (product) => product._id === location.pathname.split("/homepage/")[1]
  );

  useEffect(
    () => console.log("page rendered", location.pathname.split("/homepage/")),
    []
  );
  const filteredPosts = posts.filter((post) => {
    return post.post.toLowerCase().includes(searchfield.toLowerCase());
  });
  //{product[0].name} {product[0].surname}
  return !product.length ? (
    <h1>loading</h1>
  ) : (
    <main class="bg-gray-100 dark:bg-gray-800 rounded-2xl h-screen overflow-hidden relative">
      <div class="flex items-start justify-between">
        <div class="h-screen hidden lg:block my-4 ml-4 shadow-lg relative w-80">
          <div class="bg-white h-full rounded-2xl dark:bg-gray-700">
            <div class="flex items-center justify-center pt-6">
              <svg
                width="35"
                height="30"
                viewBox="0 0 256 366"
                version="1.1"
                preserveAspectRatio="xMidYMid"
              >
                <defs>
                  <linearGradient
                    x1="12.5189534%"
                    y1="85.2128611%"
                    x2="88.2282959%"
                    y2="10.0225497%"
                    id="linearGradient-1"
                  >
                    <stop
                      stop-color="#FF0057"
                      stop-opacity="0.16"
                      offset="0%"
                    ></stop>
                    <stop stop-color="#FF0057" offset="86.1354%"></stop>
                  </linearGradient>
                </defs>
                <g>
                  <path
                    d="M0,60.8538006 C0,27.245261 27.245304,0 60.8542121,0 L117.027019,0 L255.996549,0 L255.996549,86.5999776 C255.996549,103.404155 242.374096,117.027222 225.569919,117.027222 L145.80812,117.027222 C130.003299,117.277829 117.242615,130.060011 117.027019,145.872817 L117.027019,335.28252 C117.027019,352.087312 103.404567,365.709764 86.5997749,365.709764 L0,365.709764 L0,117.027222 L0,60.8538006 Z"
                    fill="#001B38"
                  ></path>
                  <circle
                    fill="url(#linearGradient-1)"
                    transform="translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) "
                    cx="147.013244"
                    cy="147.014675"
                    r="78.9933938"
                  ></circle>
                  <circle
                    fill="url(#linearGradient-1)"
                    opacity="0.5"
                    transform="translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) "
                    cx="147.013244"
                    cy="147.014675"
                    r="78.9933938"
                  ></circle>
                </g>
              </svg>
            </div>
            <nav class="mt-6">
              <div>
                <Link
                  to="#"
                  class="w-full font-thin uppercase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 dark:from-gray-700 dark:to-gray-800 border-r-4 border-blue-500"
                >
                  <span class="text-left">
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 2048 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                    </svg>
                  </span>
                  <span class="mx-4 text-sm font-normal">Dashboard</span>
                </Link>
                <Link
                  to="/"
                  class="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                >
                  <span class="text-left">
                    <svg
                      width="20"
                      height="20"
                      class="m-auto"
                      fill="currentColor"
                      viewBox="0 0 2048 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                    </svg>
                  </span>
                  <span class="mx-4 text-sm font-normal">Sign Out</span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
        <div class="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
          <header class="w-full shadow-lg bg-white dark:bg-gray-700 items-center h-16 rounded-2xl z-40">
            <div class="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
              <div class="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0">
                <div class="container relative left-0 z-50 flex w-3/4 h-auto h-full">
                  <SearchBox searchChange={onSearchChange} />
                </div>
                <div class="relative p-1 flex items-center justify-end w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto">
                  <p>Welcome {product[0].username}</p>
                </div>
              </div>
            </div>
          </header>
          <div>
            <Write users={product[0].username} />
          </div>
          <Scroll>
            <PostList posts={filteredPosts} />
          </Scroll>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
