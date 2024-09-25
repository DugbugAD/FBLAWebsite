// @ts-nocheck

import React, { useState, useEffect } from 'react';
import { Calendar, Mail, Users, FileText, Award, CheckSquare, Image, ChevronRight, MessageCircle, Instagram, ArrowRight, ExternalLink, Album } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import FetchCSVData from '../FetchCSVData';


const HomePage = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 min-h-screen font-sans">
      <Header />
      <HeroSection />
      <UpcomingEvents />
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

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <motion.a 
          href="#" 
          className="text-3xl font-bold italic"
          whileHover={{ scale: 1.05 }}
        >
          <span className={isScrolled ? 'text-[#0a2e7f]' : 'text-white'}>Fremont </span>
          <span className="text-[#f4ab19]">FBLA</span>
        </motion.a>
        
        <nav>
          <ul className="flex space-x-6">
            {['Events', 'Links', 'Slides', 'Contact', 'Officers', 'Awards', 'Photos'].map((item) => (
              <motion.li key={item} whileHover={{ scale: 1.1 }}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className={`transition duration-300 ease-in-out ${
                    isScrolled ? 'text-[#0a2e7f] hover:text-[#f4ab19]' : 'text-white hover:text-[#f4ab19]'
                  }`}
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

const HeroSection = () => (
  <section className="relative h-screen bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/pw/AP1GczO2WgF8L88xflKsFiHFsvAnL1M-n1ePLpRXvxqaR7MsURpsr_hDDnatHy-vVBibhjqoMzPK1ZIVft2egcKmX6E_JZOb-BjUCO3la6HS3qBE9LAgAVumUYrqNr9ohLbm1wxNj44tEDar5Ss9pFha-zKR=w2152-h1434-s-no-gm?authuser=0')" }}>
    <div className="absolute inset-0 bg-[#0a2e7f]/80 flex items-center justify-center">
      <motion.div
        className="text-center space-y-8 max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-white text-6xl font-bold leading-tight">
          Welcome to <br />
          <span className="text-[#f4ab19]">Fremont High School FBLA testest</span>
        </h1>
        <p className="text-gray-200 text-xl max-w-2xl mx-auto">Official FBLA Chapter of Fremont High School, Sunnyvale California</p>
        {FetchCSVData('https://docs.google.com/spreadsheets/d/13wP7fcFZSnfZxrsDVAhcbEc16gLS8eD7mZx1vo5JtTA/pub?output=csv').map((contact) => (
          <motion.a 
            href={contact['discord']} 
            className="inline-block bg-[#f4ab19] text-[#0a2e7f] px-10 py-4 rounded-full text-xl font-semibold hover:bg-white transition duration-300 ease-in-out shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Us Today
          </motion.a>
        ))}
      </motion.div>
    </div>
  </section>
);

const UpcomingEvents = () => (
  <section id="events" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-5xl font-bold text-center mb-16 text-[#0a2e7f]">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {FetchCSVData("https://docs.google.com/spreadsheets/d/1IsJDLTo6bYYRyi1sH-TibDxPhZI62evQsK9-phomnP0/pub?output=csv").map((event) => 
          <EventCard 
            title="Next Meeting" 
            date={event['month'] + " " + event['day'] + ", " + event['year']}
            time={event['time']}
            location={event['location']}
          />
        )}
        {FetchCSVData("https://docs.google.com/spreadsheets/d/1GI5S3maLWziDzYv9Sw9hSp5eKJWSbYGdYYxhp_K3_BI/pub?output=csv").map((event) =>
          <EventCard 
            title="Next Competition" 
            date={event['date'] + ", " + event['year']}
            time="All Day"
            location={event['location']}
          />
        )}
      </div>
    </div>
  </section>
);

const EventCard = ({ title, date, time, location }: {title: any, date: any, time: any, location: any}) => (
  <motion.div 
    className="bg-gradient-to-br from-[#0a2e7f] to-[#1d52bc] p-8 rounded-3xl shadow-xl text-white relative overflow-hidden"
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 300, damping: 10 }}
  >
    <h3 className="text-3xl font-bold mb-4">{title}</h3>
    <p className="text-4xl font-bold mb-2">{date}</p>
    <p className="text-xl mb-1">{time}</p>
    <p className="text-xl">{location}</p>
    <div className="absolute top-0 right-0 w-24 h-24 bg-[#f4ab19] opacity-10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#f4ab19] opacity-10 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
  </motion.div>
);

