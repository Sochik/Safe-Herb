import React from "react";

export default function FloatingPrompt() {
  return (
    <div className="fixed flex items-center justify-center bottom-6 right-6 bg-gradient-to-r from-red-500 to-yellow-500 text-white rounded-full shadow-xl z-50 animate-bounce w-24 h-24">
      <p className="text-center font-bold text-lg">
        <span className="block text-2xl font-extrabold">10%</span>
        OFF
      </p>
    </div>
  );
}
