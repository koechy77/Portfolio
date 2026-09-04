export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-950">
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/15 blur-[150px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none
        [mask-image:radial-gradient(circle,white_35%,transparent_90%)]
        [-webkit-mask-image:radial-gradient(circle,white_35%,transparent_90%)]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.14) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.14) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          backgroundPosition: "0 0",
          backgroundRepeat: "repeat",
          animation: "gridMove 15s linear infinite",
          opacity: 0.45,
        }}
      />
    </div>
  );
}
