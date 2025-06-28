import { motion, easeInOut } from "framer-motion"

export default function NavnNavbar() {

    function home() {
        window.location.href = "./";
    };

    return (
        <>
            <div className={`navbar fixed justify-center items-center select-none onTop z-20 `}>
                <div className="flex w-full h-full justify-center items-center">
                    <div className={`font-bestFont text-secondary flex justify-center items-center text-[10vw] md:text-[2vw] h-[10vw] md:h-[3vw] cursor-pointer`}>
                        <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1, ease: easeInOut }} onClick={home}>A</motion.div>
                        <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.1, ease: easeInOut }} onClick={home}>l</motion.div>
                        <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.2, ease: easeInOut }} onClick={home}>e</motion.div>
                        <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.3, ease: easeInOut }} onClick={home}>k</motion.div>
                        <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.4, ease: easeInOut }} onClick={home}>s</motion.div>
                        <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.5, ease: easeInOut }} onClick={home}>a</motion.div>
                        <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.6, ease: easeInOut }} onClick={home}>n</motion.div>
                        <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.7, ease: easeInOut }} onClick={home}>d</motion.div>
                        <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.7, ease: easeInOut }} onClick={home}>e</motion.div>
                        <motion.div initial={{ y: 800 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.7, ease: easeInOut }} onClick={home}>r</motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}