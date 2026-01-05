import { motion } from 'framer-motion';


export default function PageWrapper({children}) {
    const pageVariants = {
        initial: { opacity: 0, x: -50 },
        in: { opacity: 1, x: 0 },
        out: { opacity: 0, x: 50 },
    }


    const pageTransition = {
        type: 'tween',
        ease: 'easeInOut',
        duration: 0.3,
    }
  return (
    <motion.div
        initial='initial'
        animate='in'
        exit='out'
        variants={pageVariants}
        transition={pageTransition}
        key={location.pathname}
    >
        {children}
    </motion.div>
  );
}
