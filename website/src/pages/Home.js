import React from "react";
import 'animate.css';
import './styles/tailwind.css';

const sections = [
    {
      id: 1,
      backgroundImage: '/images/woman.webp',
      title: 'Ecommerce fulfillment made easy',
      description:
        'We make it easy to scale your ecommerce business. Spend less time on operations and more time growing your brand.',
      buttonText: 'Get started',
      buttonLink: '#',
    },
    {
        id: 2,
        title: 'Why Distroease?',
        description: 'Distroease offers scalable solutions, seamless integrations, and expert support to help your ecommerce business thrive.',
        features: [
          {
            imageUrl: '/images/shopping-cart.png',
            title: 'Scalable Ecommerce Solutions',
            description: 'Designed to grow with your business, Distroease offers powerful tools that handle increasing demands effortlessly.',
          },
        //   Image by Steve Buissinne from Pixabay
          {
            imageUrl: '/images/credit-cards.jpg',
            title: 'Seamless Stripe Integration',
            description: 'Simplify payments with our fully integrated Stripe solution, ensuring smooth transactions and a better customer experience.',
          },
        //   Photo by Buro Millennial: https://www.pexels.com/photo/selective-focus-photo-of-man-using-laptop-1438081/
          {
            imageUrl: '/images/man-laptop.jpg',
            title: 'User-Friendly Interface',
            description: 'Manage your ecommerce operations with ease using our intuitive and accessible interface.',
          },
          //   Karolina Kaboompics
          {
            imageUrl: '/images/finance.jpg',
            title: 'Comprehensive Analytics',
            description: 'Gain insights into your business with detailed analytics, helping you make informed decisions.',
          },
        //   Image by Gerd Altmann from Pixabay
          {
            imageUrl: '/images/global.jpg',
            title: 'Global Reach',
            description: 'Expand your business globally with our extensive network of fulfillment centers, ensuring fast and reliable deliveries.',
          },
         //   Brett Sayles
          {
            imageUrl: '/images/cloud.jpg',
            title: 'Reliable Security',
            description: 'Built on MongoDB, Distroease provides robust security and reliability, safeguarding your data.',
          },
        ],
      },      
    {
      id: 3,
      backgroundImage: '/images/distro-store.png',
      title: 'Ready to see Distroease in action?',
      buttonText: 'Watch a demo',
      buttonLink: '#',
    },
  ];
  

const Home = () => {
  return (
    <div className="px-4 sm:px-10 lg:px-40 py-5 flex justify-center">
      <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
        {sections.map((section) => (
          <div key={section.id} className="flex flex-col gap-10 py-10">
            {section.backgroundImage && (
              <div
                className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-start rounded-xl justify-end px-4 pb-10"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url(${section.backgroundImage})`,
                }}
                alt="Photo by Antoni Shkraba: https://www.pexels.com/photo/a-woman-using-a-smartphone-5244046/"
              >
                <div className="flex flex-col gap-2 text-left">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                    {section.title}
                  </h1>
                  <h2 className="text-white text-sm font-normal leading-normal">
                    {section.description}
                  </h2>
                </div>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#2094f3] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">{section.buttonText}</span>
                </button>
              </div>
            )}

            {!section.backgroundImage && (
              <div className="flex flex-col gap-6 items-start">
                <div className="flex flex-col gap-2 text-left">
                  <h1 className="text-[#0d151c] text-4xl font-black leading-tight tracking-[-0.033em]">
                    {section.title}
                  </h1>
                  <h2 className="text-[#0d151c] text-base font-normal leading-normal">
                    {section.description}
                  </h2>
                </div>
                {section.features && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {section.features.map((feature, index) => (
                      <div key={index} className="flex flex-col gap-3 pb-3">
                        <div
                          className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                          style={{ backgroundImage: `url(${feature.imageUrl})` }}
                        ></div>
                        <div>
                          <p className="text-[#0d151c] text-base font-medium leading-normal">
                            {feature.title}
                          </p>
                          <p className="text-[#49779c] text-sm font-normal leading-normal">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
