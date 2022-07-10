import React, { useEffect, useState } from "react";
import Vote from "./Vote";

const Posts = (props) => {
  return (
    <div class="flex items-start justify-between">
      <div class="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
        <div class="flex items-center justify-center px-5 py-5">
          <div class="w-full mx-auto max-w-xl rounded-lg bg-white dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50">
            <div class="w-full mb-10">
              <div class="text-3xl text-indigo-500 text-left leading-tight h-3">
                “
              </div>
              <p class="text-sm text-gray-600 dark:text-gray-100 text-center px-5">
                {props.post}
              </p>
              <div class="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
                ”
              </div>
            </div>
            <div class="w-full">
              <p class="text-md text-indigo-500 font-bold text-center">
                {props.name}
              </p>
            </div>
            <Vote></Vote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
