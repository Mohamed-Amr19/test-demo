import React from 'react';
import { useLocale } from '../hooks/useLocale';
import { MapPin, Phone, Mail, ArrowRight, ArrowLeft } from 'lucide-react';

const ContactPage = () => {
  const { t, locale } = useLocale();
  const ArrowIcon = locale === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <div className="pt-32 pb-24 min-h-screen max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">{t.contact.title}</h1>
          <p className="text-xl text-gray-600 leading-relaxed font-light mb-12">
            {t.contact.subtitle}
          </p>

          <div className="space-y-12">
            {/* Egypt Office */}
            <div>
              <h3 className="text-2xl font-bold text-brand-navy mb-6">{t.contact.egypt}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 text-gray-600">
                  <MapPin className="w-6 h-6 text-brand-emerald shrink-0 mt-1" />
                  <span>Plot 204, Neighborhood 2, District 16, Sheikh Zayed City, Giza</span>
                </div>
                <div className="flex items-center gap-4 text-gray-600">
                  <Phone className="w-6 h-6 text-brand-emerald shrink-0" />
                  <span className="font-semibold text-brand-navy select-all" dir="ltr">+20 155 741 2975</span>
                </div>
              </div>
            </div>

            {/* SA Office */}
            <div>
              <h3 className="text-2xl font-bold text-brand-navy mb-6">{t.contact.sa}</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-600">
                  <Phone className="w-6 h-6 text-brand-emerald shrink-0" />
                  <span className="font-semibold text-brand-navy select-all" dir="ltr">+27 774 540 935</span>
                </div>
                <div className="flex items-center gap-4 text-gray-600">
                  <Mail className="w-6 h-6 text-brand-emerald shrink-0" />
                  <span className="text-brand-navy select-all" dir="ltr">Info@mhsgroup-export.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form / Quick Action */}
        <div className="bg-brand-navy p-10 md:p-14 rounded-sm text-white flex flex-col justify-center">
          <h3 className="text-3xl font-bold mb-4">Ready to order?</h3>
          <p className="text-gray-300 mb-10 leading-relaxed text-lg">
            Skip the forms and get an immediate response from our global sales team via WhatsApp.
          </p>
          
          <a
            href="https://wa.me/+201557412975"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 bg-brand-emerald text-white px-8 py-5 rounded-sm font-bold text-xl transition-all hover:bg-white hover:text-brand-emerald shadow-lg hover:shadow-xl w-full"
          >
            {t.contact.whatsapp}
            <ArrowIcon className="w-6 h-6 group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
