import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLocale } from '../hooks/useLocale';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import CTASection from '../components/sections/CTASection';

const BlogShowPage = () => {
  const { blogId } = useParams();
  const { t, locale } = useLocale();
  const navigate = useNavigate();
  const ArrowIcon = locale === 'ar' ? ArrowRight : ArrowLeft;
  
  const blog = t.blogs.items.find(b => b.id === blogId);

  if (!blog) return <div className="pt-32 text-center text-brand-navy font-bold text-2xl">Article not found</div>;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-brand-cloud flex flex-col pt-28 md:pt-32"
    >
      <div className="pb-24 max-w-5xl mx-auto px-6 w-full flex-grow">
        <button 
          onClick={() => navigate('/blogs')} 
          className="flex items-center gap-2 text-gray-500 hover:text-brand-emerald transition-colors mb-10 font-bold tracking-widest uppercase text-sm"
        >
          <ArrowIcon className="w-5 h-5" /> {t.blogs.backToBlogs}
        </button>

        <motion.div layoutId={`blog-card-${blog.id}`} className="bg-white rounded-sm overflow-hidden shadow-sm">
          <div className="h-[40vh] md:h-[60vh] relative overflow-hidden">
            <motion.img 
              layoutId={`blog-image-${blog.id}`}
              src={blog.img} 
              alt={blog.title} 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="p-8 md:p-16">
            <span className="text-brand-emerald font-bold tracking-widest uppercase mb-4 block text-sm">{blog.date}</span>
            <motion.h1 layoutId={`blog-title-${blog.id}`} className="text-4xl md:text-5xl lg:text-5xl font-bold text-brand-navy mb-8 leading-tight">
              {blog.title}
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="prose prose-lg md:prose-xl max-w-none text-gray-600 leading-loose font-light"
            >
              <p className="text-2xl font-normal leading-relaxed mb-8 text-brand-navy">{blog.excerpt}</p>
              <p className="mb-6">{blog.content}</p>
              <p className="mb-6">{locale === 'ar' ? 'ومع تزايد الطلب العالمي وازدياد الحاجة إلى الجودة الموثوقة، أصبح من الضروري امتلاك بنية تحتية لوجستية وسلسلة توريد مرنة وسريعة الاستجابة لتلبية متطلبات الأسواق المستهدفة.' : 'As global demand fluctuates and the need for reliable quality increases, having a robust and responsive logistics infrastructure perfectly tailored to premium export standards is no longer just an advantage—it is a baseline necessity.'}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <CTASection />
    </motion.div>
  );
};

export default BlogShowPage;
