import { motion } from "framer-motion";

function ScrollReveal({ children }) {
    return (
        <motion.div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}  
            viewport={{ once: true, amount: 0.2 }}
        >
            {children}
        </motion.div>
    );
}

export default ScrollReveal;