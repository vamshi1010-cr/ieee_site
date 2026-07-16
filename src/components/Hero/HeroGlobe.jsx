import React, { useEffect, useRef, useState, useMemo } from "react";
import Globe from "react-globe.gl";

export default function HeroGlobe() {
  const globeRef = useRef();
  const [size, setSize] = useState(550);
  const [countries, setCountries] = useState({ features: [] });

  const HYD_LAT = 17.385;
  const HYD_LNG = 78.4867;

  // 1. Fetch the GeoJSON country data when the component mounts
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.error("Could not load country data", err));
  }, []);

  // Generate 15 random arcs connecting to Hyderabad
  const arcsData = [...Array(15).keys()].map(() => ({
    startLat: (Math.random() - 0.5) * 180,
    startLng: (Math.random() - 0.5) * 360,
    endLat: HYD_LAT,
    endLng: HYD_LNG,
    color: Math.random() > 0.5 ? "#00b5e2" : "#ffffff", // Brighter colors to contrast against blue land
  }));

  // Our bulletproof solid background texture (for the "ocean")
  const solidBackground = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 2;
    canvas.height = 2;
    const context = canvas.getContext("2d");
    context.fillStyle = "#f0f4f8"; // Soft icy white/gray ocean
    context.fillRect(0, 0, 2, 2);
    return canvas.toDataURL();
  }, []);

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 1.0; // Slightly slower, more elegant rotation
      globeRef.current.controls().enableZoom = false;
    }

    const handleResize = () => {
      setSize(window.innerWidth < 960 ? Math.min(window.innerWidth - 40, 400) : 550);
    };
    
    window.addEventListener("resize", handleResize);
    handleResize(); 
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Globe
        ref={globeRef}
        width={size}
        height={size}
        
        // Base globe (Ocean)
        globeImageUrl={solidBackground}
        backgroundColor="rgba(0,0,0,0)" 
        showGraticules={true} 
        
        // --- NEW: Map Polygons (Landmasses) ---
        // Filter out Antarctica (AQ) for a cleaner look, optional!
        polygonsData={countries.features.filter(d => d.properties.ISO_A2 !== 'AQ')}
        polygonAltitude={0.01} // Pops the land up slightly off the sphere
        polygonCapColor={() => "#006699"} // IEEE Blue for the landmasses
        polygonSideColor={() => "rgba(0, 102, 153, 0.2)"}
        polygonStrokeColor={() => "#003366"} // IEEE Navy for crisp borders
        
        // Arc configuration
        arcsData={arcsData}
        arcColor="color"
        arcAltitudeAutoScale={0.5} 
        arcStroke={1.5}            
        arcDashLength={0.3}
        arcDashGap={0.7}
        arcDashAnimateTime={2500}
        
        // Atmosphere glow
        atmosphereColor="#006699"
        atmosphereAltitude={0.15}
      />
    </div>
  );
}