"use client";
import Image from "next/image";

export const StepFour = ({ backtostep }) => {
  return (
    <div className="container">
      <div className="cont">
        <div className="headerp">
          <div>
            <div>
              <Image
                src="/pinecone.png"
                alt="pinecone"
                width={60}
                height={60}
              ></Image>
            </div>
            <div className="header">
              <p>You&apos;re All Set 🔥</p>
            </div>
            <div className="headertext">
              <p>We have received your submission. Thank you!</p>
            </div>
          </div>
          <div>
            <button className="return" type="button" onClick={backtostep}>
              Return
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
