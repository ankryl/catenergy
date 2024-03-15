/* global L:readonly */
let mapInit = document.getElementById("map");

const map = L.map(mapInit)
  .setView({
    lat: 59.93855,
    lng: 30.3225,
  }, 16);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [52, 57],
  iconAnchor: [0, 0],
});

const mainPinMarker = L.marker(
  {
    lat: 59.93855,
    lng: 30.3225,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  console.log(evt.target.getLatLng());
});
