---
---
async function fetchJson (url) {
    return fetch(url).then((response) => response.json())
  }
  
  async function addGeorefAnnotationByUrl(warpedMapSource, url) {
    const annotation = await fetchJson(url)
    warpedMapSource.addGeorefAnnotation(annotation)
  }
  
  async function initialize(WarpedMapLayer, WarpedMapSource) {
    const warpedMapSource = new WarpedMapSource()
    const warpedMapLayer = new WarpedMapLayer({
      source: warpedMapSource
    })
  
    const map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        }),
        warpedMapLayer
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([12.4964, 41.9028]),
        zoom: 1
      })
    })
    {% for annotation in site.static_files %}{% if annotation.path contains 'annotations' %}
    addGeorefAnnotationByUrl(warpedMapSource, '{{ site.baseurl }}{{ annotation.path }}'){% endif %}{% endfor %}
  }