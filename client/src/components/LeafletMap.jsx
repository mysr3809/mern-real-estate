/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import L from "leaflet";
import { useLocation } from "react-router-dom";

import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.js";

const LeafletMap = () => {
  const location = useLocation();
  const mapData = location.state?.mapData || [];
  console.log(mapData);

  useEffect(() => {
    // Initialize the map
    const map = L.map("leafletMap").setView([0, 0], 2);

    // Add a tile layer (you can use your own preferred tile provider)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    mapData.forEach((listing) => {
      const marker = L.marker([
        listing.location.latitude,
        listing.location.longitude,
      ])
        .addTo(map)
        .bindPopup(
          `<div>
              <img  src="${listing.imageUrls[0]}">
              <b>${listing.name}</b><br>${listing.description}
              <button style="margin-top: 10px" class="leaflet-popup-button" id="goToListing-${listing._id}">View This Listing</button>
           </div>`
        );

      marker.on("popupopen", () => {
        const button = document.getElementById(`goToListing-${listing._id}`);
        // Remove any existing event listeners
        button.removeEventListener("click", handleButtonClick);
        // Add new event listener
        button.addEventListener("click", handleButtonClick);
      });
    });

    function handleButtonClick(event) {
      const id = event.target.id.replace("goToListing-", "");
      window.location.href = `http://localhost:5173/listing/${id}`;
    }
  }, [mapData]);

  return <div id="leafletMap" style={{ height: "500px" }} />;
};

export default LeafletMap;
