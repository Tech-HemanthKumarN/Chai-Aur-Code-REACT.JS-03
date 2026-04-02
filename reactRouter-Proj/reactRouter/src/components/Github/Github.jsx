import React, { use, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData()
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/Tech-HemanthKumarN")
//       .then((respons) => respons.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, [setData]);

  
  return (
    <div className="bg-gray-600 text-white text-3xl p-4 m-4 text-center flex flex-col items-center gap-4">
      Github Followers: {data.followers}
      <img
        src={data.avatar_url}
        alt="Git Picture"
        width={300}
        className="rounded-lg"
      />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/Tech-HemanthKumarN")
    return response.json()
}