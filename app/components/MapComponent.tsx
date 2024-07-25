"use client"
import React from "react"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"
import "leaflet-defaulticon-compatibility"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

import { useWindowDimensions } from "@/app/hooks/useWindowDimensions"

const MapComponent: React.FC = () => {
	const { width, height } = useWindowDimensions()

	const position: [number, number] = [51.505, -0.09]

	return (
		<MapContainer
			center={position}
			zoom={11}
			scrollWheelZoom={true}
			// style={{ height: "400px", width: "600px" }}
			style={{ height: "100vh", width: width }}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={position}>
				<Popup>
					This Marker icon is displayed correctly with <i>leaflet-defaulticon-compatibility</i>.
				</Popup>
			</Marker>
		</MapContainer>
	)
}

export default MapComponent
