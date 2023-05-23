import Feed from "@components/Feed";
import Image from "next/image";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      The Evolution Of 
         Creativity
      <br className='max-md:hidden' />
      <span className='green_gradient text-center'> Game Prompts</span>
    </h1>
   
    <p className='desc text-center'>      
      <span className=' text-center'> Find & Share Ideas</span>
      
    </p>

    <Feed />
  </section>
);

export default Home;