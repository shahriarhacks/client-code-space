import React from "react";

const Question = ({ q }) => {
  const { question, answer } = q;
  return (
    <section className="bg-gray-800 text-gray-100">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <div className="space-y-4">
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              {question}
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">{answer}</p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Question;
