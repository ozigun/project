import React from "react";
import Posts from "./Posts";

const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map((post, i) => {
        return <Posts name={posts[i].name} post={posts[i].post} />;
      })}
    </div>
  );
};

export default PostList;
