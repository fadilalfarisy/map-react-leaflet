function getVoivodeshipName(feature, layer) {
  if (feature.properties && feature.properties.kecamatan) {
    layer.bindPopup(`${feature.properties.kecamatan}, Depok, Jawa Barat`);
  }
}

function onEachFeature(feature, layer) {
  layer.on('mouseover', function (e) {

    getVoivodeshipName(feature, layer);

    this.openPopup();

    // style
    this.setStyle({
      fillColor: '#eb4034',
      weight: 2,
      color: '#eb4034',
      fillOpacity: 0.7,
    });
  });
  layer.on('mouseout', function () {
    this.closePopup();
    // style
    this.setStyle({
      fillColor: '#3388ff',
      weight: 2,
      color: '#3388ff',
      fillOpacity: 0.2,
    });
  });
}

export default onEachFeature;