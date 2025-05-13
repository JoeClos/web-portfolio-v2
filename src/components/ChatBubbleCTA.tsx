import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import chatCharacterImg from "../assets/chat-character.png"; // optional if you use same image
const ChatBubbleCTA = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const hasSeenPing = sessionStorage.getItem("hasSeenPingBot");

    const handleScroll = () => {
      if (!hasSeenPing && window.scrollY > 500) {
        setVisible(true);
        sessionStorage.setItem("hasSeenPingBot", "true");
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleYesClick = () => {
    setVisible(false);
    navigate("/contact");
  };

  if (!visible) return null;

  return (
    <motion.div
      className="fixed bottom-6 left-0 z-50 flex items-end"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      {/* Peeking Character */}
      <div className="-ml-4 sm:-ml-12 md:-ml-6 lg:-ml-8">
        <img
          src={chatCharacterImg}
          alt="Assistant"
          className="w-16 sm:w-20 md:w-24 h-auto"
        />
      </div>

      {/* Chat Bubble */}
      <div className="ml-2 bg-white dark:bg-gray-800 shadow-xl rounded-xl p-4 max-w-xs">
        <p className="text-sm text-gray-800 dark:text-gray-200 mb-2">
          Hey! Want to{" "}
          <span className="font-semibold text-fuchsia-600">connect</span>?
        </p>
        <div className="flex gap-4 text-sm font-medium">
          <button
            className="text-fuchsia-600 hover:underline"
            onClick={handleYesClick}
          >
            Yes!
          </button>
          <button
            className="text-gray-500 hover:underline"
            onClick={() => setVisible(false)}
          >
            No thanks
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ChatBubbleCTA;
