export default function SpeedControl({ speed, onChange }) {
  const speeds = [
    { label: '0.5×', ms: 1800 },
    { label: '1×', ms: 900 },
    { label: '2×', ms: 450 },
    { label: '4×', ms: 200 },
  ];
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
      <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.6rem', letterSpacing: '0.12em', color: '#6a6070' }}>SPEED</span>
      {speeds.map(s => (
        <button key={s.label} onClick={() => onChange(s.ms)}
          style={{ background: speed === s.ms ? 'rgba(232,0,28,0.15)' : 'rgba(16,12,18,0.8)', border: `1px solid ${speed === s.ms ? 'rgba(232,0,28,0.5)' : 'rgba(201,169,110,0.15)'}`, borderRadius: 3, padding: '0.2rem 0.45rem', color: speed === s.ms ? '#e8001c' : '#6a6070', cursor: 'pointer', fontFamily: 'Bebas Neue, sans-serif', fontSize: '0.7rem', letterSpacing: '0.05em', transition: 'all 0.2s' }}>
          {s.label}
        </button>
      ))}
    </div>
  );
}
