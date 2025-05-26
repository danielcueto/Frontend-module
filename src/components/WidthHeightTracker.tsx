import { useState, useEffect } from "react";

export function WidthHeightTracker() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    
    useEffect(() => {
        const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
        };
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Window Size Tracker</h2>
        <p>Width: {width}px</p>
        <p>Height: {height}px</p>
        </div>
    );
}