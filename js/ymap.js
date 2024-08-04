initMap();

async function initMap() {
  await ymaps3.ready;

  const {YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker} = ymaps3;

  const map = new YMap(
    document.getElementById('map'),
    {
      location: {
        center: [37.638810, 55.769659],
        zoom: 17,
        type: 'yandex#satellite',
        controls: []
      }
    },
  );

  map.addChild(new YMapDefaultSchemeLayer());
  map.addChild(new YMapDefaultFeaturesLayer());

  const content = document.createElement('section');

// Инициализируйте маркер
  const marker = new YMapMarker(
    {
      coordinates: [37.638810, 55.769659],
      draggable: true
    },
    content
  );

// Добавьте маркер на карту
  map.addChild(marker);

// Добавьте произвольную HTML-разметку внутрь содержимого маркера
  content.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">\n' +
    '  <circle cx="6" cy="6" r="6" fill="#FF6E30"/>\n' +
    '</svg>';

}


