import React from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '../hooks/useLocale';
import { motion } from 'framer-motion';
import CTASection from '../components/sections/CTASection';

const BlogsIndexPage = () => {
  const { t } = useLocale();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-brand-cloud flex flex-col pt-32"
    >
      <div className="pb-24 max-w-7xl mx-auto px-6 flex-grow w-full">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-brand-navy mb-6">{t.blogs.title}</h1>
          <p className="text-xl text-gray-600 leading-relaxed font-light">{t.blogs.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {t.blogs.items.map(blog => (
            <Link to={`/blogs/${blog.id}`} key={blog.id}>
              <motion.div 
                layoutId={`blog-card-${blog.id}`}
                className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-transparent hover:border-brand-emerald group flex flex-col h-full"
              >
                <div className="h-72 overflow-hidden relative">
                  <motion.img 
                    layoutId={`blog-image-${blog.id}`}
                    src={blog.img} 
                    alt={blog.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 text-sm font-bold text-brand-navy rounded-sm shadow-sm group-hover:bg-brand-emerald group-hover:text-white transition-colors">
                    {blog.date}
                  </div>
                </div>
                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  <motion.h2 layoutId={`blog-title-${blog.id}`} className="text-3xl font-bold text-brand-navy mb-4 group-hover:text-brand-emerald transition-colors leading-tight">
                    {blog.title}
                  </motion.h2>
                  <p className="text-gray-600 text-lg leading-relaxed max-w-none flex-grow mb-8 font-light">
                    {blog.excerpt}
                  </p>
                  <div className="text-brand-emerald font-bold flex items-center gap-2 mt-auto uppercase tracking-wide text-sm">
                    {t.blogs.readMore}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
      <CTASection />
    </motion.div>
  );
};
export default BlogsIndexPage;
