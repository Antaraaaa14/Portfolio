function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050816]">

      {/* Stars */}

      <div className="absolute inset-0 stars"></div>

      {/* Shooting Stars */}

      <div className="shooting-star"></div>
      <div className="shooting-star"></div>
      <div className="shooting-star"></div>

      {/* Purple Glow */}

      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-purple-600/20 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-pink-500/20 blur-[140px] rounded-full"></div>
    </div>
  );
}

export default Background;