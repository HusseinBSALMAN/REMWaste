"use client";
import Image from "next/image";
import { useState } from "react";
import { NightModeToggle } from "./NightModeToggle";
import { PopUpMSG } from "./popUPMSG";

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedBin, setSelectedBin] = useState<string | null>(null);
  const [nightMode, setNightMode] = useState(false);
  const [open, setOpen] = useState(false);

  const bins = [
    {
      id: "17933",
      size: 4,
      price: 278,
      allows_heavy_waste: true,
      allowed_on_road: true,
      image: "/imgs/4-yarder-skip.jpg",
      description: "Ideal for small home projects and garden waste.",
    },
    {
      id: "17934",
      size: 6,
      price: 305,
      allows_heavy_waste: true,
      allowed_on_road: true,
      image: "/imgs/6-yarder-skip.jpg",
      description: "Perfect for medium renovations and clear-outs.",
    },
    {
      id: "17935",
      size: 8,
      price: 375,
      allows_heavy_waste: true,
      allowed_on_road: true,
      image: "/imgs/8-yarder-skip.jpg",
      description: "Great for larger home projects and bulky waste.",
    },
    {
      id: "17936",
      size: 10,
      price: 400,
      allows_heavy_waste: false,
      allowed_on_road: false,
      image: "/imgs/10-yarder-skip.jpg",
      description: "Suitable for commercial or construction waste.",
    },
    {
      id: "17937",
      size: 12,
      price: 439,
      allows_heavy_waste: false,
      allowed_on_road: false,
      image: "/imgs/12-yarder-skip.jpg",
      description: "For big clear-outs and light bulky waste.",
    },
    {
      id: "17938",
      size: 14,
      price: 470,
      allows_heavy_waste: false,
      allowed_on_road: false,
      image: "/imgs/14-yarder-skip.jpg",
      description: "Large projects and commercial use.",
    },
    {
      id: "17939",
      size: 16,
      price: 496,
      allows_heavy_waste: false,
      allowed_on_road: false,
      image: "/imgs/16-yarder-skip.jpg",
      description: "Very large waste volumes, light waste only.",
    },
    {
      id: "15124",
      size: 20,
      price: 992,
      allows_heavy_waste: true,
      allowed_on_road: false,
      image: "/imgs/20-yarder-skip.jpg",
      description: "Industrial and heavy-duty waste.",
    },
    {
      id: "15125",
      size: 40,
      price: 992,
      allows_heavy_waste: false,
      allowed_on_road: false,
      image: "/imgs/40-yarder-skip.jpg",
      description: "Maximum capacity for major projects.",
    },
  ];

  const handleBinSelection = (binId: string) => {
    setSelectedBin(binId);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "0.1rem",
          margin: "2rem",
        }}
      >
        <img
          className="image-path"
          src={open ? "/imgs/hamburger-click.png" : "/imgs/hamburger-initial.png"}
          onClick={() => setOpen(!open)}
          alt="Hamburger Menu"
        />

        <NightModeToggle onToggle={setNightMode} />
      </div>

      <PopUpMSG bins={bins} selectedBin={selectedBin} setSelectedBin={setSelectedBin} />

      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        {open && (
          <div
            style={{
              display: "flex",
              backgroundColor: "black",
              width: "9rem",
              height: "100vh",
              flexDirection: "row",
              alignItems: "center",
              borderRadius: "1rem",
              marginTop: "1.5rem",
              top: 0,
              left: 0,
              zIndex: 1200,
              transform: open ? "translateX(0)" : "translateX(-100%)",
              transition: "transform 0.4s ease-in-out",
              boxShadow: "0 0.4rem 0.8rem rgba(0,0,0,0.2)",
              padding: "1rem",
            }}
          >
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                listStyleType: "none",
                color: "white",
                padding: "2rem",
                margin: 0,
              }}
            >
              <li style={{ textAlign: "center" }}>Home</li>
              <li style={{ textAlign: "center" }}>Services</li>
              <li style={{ textAlign: "center" }}>About Us</li>
              <li style={{ textAlign: "center" }}>Contact</li>
            </ul>
          </div>
        )}
        {open && (
          <div
            style={{
              display: "flex",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.3)",
              zIndex: 1100,
            }}
            onClick={() => setOpen(false)}
          />
        )}
        <div className={`content${nightMode ? " night-content" : ""}`}>
          <h2>Choose Your Waste Bin</h2>
          <div className="grid-table">
            {bins.map((bin, index) => (
              <div
                key={bin.id}
                className="item-card"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ border: bin.allows_heavy_waste ? "0.1rem solid #388e3c" : "0.1rem solid #8fbcbb" }}
              >
                <div className="image-container">
                  <Image
                    src={bin.image}
                    alt={`${bin.size} yard bin`}
                    width={199}
                    height={150}
                    className="waste-bin-image"
                    style={{
                      marginTop: hoveredIndex === index ? "1rem" : "13rem",
                      transform: hoveredIndex === index ? "scale(1.2)" : "scale(1)",
                      borderRadius: hoveredIndex === index ? "20%" : "50%",
                      boxShadow:
                        hoveredIndex === index
                          ? "0 0.4rem 0.8rem rgba(0,0,0,0.2)"
                          : "0 0.2rem 0.4rem rgba(0,0,0,0.1)",
                      transition: "margin-top 1s, transform 1s, border-radius 1s, box-shadow 0.1s",
                    }}
                  />
                </div>
                <h3>{bin.size} Yard Bin</h3>

                <div className="item-details">
                  <p className="text-gray-600 mb-2 text-center">{bin.description}</p>
                  <div className="mb-2 text-sm">
                    <span className={bin.allowed_on_road ? "text-green-700" : "text-gray-400"}>
                      {bin.allowed_on_road ? "On-road allowed" : "On-road not allowed"}
                    </span>
                    {" | "}
                    <span className={bin.allows_heavy_waste ? "text-green-700" : "text-gray-400"}>
                      {bin.allows_heavy_waste ? "Heavy waste OK" : "No heavy waste"}
                    </span>
                  </div>
                  <div className="font-semibold text-[#1976d2] mb-4">£{bin.price} + VAT</div>
                  <button
                    className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition"
                    onClick={() => handleBinSelection(String(bin.id))}
                  >
                    Select
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
