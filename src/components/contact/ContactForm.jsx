import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      );
      setSubmitStatus('success');
      formRef.current.reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-2 bg-tertiary border border-transparent rounded-lg focus:outline-none focus:border-secondary transition-colors duration-300"
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-2 bg-tertiary border border-transparent rounded-lg focus:outline-none focus:border-secondary transition-colors duration-300"
        />
      </div>
      <div>
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="5"
          className="w-full px-4 py-2 bg-tertiary border border-transparent rounded-lg focus:outline-none focus:border-secondary transition-colors duration-300"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
      {submitStatus === 'success' && (
        <p className="text-green-500 text-center">Message sent successfully!</p>
      )}
      {submitStatus === 'error' && (
        <p className="text-red-500 text-center">
          Something went wrong. Please try again later.
        </p>
      )}
    </form>
  );
};

export default ContactForm;