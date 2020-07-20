'use strict'

const createClient = require('../..')
const zvvProfile = require('.')

const client = createClient(zvvProfile, 'hafas-client-example')

const bürkliplatz = '8591105'

client.locations('bürkli', {results: 2})
// client.nearby({
// 	type: 'location',
// 	latitude: 47.366,
// 	longitude: 8.54,
// }, {distance: 60})

// client.journeys(bürkliplatz, '8591123', {results: 1, polylines: true})
// .then(({journeys}) => {
// 	const [journey] = journeys
// 	const leg = journey.legs[0]
// 	return client.trip(leg.tripId, leg.line.name, {polyline: true})
// })

// client.departures(bürkliplatz, {duration: 1})
// client.arrivals(bürkliplatz, {duration: 10, linesOfStops: true})
// client.stop(bürkliplatz, {linesOfStops: true}) // Dammtor
// client.radar({
// 	north: 47.387,
// 	west: 8.514,
// 	south: 47.356,
// 	east: 8.568,
// }, {results: 10})
// client.reachableFrom({
// 	type: 'location',
// 	address: 'Talstrasse',
// 	latitude: 47.366,
// 	longitude: 8.54,
// }, {
// 	when: new Date('2020-08-03T10:00:00+0200'),
// 	maxDuration: 8
// })

.then((data) => {
	console.log(require('util').inspect(data, {depth: null, colors: true}))
})
.catch(console.error)
