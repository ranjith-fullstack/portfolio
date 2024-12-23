import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiSend } from 'react-icons/fi';
import ContactForm from './contact/ContactForm';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-tertiary to-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-72 h-72 bg-secondary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block p-3 bg-secondary/10 rounded-full mb-4"
            >
              <FiMail className="text-2xl text-secondary" />
            </motion.div>
            <h2 className="text-4xl font-bold text-textPrimary mb-4">Get In Touch</h2>
            <p className="text-textSecondary max-w-2xl mx-auto">
              Have a project in mind or just want to chat? Feel free to reach out!
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-astra overflow-hidden"
          >
            <div className="p-8">
              <ContactForm />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;