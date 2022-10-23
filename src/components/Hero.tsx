import type { FunctionComponent } from 'react';
import HeroImage from '../assets/desk.webp';

interface HeroProps {}

const Hero: FunctionComponent<HeroProps> = () => {
  return (
    <section className="">
      <div className="relative text-center -mt-6">
        <img
          src={HeroImage}
          alt="my desk"
          className="min-w-full h-96 object-cover opacity-50"
        />
        <div className="top-0 absolute h-full w-full flex items-center justify-center">
          <h1 className="text-4xl font-bold">
            A Site about the tech <span className="text-orange-400">I use</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
