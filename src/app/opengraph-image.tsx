import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'Veltron Sysmatic Solution - Technology Solutions & Professional Training'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(to bottom, #000000, #111827)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 700,
          textAlign: 'center',
        }}>
          <div style={{ fontSize: 70, marginBottom: 20 }}>Veltron</div>
          <div style={{ fontSize: 40, marginBottom: 40, color: '#9ca3af' }}>Sysmatic Solution</div>
          <div style={{ fontSize: 28, maxWidth: '80%', textAlign: 'center', color: '#d1d5db' }}>
            Technology Solutions & Professional Training
          </div>
        </div>
        <div style={{ 
          position: 'absolute',
          bottom: 40,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 20,
          fontSize: 24,
          color: '#9ca3af'
        }}>
          <div>Data Analytics</div>
          <div>•</div>
          <div>Web Development</div>
          <div>•</div>
          <div>Digital Marketing</div>
          <div>•</div>
          <div>Training</div>
        </div>
      </div>
    ),
    { ...size }
  )
}