const QuickLinks = () => (
  <section id="links" className="py-20 bg-gradient-to-b from-gray-100 to-white">
    <div className="container mx-auto px-4">
      <h2 className="text-5xl font-bold text-center mb-16 text-[#0a2e7f]">Quick Links</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <QuickLink icon={<Calendar size={32} />} title="Meeting Slides" link="#slides" />
        <QuickLink icon={<Mail size={32} />} title="Contact Us" link="#contact" />
        <QuickLink icon={<Users size={32} />} title="Our Officers" link="#officers" />
        {FetchCSVData("https://docs.google.com/spreadsheets/d/1hrTnkmWGM2QIYgCtNVuHVtLezO8LUtWODw88Y9MsqaQ/pub?output=csv").map((x) => 
          <QuickLink icon={<FileText size={32} />} title="Resource Drive" link={x['link']} />
        )}
        <QuickLink icon={<Award size={32} />} title="Awards" link="#awards" />
        {FetchCSVData("https://docs.google.com/spreadsheets/d/1xUz1x5vxx7_XyY4RAdFlgF-x9LbQ_k6SFgyrNmIbWfc/pub?output=csv").map((x) => 
          <QuickLink icon={<CheckSquare size={32} />} title="Attendance" link={x['link']} />
        )}
      </div>
    </div>
  </section>
);

const QuickLink = ({ icon, title, link }: { icon: any, title: any, link: any}) => (
  <motion.a 
    href={link} 
    className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 group"
    whileHover={{ y: -5 }}
  >
    <motion.div 
      className="mb-6 text-[#1d52bc] group-hover:text-[#f4ab19] transition duration-300"
      whileHover={{ scale: 1.1, rotate: 360 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      {icon}
    </motion.div>
    <h3 className="font-semibold text-xl text-[#0a2e7f] group-hover:text-[#1d52bc] transition duration-300">
      {title}
    </h3>
  </motion.a>
);

const GoogleSlides = () => (
  <section id="slides" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-5xl font-bold text-center mb-16 text-[#0a2e7f]">Meeting Slides</h2>
      <motion.div 
        className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl h-[600px]"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      >
        {FetchCSVData("https://docs.google.com/spreadsheets/d/1ztNKwi5ccjk3JbPxJTExQ4ifN1w4A9t7TSgdYkWwM34/pub?output=csv").map((link) => (
          <iframe 
            key={link['link']}
            src={link['link']}
            frameBorder="0" 
            width="100%" 
            height="100%" 
            allowFullScreen={true}
          ></iframe>
        ))}
      </motion.div>
    </div>
  </section>
);

const ContactUs = () => (
  <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-5xl font-bold text-center mb-16 text-[#0a2e7f]">Contact Us</h2>
      <div className="flex flex-col md:flex-row justify-center items-stretch space-y-8 md:space-y-0 md:space-x-12">
        {FetchCSVData('https://docs.google.com/spreadsheets/d/13wP7fcFZSnfZxrsDVAhcbEc16gLS8eD7mZx1vo5JtTA/pub?output=csv').map((contact) => (   
          <>
            <ContactItem 
              icon={<Mail size={48} />}
              title="Email"
              content={contact['email']}
              link={`mailto:${contact['email']}`}
            />
            <ContactItem 
              icon={<Instagram size={48} />}
              title="Instagram"
              content={`@${contact['instagram']}`}
              link={`https://www.instagram.com/${contact['instagram']}`}
            />
            <ContactItem 
              icon={<MessageCircle size={48} />}
              title="Discord"
              content="Join our server"
              link={contact['discord']}
            />
          </>
        ))}
      </div>
    </div>
  </section>
);

const ContactItem = ({ icon, title, content, link }: { icon: any, title: any, content: any, link: any}) => (
  <motion.a 
    href={link} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 group flex-1"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300, damping: 10 }}
  >
    <motion.div 
      className="mb-6 text-[#1d52bc] group-hover:text-[#f4ab19] transition duration-300"
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.5 }}
    >
      {icon}
    </motion.div>
    <h3 className="text-2xl font-semibold text-[#0a2e7f] mb-2">{title}</h3>
    <p className="text-[#1d52bc] group-hover:text-[#f4ab19] transition duration-300 text-lg">{content}</p>
  </motion.a>
);

const Officers = () => (
  <section id="officers" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-5xl font-bold text-center mb-16 text-[#0a2e7f]">Our Officers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {FetchCSVData('https://docs.google.com/spreadsheets/d/1CQohBZDjEJXobyjHh9X-VyeBx8D8CXJ_sCL-ujLCpoM/pub?output=csv').map((officer, index) => (
          <OfficerCard key={index} officer={officer} />
        ))}
      </div>
    </div>
  </section>
);

