import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header/Header";
import Question from "./Question";

const Blog = () => {
  const questions = useLoaderData();
  return (
    <>
      <Header />
      <div>
        <h2 className="text-2xl font-semibold my-5 sm:text-4xl">Blog</h2>
        {questions.map((q) => (
          <Question key={q.ide} q={q} />
        ))}
      </div>
    </>
  );
};

export default Blog;
