import React, { useEffect, useState } from 'react';
import ProgressBar from '../Components/progress-bar';
import Avinya from '../Images/avinya.png';

const generateDots = (count) => {
  return Array.from({ length: count }, () => ({
    id: Math.random(),
    x: Math.random() * 100,
    y: Math.random() * -10,
    speed: Math.random() * 1 + 0.2,
    opacity: 1,
  }));
};

// const fetchLeetCodeStats = async (username) => {
//   const query = `
//     query getUserProfile($username: String!) {
//       matchedUser(username: $username) {
//         submitStatsGlobal {
//           acSubmissionNum {
//             difficulty
//             count
//           }
//         }
//       }
//       allQuestionsCount {
//         difficulty
//         count
//       }
//     }
//   `;

//   const response = await fetch('https://leetcode.com/graphql', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ query, variables: { username } }),
//   });

//   const data = await response.json();
//   return {
//     solved: data?.data?.matchedUser?.submitStatsGlobal?.acSubmissionNum || [],
//     total: data?.data?.allQuestionsCount || [],
//   };
// };


const Profile = () => {

  const [dots, setDots] = useState(generateDots(50));
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Subhrat Verma",
    email: "abcd@gmail.com",
    about: "Passionate web developer and programmer exploring the MERN stack.",
    linkedin: "#",
    leetcode: "#",
    github: "#"
  });

  // const [leetcodeStats, setLeetcodeStats] = useState({
  //   Easy: { solved: 0, total: 0 },
  //   Medium: { solved: 0, total: 0 },
  //   Hard: { solved: 0, total: 0 },
  // });

  // useEffect(() => {
  //   const username = 'subhrat123'; // Replace with your actual LeetCode username

  //   fetchLeetCodeStats(username).then(({ solved, total }) => {
  //     const stats = { Easy: { solved: 0, total: 0 }, Medium: { solved: 0, total: 0 }, Hard: { solved: 0, total: 0 } };

  //     solved.forEach(({ difficulty, count }) => {
  //       if (stats[difficulty]) stats[difficulty].solved = count;
  //     });

  //     total.forEach(({ difficulty, count }) => {
  //       if (stats[difficulty]) stats[difficulty].total = count;
  //     });

  //     setLeetcodeStats(stats);
  //   });
  // }, []);

  // const totalSolved = leetcodeStats.Easy.solved + leetcodeStats.Medium.solved + leetcodeStats.Hard.solved;
  // const totalQuestions = leetcodeStats.Easy.total + leetcodeStats.Medium.total + leetcodeStats.Hard.total;
  // const progressPercentage = totalQuestions > 0 ? (totalSolved / totalQuestions) * 100 : 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) =>
        prevDots.map((dot) =>
          dot.y > 100
            ? { ...dot, y: Math.random() * -10, opacity: 1 }
            : {
              ...dot,
              y: dot.y + dot.speed,
              opacity: Math.max(0, dot.opacity - 0.01),
            }
        )
      );
    }, 80);
    return () => clearInterval(interval);
  }, []);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {/* Background */}
      <div className="fixed w-full h-full z-[-1] bg-[#040313] overflow-hidden">
        {dots.map((dot) => (
          <div
            key={dot.id}
            className="absolute bg-white rounded-full"
            style={{
              width: '2px',
              height: '2px',
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              opacity: dot.opacity,
              filter: 'drop-shadow(0 0 6px rgba(255, 255, 255, 0.8))',
              transition: 'opacity 0.1s ease-in-out',
            }}
          />
        ))}
      </div>
      <div className="text-lg flex flex-col lg:flex-row text-white items-center justify-center lg:min-h-screen w-full p-6 pt-10 max-lg:pt-20  overflow-auto max-h-screen ">
        {/* Profile Section */}
        <div className=" max-lg:top-96 relative flex max-lg:flex-col max-lg:py-44 justify-center items-center" style={{ fontFamily: "Inter, sans-serif" }}>
          <div className="profile shadow-lg glassmorphism transition duration-500 ease-in-out transform lg:min:h-[80vh] lg:w-[25vw] max-lg:w-[86vw] flex flex-col gap-5 items-center justify-center m-4 p-6 pb-8 bg-[#1a1a40]/60 border border-[#6f00ff]/50">
            <img className="h-16" src={ Avinya } alt="Profile" />
            {isEditing ? (
              <div>
                <label className="uppercase text-[#f8f5ff] tracking-wider">Name :</label>
                <input className="  text-white glassmorphism p-2 rounded" name="name" value={profile.name} onChange={handleChange} />
              </div>
            ) : (
              <div className="text-2xl uppercase text-[#f8f5ff] tracking-wider">{profile.name}</div>
            )}
            {isEditing ? (
              <div>
                <label className="uppercase text-[#f8f5ff] tracking-wider">Email :</label>
                <input className="  text-white glassmorphism p-2 rounded" name="email" value={profile.email} onChange={handleChange} />
              </div>
            ) : (
              <div className="inter" style={{ fontFamily: "Inter, sans-serif" }}>{profile.email}</div>
            )}
            <hr className="w-[85%] " />
            <div className="flex flex-col justify-center items-center gap-6">
              {['linkedin', 'leetcode', 'github'].map((field) => (
                <p key={field} className="flex gap-4 justify-center items-center">
                  <img className="h-8" src={`${field}.png`} alt={field} />
                  {isEditing ? (
                    <input className="  text-white glassmorphism p-2 rounded" name={field} value={profile[field]} onChange={handleChange} />
                  ) : (
                    <a href={profile[field]} className="hover:text-white transition inter hover:scale-105">{field.charAt(0).toUpperCase() + field.slice(1)}</a>
                  )}
                </p>
              ))}
            </div>
            <hr className="w-[85%] " />
            <div className="text-xl sora font-bold">About</div>
            {isEditing ? (
              <textarea className=" text-white glassmorphism p-2 rounded w-full" name="about" value={profile.about} onChange={handleChange} />
            ) : (
              <p className="p-1 font-thin h-[7rem] inter text-center overflow-hidden text-gray-300">{profile.about}</p>
            )}
            <button onClick={handleEditClick} className="bg-[#4b19675b] font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:text-white focus:outline-none border hover:scale-105">
              {isEditing ? 'Save' : 'Edit'}
            </button>
          </div>
          {/* Stats and Leetcode Section */}
          <div className="flex flex-col justify-center gap-6 items-center w-full lg:w-[70vw] font-orbitron">
            <div className="flex flex-col lg:flex-row max-lg:gap-6 justify-center items-center w-full">
              {/* LeetCode Stats Section */}
              <div className="stats shadow-lg glassmorphism transition duration-300 ease-in-out transform flex flex-col gap-6 justify-center items-center h-[40vh] lg:w-[35vw] p-6 max-lg:w-[86vw] bg-[#1a1a40]/60 border border-[#6f00ff]/50">
                <div className="text-2xl font-bold">LeetCode Stats</div>
                <div className="data flex justify-center w-full items-center">
                  <div className="flex justify-center m-4 items-center h-auto progresBar">
                    <ProgressBar percentage={50} />
                  </div>
                  {/* <div className="stats w-40">
                    <ul className="flex flex-col justify-center items-center gap-3 text-lg">
                      {['Easy', 'Medium', 'Hard'].map((level) => (
                        <div key={level} className="flex flex-col items-center">
                          <li className={`font-bold ${level === 'Easy' ? 'text-[#80aee3]' : level === 'Medium' ? 'text-[#d4db46]' : 'text-red-500'}`}>
                            {level}
                          </li>
                          <li className="text-white">
                            {leetcodeStats[level].solved}/{leetcodeStats[level].total}
                          </li>
                        </div>
                      ))}
                    </ul>
                  </div> */}
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-6 justify-center ">
                <div className="stats  shadow-lg glassmorphism transition duration-300 ease-in-out transform flex flex-col gap-6 justify-center items-center h-[40vh] lg:w-[35vw] p-6 max-lg:w-[86vw] bg-[#1a1a40]/60 border border-[#6f00ff]/50">
                  <div className="text-2xl font-bold ">LinkedIN</div>
                  <div className="data inter flex justify-center w-full items-center">
                    coming...
                  </div>
                </div>
              </div>
            </div>

            {/* Weekly Questions Section */}
            <div className="questions  w-full shadow-lg transition duration-300 ease-in-out transform flex flex-col items-center max-lg:w-[86vw] lg:h-[37vh] glassmorphism bg-[#1a1a40]/60 border border-[#6f00ff]/50">
              <div className="text-2xl font-bold p-4 ">Weekly Questions</div>
              <hr className=" w-[95%] " />
              <div className="lg:overflow-y-auto lg:h-[25vh] px-5 w-full hide-scrollbar">
                <ul className="flex flex-col gap-4 justify-start items-start text-lg w-full p-6">
                  {/* Weekly questions list will be dynamically generated here */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