const OfficerCard = ({ officer }: { officer: any}) => (
  <motion.div 
    className="flex flex-col items-center"
    whileHover={{ y: -10 }}
    transition={{ type: "spring", stiffness: 300, damping: 10 }}
  >
    <div className="w-48 h-48 rounded-full overflow-hidden mb-6 shadow-lg">
      <img src={officer['imageId']} alt={officer['name']} className="w-full h-full object-cover" />
    </div>
    <h3 className="text-2xl font-semibold text-[#0a2e7f] mb-2">{officer['name']}</h3>
    <p className="text-[#1d52bc] text-lg mb-2">{officer['role']}</p>
    <a href={`mailto:${officer['email']}`} className="text-[#f4ab19] hover:underline text-lg">{officer['email']}</a>
  </motion.div>
);

const Awards = () => (
  <section id="awards" className="py-20 bg-gradient-to-b from-white to-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-5xl font-bold text-center mb-16 text-[#0a2e7f]">Awards Showcase</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {FetchCSVData('https://docs.google.com/spreadsheets/d/1q6g5_tvcxn9L-05SRvS7TSEsqBkk0K8FeMUFu7C6K8Q/pub?output=csv').map((person, index) => (
          <AwardCard key={index} person={person} />
        ))}
      </div>
    </div>
  </section>
);

const AwardCard = ({ person }: { person: any }) => (
  <motion.div 
    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
    whileHover={{ y: -5 }}
    transition={{ type: "spring", stiffness: 300, damping: 10 }}
  >
    <h3 className="text-2xl font-semibold text-[#0a2e7f] mb-4">{person['name']}</h3>
    <ul className="space-y-2">
      {person['awards'].split(',').map((award: any, index: any) => (
        <motion.li 
          key={index} 
          className="flex items-start"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Award className="text-[#f4ab19] mr-2 flex-shrink-0 mt-1" size={20} />
          <span className="text-[#1d52bc]">{award.trim()}</span>
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

const PhotoGallery = () => (
  <section id="photos" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-5xl font-bold text-center mb-16 text-[#0a2e7f]">Capturing Moments</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {FetchCSVData("https://docs.google.com/spreadsheets/d/1pB3eSUzYCRNd6IcE35n20WsgQ4WLvDdqPI1AJ-AoZ14/pub?output=csv").map((image, i) => (
          <GalleryImage key={i} image={image} index={i} />
        ))}
      </div>
      <div className="text-center mt-12">
        {FetchCSVData("https://docs.google.com/spreadsheets/d/1_jq_S_Krd6WHQH_2MMJcufx8Vw7DjN650sYRDejupQ4/pub?output=csv").map((album) => (
          <motion.a 
            href={album['link']} 
            className="inline-block bg-[#0a2e7f] text-white px-10 py-4 rounded-full text-xl font-semibold hover:bg-[#1d52bc] transition duration-300 ease-in-out shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Photos
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

const GalleryImage = ({ image, index }: { image: any, index: any }) => (
  <motion.div 
    className="group relative overflow-hidden rounded-2xl shadow-lg"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300, damping: 10 }}
  >
    <img src={image['url']} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover transition duration-300 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-[#0a2e7f] to-transparent opacity-0 group-hover:opacity-70 transition duration-300 flex items-end justify-start p-4">
      <p className="text-white font-semibold opacity-0 group-hover:opacity-100 transition duration-300 transform translate-y-2 group-hover:translate-y-0">
        Photo {index + 1}
      </p>
    </div>
  </motion.div>
);

const Footer = () => (
  <footer className="bg-gradient-to-r from-[#0a2e7f] to-[#1d52bc] text-white py-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="text-center md:text-left">
          <h3 className="text-3xl font-bold mb-4">Fremont FBLA</h3>
          <p className="mb-6">Preparing students for careers in business, entrepreneurship, and technology.</p>
        </div>
        <div className="text-center">
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {['Events', 'Links', 'Slides', 'Contact', 'Officers', 'Awards', 'Photos'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-[#f4ab19] transition duration-300">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center md:text-right">
          <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
          <div className="flex justify-center md:justify-end space-x-4">
            {[Instagram, Mail, ExternalLink].map((Icon, index) => (
              <a key={index} href="#contact" className="text-white hover:text-[#f4ab19] transition duration-300">
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-white/20 text-center">
        <p className="text-sm text-gray-300">&copy; 2024 Fremont High School FBLA. All rights reserved. Website programmed and designed by Aditya Prakash.</p>
      </div>
    </div>
  </footer>
);

export default HomePage;