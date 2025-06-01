"use client";

import { useState, useEffect } from "react";
import { Phone, Send, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

interface EnquiryFormProps {
  courseName: string;
  buttonText?: string;
  whatsappNumber?: string;
}

export default function EnquiryForm({
  courseName,
  buttonText = "Send Enquiry",
  whatsappNumber = "919345111211", // Default WhatsApp number
}: EnquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: courseName,
    message: `I'm interested in the ${courseName} course. Please provide more information.`,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Form validation
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      newErrors.phone = "Phone number should be 10 digits";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real implementation, you would send this data to your backend
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          course: courseName,
          message: `I'm interested in the ${courseName} course. Please provide more information.`,
        });
      }, 3000);
    }
  };

  // Generate WhatsApp message URL
  const getWhatsAppLink = () => {
    const message = encodeURIComponent(
      `*Course Enquiry: ${formData.course}*\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`
    );
    return `https://wa.me/${whatsappNumber}?text=${message}`;
  };

  return (
    <div className="bg-gradient-to-b from-background/60 to-background/80 backdrop-blur border border-border/40 rounded-xl p-6 shadow-lg">
      <h3 className="text-xl font-bold mb-4">Enquire About This Course</h3>
      
      {isSubmitted ? (
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded"
        >
          Thank you for your enquiry! We'll get back to you shortly.
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md bg-background ${
                errors.name ? "border-red-500" : "border-border/60"
              }`}
              placeholder="Vijay Kumar"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md bg-background ${
                errors.email ? "border-red-500" : "border-border/60"
              }`}
              placeholder="vijay@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md bg-background ${
                errors.phone ? "border-red-500" : "border-border/60"
              }`}
              placeholder="9876543210"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="course" className="block text-sm font-medium mb-1">
              Course
            </label>
            <input
              type="text"
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-border/60 rounded-md bg-background"
              readOnly
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="w-full px-3 py-2 border border-border/60 rounded-md bg-background"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="submit"
              className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md transition-colors"
            >
              <Send className="w-4 h-4" />
              {buttonText}
            </button>
            
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5C] text-white px-4 py-2 rounded-md transition-colors"
              onClick={(e) => {
                if (!validateForm()) {
                  e.preventDefault();
                }
              }}
            >
              <MessageSquare className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </form>
      )}
      
      <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <Phone className="w-4 h-4" /> 
        <a href="tel:+919345111211" className="hover:text-primary transition-colors">
          +91 93451 11211
        </a>
      </div>
    </div>
  );
}
