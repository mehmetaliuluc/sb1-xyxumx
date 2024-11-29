import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, ArrowRight } from 'lucide-react';
import { useAuth } from '../lib/hooks/useAuth';
import FloatingElements from './3d/FloatingElements';
import ImageCard from './common/ImageCard';
import TokenInfo from './common/TokenInfo';

const images = [
  "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80",
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
];

const gridImages = [
  {
    url: "https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Blockchain Education",
    description: "Empowering communities through blockchain knowledge"
  },
  {
    url: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Environmental Impact",
    description: "Creating sustainable change for our planet"
  },
  {
    url: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Nature Conservation",
    description: "Preserving ecosystems for future generations"
  }
];

interface HeroProps {
  onLaunchClick: (e: React.MouseEvent) => void;
}

export default function Hero({ onLaunchClick }: HeroProps) {
  const [currentImage, setCurrentImage] = React.useState(0);
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const { user } = useAuth();

  const handleJoinMission = () => {
    if (user) {
      window.location.href = '/profile';
    } else {
      const signupSection = document.querySelector('#signup');
      if (signupSection) {
        signupSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLearnMore = () => {
    const featuresSection = document.querySelector('#features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-emerald-900 via-emerald-800 to-emerald-900">
      <FloatingElements />
      
      <div className="relative max-w-7xl mx-auto pt-20 pb-32 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-6">
              <Sprout className="h-10 w-10 text-emerald-400" />
              <h1 className="ml-4 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                Transforming Nature Through Blockchain
              </h1>
            </div>
            
            <p className="mt-6 text-lg sm:text-xl text-gray-300">
              AwarenessCoin (AWC) connects blockchain technology with environmental restoration. 
              We're dedicated to beautifying nature while educating communities about the transformative 
              power of decentralized technology.
            </p>

            <div className="mt-6">
              <TokenInfo colorScheme="dark" />
            </div>

            <div className="mt-10 flex gap-4">
              <motion.button
                onClick={handleJoinMission}
                className="inline-flex items-center px-4 sm:px-8 py-3 sm:py-4 border border-transparent text-sm sm:text-base font-medium rounded-xl text-emerald-900 bg-emerald-400 hover:bg-emerald-300 shadow-lg shadow-emerald-500/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Our Mission
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </motion.button>

              <motion.button
                onClick={handleLearnMore}
                className="inline-flex items-center px-8 py-4 border-2 border-emerald-400 text-base font-medium rounded-xl text-emerald-400 hover:bg-emerald-500/10 md:py-4 md:text-lg md:px-10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              <div className="bg-emerald-800/50 rounded-lg p-4 backdrop-blur-sm">
                <h3 className="text-emerald-400 font-semibold">Trees Planted</h3>
                <p className="text-2xl font-bold text-white">0</p>
              </div>
              <div className="bg-emerald-800/50 rounded-lg p-4 backdrop-blur-sm">
                <h3 className="text-emerald-400 font-semibold">Community Members</h3>
                <p className="text-2xl font-bold text-white">6</p>
              </div>
              <div className="bg-emerald-800/50 rounded-lg p-4 backdrop-blur-sm">
                <h3 className="text-emerald-400 font-semibold">Countries</h3>
                <p className="text-2xl font-bold text-white">24</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="lg:w-1/2 mt-16 lg:mt-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl"
          >
            {images.map((image, index) => (
              <motion.div
                key={image}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: currentImage === index ? 1 : 0 }}
                transition={{ duration: 1 }}
              >
                <img
                  src={image}
                  alt={`Nature ${index + 1}`}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </motion.div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent pointer-events-none" />
            
            {/* Navigation dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentImage === index 
                      ? 'bg-emerald-400 w-4'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Image Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {gridImages.map((image, index) => (
            <ImageCard
              key={index}
              {...image}
              index={index}
              isHovered={hoveredIndex === index}
              onHover={setHoveredIndex}
            />
          ))}
        </motion.div>
      </div>

      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 blur-3xl opacity-20">
        <div className="aspect-[1200/800] w-[600px] bg-gradient-to-br from-emerald-400 to-green-500" />
      </div>
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 blur-3xl opacity-20">
        <div className="aspect-[1200/800] w-[600px] bg-gradient-to-tr from-green-400 to-emerald-500" />
      </div>
    </div>
  );
}