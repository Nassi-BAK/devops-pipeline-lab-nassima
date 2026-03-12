import { motion } from "framer-motion";
import eidBg from "@/assets/eid-bg.jpg";
import StarParticles from "./StarParticles";

const EidGreetingCard = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-emerald-deep">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${eidBg})` }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />

      <StarParticles />

      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-20 text-center px-6 max-w-2xl mx-auto"
      >
        {/* Crescent icon */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6 animate-float"
        >
          <span className="text-7xl md:text-8xl glow-gold inline-block" style={{ filter: "drop-shadow(0 0 20px hsl(43 85% 55% / 0.5))" }}>
            ☪
          </span>
        </motion.div>

        {/* Arabic greeting */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-arabic text-5xl md:text-7xl gradient-gold mb-4 leading-tight"
          dir="rtl"
        >
          عيد مبارك
        </motion.h1>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="w-48 h-px mx-auto mb-6"
          style={{
            background: "linear-gradient(90deg, transparent, hsl(43 85% 55%), transparent)",
          }}
        />

        {/* French greeting */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="font-display text-2xl md:text-4xl text-gold-light mb-4 font-semibold"
        >
          Joyeux Eid al-Fitr
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed font-light"
        >
          Que cette fête bénie vous apporte joie, paix et bonheur.
          <br />
          Qu'Allah accepte vos prières et vos bonnes actions.
        </motion.p>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="flex items-center justify-center gap-3 text-gold"
        >
          <span className="text-2xl">✦</span>
          <span className="text-sm tracking-[0.3em] uppercase font-display">Eid Mubarak 2026</span>
          <span className="text-2xl">✦</span>
        </motion.div>

        {/* Bottom decorative border */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.3 }}
          className="mt-10 p-6 rounded-2xl border border-gold shadow-gold"
          style={{ backgroundColor: "hsl(152 35% 12% / 0.6)", backdropFilter: "blur(10px)" }}
        >
          <p className="font-arabic text-2xl text-gold-light mb-2" dir="rtl">
            تقبّل الله منّا ومنكم
          </p>
          <p className="text-sm text-muted-foreground italic">
            « Qu'Allah accepte de nous et de vous »
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EidGreetingCard;
