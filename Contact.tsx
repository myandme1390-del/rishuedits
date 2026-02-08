import React, { useState } from 'react';
import { Send, Instagram, Twitter, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    vision: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the WhatsApp message
    // The user requested: "hii are you Available right now for project ?"
    // We include the form details to make the message actionable for the recipient.
    const baseMessage = "hii are you Available right now for project ?";
    const details = `\n\nFrom: ${formData.name || 'Anonymous'}\nEmail: ${formData.email || 'Not provided'}\nVision: ${formData.vision || 'No vision provided'}`;
    
    const fullMessage = `${baseMessage}${details}`;
    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappUrl = `https://wa.me/918521859571?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-noir text-cream">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none">
              Let's<br />Create.
            </h2>
            <p className="text-xl text-cream/60 max-w-md font-light leading-relaxed">
              Have a visionary project in mind? Let's turn your concept into a cinematic reality.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex flex-col space-y-2">
              <span className="text-[10px] uppercase tracking-[0.3em] text-amber font-bold">Email us</span>
              <a href="mailto:collab.anmolraj@gmail.com" className="text-3xl md:text-4xl font-black hover:text-amber transition-colors break-all">
                collab.anmolraj@gmail.com
              </a>
            </div>

            <div className="flex flex-col space-y-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-cream/40 font-bold">Social Connection</span>
              <div className="flex items-center space-x-6">
                <a 
                  href="https://www.instagram.com/risshuedits?igsh=MTFreXYyZW14MGFsZA==" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-amber transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a 
                  href="https://x.com/RishuEdits" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-amber transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a 
                  href="#" 
                  className="hover:text-amber transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-cream/5 p-8 md:p-12 rounded-[40px] border border-cream/10">
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col space-y-3">
                <label className="text-[10px] uppercase tracking-widest font-bold text-cream/40">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Rishu"
                  className="bg-transparent border-b border-cream/20 py-2 focus:border-amber focus:outline-none transition-colors"
                  required
                />
              </div>
              <div className="flex flex-col space-y-3">
                <label className="text-[10px] uppercase tracking-widest font-bold text-cream/40">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="rishu@example.com"
                  className="bg-transparent border-b border-cream/20 py-2 focus:border-amber focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>
            
            <div className="flex flex-col space-y-3">
              <label className="text-[10px] uppercase tracking-widest font-bold text-cream/40">Your Vision</label>
              <textarea 
                rows={4}
                name="vision"
                value={formData.vision}
                onChange={handleInputChange}
                placeholder="Tell us about your project..."
                className="bg-transparent border-b border-cream/20 py-2 focus:border-amber focus:outline-none transition-colors resize-none"
                required
              />
            </div>

            <button type="submit" className="w-full py-5 bg-amber text-noir rounded-full flex items-center justify-center space-x-3 text-xs uppercase tracking-[0.3em] font-black hover:bg-cream transition-all duration-300">
              <span>Initialize Connection</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;