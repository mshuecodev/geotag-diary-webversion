"use client"
import React, { useEffect, useState } from "react"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"
import "leaflet-defaulticon-compatibility"
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from "react-leaflet"

import { useWindowDimensions } from "@/app/hooks/useWindowDimensions"

const SetViewOnClick = ({ coords }: { coords: [number, number] }) => {
	const map = useMap()
	useEffect(() => {
		map.setView(coords, 13) // 13 is the zoom level, you can adjust as needed
	}, [coords, map])
	return null
}

const LocationMarker = ({ position, name }: { position: [number, number]; name: string }) => {
	return (
		<Marker position={position}>
			<Popup>{name}</Popup>
		</Marker>
	)
}

const MapComponent: React.FC = () => {
	const { width, height } = useWindowDimensions()

	const [markers, setMarkers] = useState<{ position: [number, number]; name: string }[]>([])
	const [position, setPosition] = useState<[number, number]>([51.505, -0.09])

	const AddMarkerOnclick = () => {
		useMapEvents({
			click(e) {
				const tagName = prompt("Enter tag name for this marker:")
				if (tagName) {
					setMarkers((prevMarkers) => [...prevMarkers, { position: [e.latlng.lat, e.latlng.lng], name: tagName }])
				}
			}
		})
		return null
	}

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(geoPosition) => {
					const { latitude, longitude } = geoPosition.coords
					setPosition([latitude, longitude])
				},
				(error) => {
					console.error(error)
				},
				{
					enableHighAccuracy: true
				}
			)
		}
	}, [])

	return (
		<MapContainer
			// center={position}
			center={{ lat: 51.505, lng: -0.09 }}
			minZoom={0}
			scrollWheelZoom={true}
			// style={{ height: "400px", width: "600px" }}
			style={{ height: "100vh", width: width }}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>

			{markers.map((marker, index) => (
				<LocationMarker
					key={index}
					position={marker.position}
					name={marker.name}
				/>
			))}

			<LocationMarker
				position={position}
				name={"You are here now!"}
			/>

			<AddMarkerOnclick />
			<SetViewOnClick coords={position} />
		</MapContainer>
	)
}

export default MapComponent
