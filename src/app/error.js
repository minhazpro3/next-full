"use client";

import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 className="text-xl">Something went wrong!</h1>
      {/* <p>{error.message}</p> */}
      <button onClick={() => reset()}>Try Again</button>
      <button className="my-6 px-6 py-2">
        <Link href="/">Go home</Link>
      </button>
    </div>
  );
}
