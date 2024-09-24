'use client'
import React from 'react';
import { Calendar, Mail, Users, FileText, Award, CheckSquare, Image, ChevronRight, MessageCircle, Instagram } from 'lucide-react';
import FetchCSVData from '../FetchCSVData';

const HomePage = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 min-h-screen font-sans">
      <Header />
      <HeroSection />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <NextMeeting />
        <NextCompetition />
      </div>
      <QuickLinks />
      <GoogleSlides />
      <ContactUs />
      <Officers />
      <Awards />
      <PhotoGallery />
      <Footer />
    </div>
  );
};

const Header = () => (
  <header className="bg-gradient-to-r from-[#0a2e7f] to-[#1d52bc] text-white p-4 shadow-lg fixed w-full z-50">
    <div className="container mx-auto flex justify-between items-center">
      <a href="#">
        <h1 className="text-3xl font-bold italic">FHS <span className="text-[#f4ab19]">FBLA</span></h1>
      </a>
      
      <nav>
        <ul className="flex space-x-6">
          {['Slides', 'Contact Us', 'Officers', 'Awards', 'Photos'].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-[#f4ab19] transition duration-300 ease-in-out transform hover:scale-110 inline-block">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);

const HeroSection = () => (
  <section className="relative h-screen bg-cover bg-center overflow-hidden" style={{backgroundImage: "url('/api/placeholder/1200/800')"}}>
    <div className="absolute inset-0 bg-gradient-to-r from-[#0a2e7f]/80 to-[#1d52bc]/80 flex items-center justify-center">
      <div className="text-center space-y-6">
        <h2 className="text-white text-6xl font-bold leading-tight">
          Welcome to <br />
          <span className="text-[#f4ab19]">Fremont High School FBLA</span>
        </h2>
        <p className="text-white text-xl max-w-2xl mx-auto">Empowering future business leaders through education, innovation, and community service.</p>
        <a href="#contact us" className="inline-block bg-[#f4ab19] text-[#0a2e7f] px-8 py-3 rounded-full text-lg font-semibold hover:bg-white transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
          Join Us Today
        </a>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
  </section>
);

const NextMeeting = () => (
  <section id="next-meeting" className="bg-white py-16 relative overflow-hidden">
    <div className="container mx-auto text-center relative z-10">
      <h2 className="text-4xl font-bold mb-4 text-[#0a2e7f]">Next Meeting</h2>
      <p className="text-5xl font-bold text-[#1d52bc]">September 30, 2024</p>
      <p className="text-2xl mt-2 text-gray-600">3:30 PM - Fair Oaks Room</p>
      <a href="#" className="mt-6 inline-flex items-center text-[#f4ab19] hover:text-[#0a2e7f] transition duration-300">
        Add to calendar <ChevronRight className="ml-2" />
      </a>
    </div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#f4ab19] opacity-5 rounded-full"></div>
  </section>
);

const NextCompetition = () => (
    <section id="next-competition" className="bg-white py-16 relative overflow-hidden">
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold mb-4 text-[#0a2e7f]">Next Competition</h2>
        <p className="text-5xl font-bold text-[#1d52bc]">April ___ 2025</p>
        <p className="text-2xl mt-2 text-gray-600">Annahiem, California</p>
        <a href="#" className="mt-6 inline-flex items-center text-[#f4ab19] hover:text-[#0a2e7f] transition duration-300">
          Add to calendar <ChevronRight className="ml-2" />
        </a>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#f4ab19] opacity-5 rounded-full"></div>
    </section>
  );

const QuickLinks = () => (
  <section id="quick-links" className="py-20 bg-gradient-to-b from-gray-100 to-white">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-[#0a2e7f]">Quick Links</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <QuickLink icon={<Calendar size={32} />} title="Meeting Slides" link="#slides" />
        <QuickLink icon={<Mail size={32} />} title="Contact Us" link="#contact%20us" />
        <QuickLink icon={<Users size={32} />} title="Our Officers" link="#officers" />
        <QuickLink icon={<FileText size={32} />} title="Resource Drive" link="#" />
        <QuickLink icon={<Award size={32} />} title="Awards" link="#awards" />
        <QuickLink icon={<CheckSquare size={32} />} title="Attendance" link="#" />
      </div>
    </div>
  </section>
);

const GoogleSlides = () => (
  <section id="slides" className="py-20 bg-white">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-[#0a2e7f]">Meeting Slides</h2>
      <div className="aspect-w-16 aspect-h-9">
        {FetchCSVData("https://docs.google.com/spreadsheets/d/1ztNKwi5ccjk3JbPxJTExQ4ifN1w4A9t7TSgdYkWwM34/pub?output=csv").map((link) =>
            <iframe 
                src={link['link']}
                frameBorder="0" 
                width="100%" 
                height="569" 
                allowFullScreen={true}
            ></iframe>
        )}
      </div>
    </div>
  </section>
);


const ContactUs = () => (
    <section id="contact us" className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#0a2e7f]">Contact Us</h2>
        {FetchCSVData('https://docs.google.com/spreadsheets/d/13wP7fcFZSnfZxrsDVAhcbEc16gLS8eD7mZx1vo5JtTA/pub?output=csv').map((contact) => (   
            <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
                <ContactItem 
                    icon={<Mail size={48} />}
                    title="Email"
                    content={contact['email']}
                    link={"mailto:" + contact['email']}
                />
                <ContactItem 
                    icon={<Instagram size={48} />}
                    title="Instagram"
                    content={"@" + contact['instagram']}
                    link={"https://www.instagram.com/" + contact['instagram']}
                />
                <ContactItem 
                    icon={<MessageCircle size={48} />}
                    title="Discord"
                    content="Join our server"
                    link={"" + contact['discord']}
                />
            </div>
          ))}
        </div>
    </section>
  );
  
  const ContactItem = ({ icon, title, content, link }: { icon: any, title: string, content: string, link: string}) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 group">
      <div className="mb-4 text-[#1d52bc] group-hover:text-[#f4ab19] transition duration-300 transform group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-[#0a2e7f] mb-2">{title}</h3>
      <p className="text-[#1d52bc] group-hover:text-[#f4ab19] transition duration-300">{content}</p>
    </a>
  );


const Officers = () => (
  <section id="officers" className="py-20 bg-gradient-to-b from-white to-gray-100">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-[#0a2e7f]">Our Officers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FetchCSVData('https://docs.google.com/spreadsheets/d/1CQohBZDjEJXobyjHh9X-VyeBx8D8CXJ_sCL-ujLCpoM/pub?output=csv').map((officer, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
              <img src={"https://drive.google.com/thumbnail?id=" + officer['imageId']} alt={officer['name']} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-semibold text-[#0a2e7f]">{officer['name']}</h3>
            <p className="text-[#1d52bc]">{officer['role']}</p>
            <a href={`mailto:${officer['email']}`} className="text-[#f4ab19] hover:underline">{officer['email']}</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Awards = () => (
  <section id="awards" className="py-20 bg-white">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-[#0a2e7f]">Awards</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FetchCSVData('https://docs.google.com/spreadsheets/d/1q6g5_tvcxn9L-05SRvS7TSEsqBkk0K8FeMUFu7C6K8Q/pub?output=csv').map((person, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#0a2e7f] mb-2">{person['name']}</h3>
            <ul className="list-disc list-inside text-[#1d52bc]">
              {person['awards']}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const PhotoGallery = () => (
  <section id="photos" className="py-20 bg-gradient-to-b from-white to-gray-100">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-[#0a2e7f]">Capturing Moments</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {FetchCSVData("https://docs.google.com/spreadsheets/d/1pB3eSUzYCRNd6IcE35n20WsgQ4WLvDdqPI1AJ-AoZ14/pub?output=csv").map((image, i) => (
          <div key={i} className="group relative overflow-hidden rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            <img src={image['url']} alt={image['url']} className="w-full h-full object-cover transition duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a2e7f] to-transparent opacity-0 group-hover:opacity-70 transition duration-300"></div>
            <p className="absolute bottom-4 left-4 text-white font-semibold opacity-0 group-hover:opacity-100 transition duration-300">Photo {i+1}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <a href="#" className="inline-block bg-[#0a2e7f] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#1d52bc] transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
          View All Photos
        </a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-gradient-to-r from-[#0a2e7f] to-[#1d52bc] text-white py-12">
    <div className="container mx-auto text-center">
      <h3 className="text-2xl font-bold mb-4">Fremont High School FBLA</h3>
      <p className="mb-6">Preparing students for careers in business, entrepreneurship, and technology.</p>
      <div className="flex justify-center space-x-6 mb-8">
        {[Calendar, Mail, Users, FileText, Award, CheckSquare, Image].map((Icon, index) => (
          <a key={index} href="#" className="text-white hover:text-[#f4ab19] transition duration-300">
            <Icon size={24} />
          </a>
        ))}
      </div>
      <p className="text-sm text-gray-300">&copy; 2024 Fremont High School FBLA. All rights reserved.</p>
    </div>
  </footer>
);

const QuickLink = ({ icon, title, link }: {icon: React.ReactNode, title: string, link: string}) => (
  <a href={link} className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 group">
    <div className="mb-4 text-[#1d52bc] group-hover:text-[#f4ab19] transition duration-300 transform group-hover:scale-110">
      {icon}
    </div>
    <h3 className="font-semibold text-lg text-[#0a2e7f] group-hover:text-[#1d52bc] transition duration-300">
      {title}
    </h3>
  </a>
);

export default HomePage;
