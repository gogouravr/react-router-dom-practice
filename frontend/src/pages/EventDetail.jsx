import React from 'react'
import { useParams } from 'react-router-dom'

export default function EventDetailPage() {
    const { eventId } = useParams();
    return (
        <>
            <div>EventDetailPage</div>
            <div>{eventId}</div>
        </>
    )
}
