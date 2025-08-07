// src/components/BlogSection.js
import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaSearch } from 'react-icons/fa';
import pic1 from "../assets/pic1Blog.jpg";
import pic2 from "../assets/pic2Blog.jpg";
import pic3 from "../assets/pic3Blog.jpg";
import pic4 from "../assets/pic4Blog.jpg";
import pic5 from "../assets/pic5Blog.jpg";

// Mock data for the blog posts
const featuredPost = {
  category: 'Travel',
  title: 'A title to catch your readers attention',
  excerpt: 'A brief and compelling excerpt that summarizes the blog post content. It should be engaging and make the reader want to click and read more.',
  image: pic1,
};

const recentPosts = [
  {
    id: 1,
    title: 'How to master a new skill in 30 days',
    date: 'July 25, 2025',
    image: pic2,
  },
  {
    id: 2,
    title: 'A deep dive into the world of AI',
    date: 'July 20, 2025',
    image: pic3,
  },
  {
    id: 3,
    title: 'The ultimate guide to digital marketing',
    date: 'July 18, 2025',
    image: pic4,
  },
  {
    id: 4,
    title: 'Exploring the best destinations for foodies',
    date: 'July 15, 2025',
    image: pic5,
  },
];

// New SearchBar Component
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // In a real application, you would handle the search logic here.
    // This could involve filtering the recentPosts data or making an API call.
    console.log('Searching for:', searchTerm);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center w-full max-w-xl mx-auto mb-10">
      <div className="relative flex-grow">
        <input
          type="text"
          placeholder="Search blog posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-5 py-3 pr-12 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <button type="submit" className="absolute inset-y-0 right-0 flex items-center justify-center w-12 text-gray-500 hover:text-blue-600 transition-colors">
          <FaSearch size={20} />
        </button>
      </div>
    </form>
  );
};


const BlogSection = () => {
  return (
    <main className="container mx-auto py-10 px-4 font-sans">
      
      {/* Search Bar */}
      <SearchBar />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* Main Blog Content */}
        <div className="lg:col-span-2 space-y-10">
          
          {/* Featured Post */}
          <article className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-[1.01]">
            <img src={featuredPost.image} alt="Featured Post" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="relative p-8 flex flex-col justify-end h-full text-white">
              <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2 self-start">{featuredPost.category}</span>
              <h2 className="text-3xl font-bold leading-tight">{featuredPost.title}</h2>
              <p className="mt-2 text-gray-200">{featuredPost.excerpt}</p>
              <a href="#" className="mt-4 inline-block bg-orange-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-orange-600 transition-colors self-start">Read More</a>
            </div>
          </article>

          {/* Recent Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
                <img src={post.image} alt={post.title} className="w-full h-52 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <div className="text-gray-500 text-sm">{post.date}</div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-8">
          
          {/* Categories Widget */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-4 border-b-2 border-blue-600 pb-2">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Technology</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Lifestyle</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Travel</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Business</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Health</a></li>
            </ul>
          </div>

          {/* Social Media Widget */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-4 border-b-2 border-blue-600 pb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                <FaFacebook size={32} />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600 transition-colors">
                <FaTwitter size={32} />
              </a>
              <a href="#" className="text-pink-500 hover:text-pink-600 transition-colors">
                <FaInstagram size={32} />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default BlogSection;