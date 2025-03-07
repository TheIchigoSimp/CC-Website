import React from 'react';
import crossroads from '../Images/crossroads.jpg'; // Make sure this path is correct

const Home = () => {
  return (
    <>
      {/* background */}
      <div className="fixed w-full h-full z-[1]"></div>
      
      {/* content */}
      <div className="flex flex-col bg-[#141327] items-center gap-10 m-auto w-[80%] justify-center h-[50%] text-white">
        <div className="text-2xl font-bold mt-10">
          <h1>DISCORD COMMUNITY</h1>
        </div>

        {/* Content Wrapper */}
        <div className="flex max-lg:flex-col lg:flex-row lg:w-[60vw] max-lg:w-[80vw] pt-2 pb-10 max-lg:p-7 glassmorphism gap-8 items-center justify-center">
          
          {/* Text Section */}
          <div className="lg:w-[50%]">
            <h1 className="font-bold text-lg py-2">
              Fundamental Skills and Techniques
            </h1>
            <p className="text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, laboriosam. Pariatur ducimus?
            </p>
            <br />
            <h1 className="text-lg font-bold py-2">
              Advanced Learning Paths
            </h1>
            <p className="text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste eaque voluptatibus praesentium impedit autem dignissimos modi quam voluptatum iure inventore nam voluptatem, accusamus cumque rem ea sit. Velit, veniam ut.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative lg:w-[50%] flex justify-center">
            <img className="lg:w-[300px] lg:h-[300px] max-lg:w-[80%] max-lg:h-[200px] object-cover rounded-lg shadow-lg" src={crossroads} alt="Community" />
          </div>

        </div>
      </div>
    </>
  );
};

export default Home;
