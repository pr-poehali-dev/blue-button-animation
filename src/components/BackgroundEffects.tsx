const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute top-1/3 right-1/4 w-[32rem] h-[32rem] bg-cyan-400/15 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-600/20 rounded-full blur-[130px] animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] animate-pulse" style={{ animationDuration: '7s', animationDelay: '0.5s' }} />
      <div className="absolute bottom-0 right-1/3 w-[28rem] h-[28rem] bg-blue-400/15 rounded-full blur-[110px] animate-pulse" style={{ animationDuration: '5.5s', animationDelay: '1.5s' }} />
    </div>
  );
};

export default BackgroundEffects;
