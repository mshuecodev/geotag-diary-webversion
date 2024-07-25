"use client"

import MapComponent from "@/app/components/MapComponent"

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="map">
				<MapComponent />
			</div>
		</main>
	)
}
