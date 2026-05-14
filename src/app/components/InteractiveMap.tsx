'use client';

import React, { useState } from 'react';

type RegionKey = 'north' | 'central' | 'south';

interface RegionData {
  id: RegionKey;
  title: string;
  vietnameseTitle: string;
  cities: string;
  accentCharacteristics: string;
  signatureFood: string;
  clubFocus: string;
  color: string;
  path: string;
}

const regions: Record<RegionKey, RegionData> = {
  north: {
    id: 'north',
    title: 'Northern Region',
    vietnameseTitle: 'Miền Bắc',
    cities: 'Hà Nội, Hạ Long, Sapa',
    accentCharacteristics: 'Clear distinction of all 6 tones. Pronounces "d", "gi", and "r" as a "z" sound. Standard dialect for news broadcasts.',
    signatureFood: 'Phở Bắc (Traditional clear broth Pho), Bún Chả Hà Nội',
    clubFocus: 'We cover standard Northern tones in our introductory grammar and pronunciation modules.',
    color: '#D32F2F', // Lacquer Red
    // Simplified elegant stylized path for Northern Vietnam
    path: 'M 40 20 Q 70 10 90 30 Q 110 50 80 80 Q 50 90 30 60 Z',
  },
  central: {
    id: 'central',
    title: 'Central Region',
    vietnameseTitle: 'Miền Trung',
    cities: 'Huế, Đà Nẵng, Hội An',
    accentCharacteristics: 'Heavier, deeper intonation. Merges the Hỏi (asking) and Ngã (tumbling) tones. Distinct vocabulary and historic poetic resonance.',
    signatureFood: 'Bún Bò Huế (Spicy beef noodle soup), Mì Quảng',
    clubFocus: 'Explore rich regional history and unique Central Vietnamese expressions during our Cultural Spotlights.',
    color: '#D4AF37', // Liquid Gold
    // Simplified elegant stylized path for Central Vietnam
    path: 'M 80 80 Q 110 110 130 160 Q 100 180 80 140 Q 60 110 80 80 Z',
  },
  south: {
    id: 'south',
    title: 'Southern Region',
    vietnameseTitle: 'Miền Nam',
    cities: 'TP. Hồ Chí Minh (Sài Gòn), Cần Thơ',
    accentCharacteristics: 'Dynamic and melodious conversational rhythm. Often ends words with a soft tone. Pronounces "v" as a "y" sound.',
    signatureFood: 'Cơm Tấm (Broken rice with grilled pork), Bánh Xèo',
    clubFocus: 'Extremely popular in our conversational speaking circles and slang practice sessions.',
    color: '#121212', // Deep Charcoal
    // Simplified elegant stylized path for Southern Vietnam
    path: 'M 130 160 Q 170 210 140 260 Q 100 270 90 230 Q 90 190 130 160 Z',
  },
};

