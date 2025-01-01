'use client'
import Image from "next/image";
import React from "react";
import { useState } from "react";

const Blog1 = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [commentInput, setCommentInput] = useState("");

  const handleAddComment = () => {
    if (commentInput.trim() !== "") {
      setComments([...comments, commentInput]);
      setCommentInput("");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Image
      height={100}
      width={900}
        src="/pa.png"
        alt="First Blog Post"
        className="  object-cover rounded-lg mb-4"
      />
      <h1 className="text-3xl font-bold">5 of the Most Influential Machine Learning Papers of 2024</h1>
      <p className="mt-4 text-gray-700">
      Artificial intelligence (AI) research, particularly in the machine learning (ML) domain, continues to increase the amount of attention it receives worldwide. To give you an idea of the scientific hype around AI and ML, the number of works uploaded to the open-access pre-print archive ArXiv has nearly doubled since late 2023, with over 30K AI-related papers accessible in the repository at the end of 2024. As you may guess, most of them are ML-focused; after all, deep learning architectures, generative AI solutions, and almost all computer vision and natural language processing systems nowadays are, in essence, ML systems that learn from data to perform increasingly astonishing tasks.

This article lists 5 of the most influential ML papers that largely shaped AI research trends throughout 2024. While the links provided are to their version in ArXiv repository, these papers are published or in the publication process in top conferences or journals. 
      
      </p><br/>
      <h1 className="text-3xl font-bold">Vision Transformers Need Registers (T. Darcet et al.)</h1><br/>
      <p> The paper received one of the latest Outstanding Paper Awards at the International Conference of Learning Representations (ICLR 2024) and, whilst is has only been published in ArXiv in recent months, it is quickly attracting high audiences and citations.

The authors investigate vision transformers’ issue of occasionally generating high-value tokens—in less important image areas, like backgrounds. They address this by adding extra tokens to the input called register tokens, thereby improving model performance and enabling better results in visual tasks like object detection..</p><br/>
<h1 className="text-3xl font-bold">Why Larger Language Models Do In-context Learning Differently? (Z. Shi et al.)</h1><br/>
<p> The highly cited study released in late spring 2024 shows that small language models (SLMs) are more robust to noise and “less easily distracted” than their larger counterparts (LLMs), due to how they put emphasis on a narrower selection of hidden features — the features learned throughout the encoder and decoder layers of their transformer architecture — compared to LLMs. The study sheds light on a new level of understanding and interpreting the way these complex models operate.
  
</p>
      {/* Comments Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Comments</h2>
        <div className="mt-4">
          <input
            type="text"
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            className="w-full border rounded-lg p-2"
            placeholder="Write a comment..."
          />
          <button
            onClick={handleAddComment}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2"
          >
            Add Comment
          </button>
        </div>
        <div className="mt-6">
          {comments.length > 0 ? (
            <ul className="space-y-4">
              {comments.map((comment, index) => (
                <li key={index} className="bg-gray-100 p-4 rounded-lg">
                  {comment}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No comments yet. Be the first to comment!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog1;
