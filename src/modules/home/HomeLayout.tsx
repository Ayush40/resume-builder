import { NavBarActions, StyledButton } from '../builder/nav-bar/atoms';
import { motion, useAnimation } from 'framer-motion';
import { BsGithub } from 'react-icons/bs';
import { Button } from '@mui/material';
import FeatureSection from './components/Feature';
import Image from 'next/image';
import Link from 'next/link';
import Person from './components/Person';

const HomeLayout = () => {
  const controls = useAnimation();
  const animationEffectsHoverEnter = { scale: 1.05 };
  const animationEffectsHoverLeave = { scale: 1 };
  const animationEffectsFirstLoad = {
    scale: [0.9, 1],
    opacity: [0, 1],
  };
  const transtionEffects = {
    type: 'spring',
    stiffness: 400,
    damping: 17,
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }} className="scroll-smooth">
      {/* Navbar */}
      <nav className="sticky top-0 z-20 h-14 w-full bg-resume-800 flex py-2.5 px-4 xl:px-600 items-center shadow-level-8dp">
        <Link href="/">
          <Image src={'/icons/resume-icon.png'} alt="logo" height="36" width="36" />
        </Link>
        <div className="flex-auto flex justify-between items-center ml-5">
          <NavBarActions>
            <Link href="/builder" passHref={true}>
              <StyledButton variant="text">NexCV</StyledButton>
            </Link>
          </NavBarActions>
          <NavBarActions>
            <Link href="#features" passHref={true}>
              <StyledButton variant="text" className="max-md:hidden">
                Features
              </StyledButton>
            </Link>
            <Link href="#about-us" passHref={true}>
              <StyledButton variant="text">About us</StyledButton>
            </Link>
            <a
              href={'https://github.com/Ayush40/resume-builder'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub className="h-6 w-6" fill="white" />
            </a>
          </NavBarActions>
        </div>
      </nav>

      {/* Main Content */}
      <div
        style={{
          background: 'linear-gradient(180deg, #E7EEFA 50%, #FFFFFF 100%)',
          fontFamily: "'Roboto Slab', serif",
        }}
      >
        <div className="mx-6 md:mx-40 xl:mx-60 mb-6">
          <motion.div
            className="grid grid-cols-12 pt-12 md:pt-24"
            initial={{ opacity: 0 }}
            animate={animationEffectsFirstLoad}
            transition={transtionEffects}
          >
            <div className="col-span-12 sm:col-span-4">
              <motion.img
                id="resume-3d"
                src="/resume.webp"
                alt="resume-3d"
                className="w-6/12 sm:w-9/12"
                onMouseEnter={() => {
                  controls.start(animationEffectsHoverEnter, transtionEffects);
                }}
                onMouseLeave={() => {
                  controls.start(animationEffectsHoverLeave, transtionEffects);
                }}
                animate={controls}
              />
            </div>
            <div className="col-span-12 sm:col-span-8">
              <h3 className="text-xl md:text-5xl mb-2 text-resume-400">SIMPLEST WAY TO BUILD A</h3>
              <h1 className="text-5xl mb-12 text-resume-800">Professional Resume</h1>

              <div className="flex mb-10">
                <div className="bg-resume-800 w-1 rounded-lg"></div>
                <p className="text-xl ml-3 text-resume-800">
                  &ldquo;The secret to getting ahead is getting started&rdquo;
                  <br />
                  —Mark Twain
                </p>
              </div>
              <Link href="/builder" passHref={true}>
              <Button
  variant="contained"
  className="bg-resume-800 mb-2 mt-4"
  style={{
    backgroundColor: '#3498db', // Customize your background color
    color: 'white',
    padding: '16px 32px',       // Increase padding for a bigger button
    fontSize: '18px',           // Increase font size
    borderRadius: '5px',        // Customize border radius
    transition: 'transform 0.3s ease-in-out, background-color 0.3s', // Smooth animation
    cursor: 'pointer',          // Change cursor on hover
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = '#2980b9'; // Change background color on hover
    e.currentTarget.style.transform = 'scale(1.1)';      // Scale the button slightly on hover
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = '#3498db'; // Reset background color
    e.currentTarget.style.transform = 'scale(1)';      // Reset scale
  }}
>
  BUILD YOUR RESUME
</Button>
              </Link>
              <p
                className="xl:invisible text-resume-800"
                style={{ fontFamily: "'Roboto Slab', serif" }}
              >
                Desktop screen recommended
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Feature Section */}
      <motion.div
        className="mx-6 md:mx-40 xl:mx-60 my-32 w-75"
        style={{ fontFamily: "'Roboto Slab', serif" }}
        initial={{ opacity: 0 }}
        animate={animationEffectsFirstLoad}
        transition={transtionEffects}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FeatureSection />
        </div>
      </motion.div>
      <div className="bg-resume-50 my-32">
        <div
          id="features"
          className="mx-6 md:mx-40 xl:mx-60 py-12"
          style={{ fontFamily: "'Roboto Slab', serif" }}
        >
          <div className="grid grid-cols-12 items-center text-center">
            <div className="col-span-12 lg:col-span-4 mb-4 lg:mb-0 flex flex-col items-center gap-2">
              <Image src={'/icons/palette.svg'} alt="logo" height="48" width="48" />
              <p className="text-resume-800 text-xl mt-2">
                <strong>Creativity</strong>
              </p>
            </div>
            <div className="col-span-12 lg:col-span-1 mb-4 lg:mb-0 text-resume-800 text-4xl">
              <p>+</p>
            </div>
            <div className="col-span-12 lg:col-span-2 flex flex-col items-center gap-2">
              <Image src={'/icons/terminal.svg'} alt="logo" height="48" width="48" />
              <p className="text-resume-800 text-xl mt-2">
                <strong>Code</strong>
              </p>
            </div>
            <div className="invisible lg:visible lg:col-span-2 text-resume-800 text-4xl mx-6">
              <p>=</p>
            </div>
            <div className="col-span-12 lg:col-span-3 mx-auto flex flex-col items-center gap-2">
              <div className="mb-6">
                <Image src={'/icons/wave.svg'} alt="logo" height="48" width="48" />
              </div>
              <div>
                <a
                  href="https://github.com/Ayush40/resume-builder"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="contained" className="bg-resume-800 mt-2 lg:mt-5 mb-3">
                    CONTRIBUTE
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Us Section */}
      <div
        id="about-us"
        className="mx-6 md:mx-40 xl:mx-60 my-32"
        style={{ fontFamily: "'Roboto Slab', serif" }}
      >
        <h2 className="text-resume-800 text-3xl mb-2 text-center lg:text-left">About us</h2>
        <p className="text-resume-400 mb-8 text-center lg:text-left">
          A bunch of developers and designers — who love to build open source projects and learn
          along!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Person />
        </div>

      </div>

      {/* Footer Section */}
      <footer className="bg-resume-800 text-white py-8 mt-16">
        <div className="mx-6 md:mx-40 xl:mx-60">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1">
              <h3 className="text-xl font-bold mb-2">Company</h3>
              <ul>
                <li className="mb-1">
                  <Link href="#" passHref>
                    About Us
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="#" passHref>
                    Careers
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="#" passHref>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h3 className="text-xl font-bold mb-2">Support</h3>
              <ul>
                <li className="mb-1">
                  <Link href="#" passHref>
                    Help Center
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="#" passHref>
                    FAQs
                  </Link>
                </li>
                <li className="mb-1">
                  <Link href="#" passHref>
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h3 className="text-xl font-bold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <BsGithub className="h-6 w-6" />
                </a>
                {/* Add more social icons as needed if needed*/}
              </div>
            </div>
          </div>
          <p className="mt-8 text-center text-sm">
            &copy; {new Date().getFullYear()} NexCV. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default HomeLayout;