export default function InteractiveMap() {
  const [selectedRegion, setSelectedRegion] = useState<RegionKey>('north');
  const [hoveredRegion, setHoveredRegion] = useState<RegionKey | null>(null);

  const currentData = regions[selectedRegion];

  return (
    <div className="glass-panel" style={{ padding: '2.5rem', margin: '3rem 0', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative backdrop accents */}
      <div 
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '300px',
          height: '300px',
          background: `radial-gradient(circle, ${currentData.color}22 0%, transparent 70%)`,
          borderRadius: '50%',
          transition: 'background 0.5s ease',
          pointerEvents: 'none',
        }}
      />



      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>
        {/* Left Side: Interactive Vector Map */}
        <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
          <svg
            viewBox="0 0 200 300"
            style={{
              width: '100%',
              maxWidth: '260px',
              height: 'auto',
              filter: 'drop-shadow(0 12px 24px rgba(0,0,0,0.12))',
            }}
          >
            {(Object.keys(regions) as RegionKey[]).map((key) => {
              const region = regions[key];
              const isSelected = selectedRegion === key;
              const isHovered = hoveredRegion === key;

              return (
                <g key={key} style={{ cursor: 'pointer' }}>
                  <path
                    d={region.path}
                    fill={isSelected ? region.color : isHovered ? `${region.color}CC` : '#E0E0E0'}
                    stroke={isSelected ? '#D4AF37' : '#FFFFFF'}
                    strokeWidth={isSelected ? '4' : '2'}
                    style={{
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      transformOrigin: 'center',
                      transform: isHovered || isSelected ? 'scale(1.02)' : 'scale(1)',
                    }}
                    onClick={() => setSelectedRegion(key)}
                    onMouseEnter={() => setHoveredRegion(key)}
                    onMouseLeave={() => setHoveredRegion(null)}
                  />
                  {/* Visual locator dot */}
                  <circle
                    cx={key === 'north' ? 70 : key === 'central' ? 95 : 120}
                    cy={key === 'north' ? 50 : key === 'central' ? 130 : 220}
                    r={isSelected ? '5' : '3'}
                    fill="#FFFFFF"
                    stroke={region.color}
                    strokeWidth="2"
                    style={{ pointerEvents: 'none', transition: 'all 0.3s' }}
                  />
                </g>
              );
            })}
          </svg>

          {/* Overlay Vibe Label */}
          <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px', background: 'rgba(255,255,255,0.9)', padding: '4px 12px', borderRadius: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
            {(Object.keys(regions) as RegionKey[]).map((k) => (
              <button
                key={k}
                onClick={() => setSelectedRegion(k)}
                style={{
                  border: 'none',
                  background: 'none',
                  fontSize: '0.8rem',
                  fontWeight: selectedRegion === k ? 800 : 500,
                  color: selectedRegion === k ? regions[k].color : '#9E9E9E',
                  cursor: 'pointer',
                  padding: '2px 6px',
                  borderBottom: selectedRegion === k ? `2px solid ${regions[k].color}` : '2px solid transparent',
                  transition: 'all 0.2s',
                }}
              >
                {regions[k].vietnameseTitle}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Immersive Info Deck */}
        <div 
          key={selectedRegion} // Force re-animation on key change
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.2rem',
            animation: 'fadeIn 0.4s ease-out forwards',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,0,0,0.08)', paddingBottom: '1rem' }}>
            <div>
              <span style={{ fontSize: '0.9rem', fontWeight: 600, color: currentData.color, display: 'block' }}>
                {currentData.title}
              </span>
              <h3 style={{ fontSize: '1.8rem', color: '#121212', display: 'flex', alignItems: 'center', gap: '10px' }}>
                {currentData.vietnameseTitle}
              </h3>
            </div>
            <div style={{ background: `${currentData.color}15`, padding: '8px 16px', borderRadius: '12px', fontWeight: 700, color: currentData.color, fontSize: '0.85rem' }}>
              Active Accent
            </div>
          </div>

          <div>
            <strong style={{ fontSize: '0.85rem', color: '#757575', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '4px' }}>
              Major Cities
            </strong>
            <p style={{ fontWeight: 600, color: '#333' }}>{currentData.cities}</p>
          </div>

          <div>
            <strong style={{ fontSize: '0.85rem', color: '#757575', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '4px' }}>
              Linguistic Traits
            </strong>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>{currentData.accentCharacteristics}</p>
          </div>

          <div>
            <strong style={{ fontSize: '0.85rem', color: '#757575', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '4px' }}>
              Culinary Spotlight
            </strong>
            <p style={{ fontSize: '0.95rem', color: '#B71C1C', fontWeight: 600 }}>🍽️ {currentData.signatureFood}</p>
          </div>

          <div style={{ marginTop: '0.5rem', background: 'rgba(255,255,255,0.6)', padding: '1rem', borderRadius: '12px', borderLeft: `4px solid ${currentData.color}` }}>
            <strong style={{ fontSize: '0.8rem', color: '#757575', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '2px' }}>
              Club Integration
            </strong>
            <p style={{ fontSize: '0.9rem', color: '#424242', margin: 0 }}>
              {currentData.clubFocus}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
