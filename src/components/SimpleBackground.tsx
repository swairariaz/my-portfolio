const SimpleBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMwNmI2ZDQiIHN0cm9rZS13aWR0aD0iMC4xIiBvcGFjaXR5PSIwLjEiPjxwYXRoIGQ9Ik0zMCAwaDMwVjMwSDBWMHoiLz48cGF0aCBkPSJNNTAgMzBoMTB2MzBoLTEwVjMweiIvPjxwYXRoIGQ9Ik0xMCA0MGgxMHYyMEgxMFY0MHoiLz48L2c+PC9zdmc+')] opacity-10"></div>
      
      {/* Animated dots */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-ai-accent animate-pulse"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 4 + 2}s`
            }}
          />
        ))}
      </div>

      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-ai-accent/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-ai-primary/5 to-transparent"></div>
    </div>
  );
};

export default SimpleBackground;