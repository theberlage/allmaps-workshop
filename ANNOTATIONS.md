# Annotations

## Add the map as a layer in geojson.io
- In order to add the map as a layer in geojson.io (and also in GIS-applications), you need to use the Allmaps Tile Server. The Tile Server acts as a proxy server to translate IIIF images to [XYZ map tiles](https://en.wikipedia.org/wiki/Tiled_web_map), using the georeferencing annotation.
- There're two ways to generate the URL template for XYZ map tiles:
  - Follow the [Tile Server instructions](https://observablehq.com/@bertspaan/allmaps-tile-server) and click the `Copy URL template to clipboard` button
  - Copy the URL to the georeferencing annotation (see previous section) and place it after `=` in the following URL: `https://allmaps.xyz/{z}/{x}/{y}.png?url=`
- Go to the [geojson](http://geojson.io) editor
- Click `Meta` and `Add map layer` in the top menu. Paste the URL template and give the layer a name. Navigate the map to see the result (it won't do this automatically). At the bottom right, a checkbox appears to hide/show the layer
- You can repeat these steps to add another layer

❗You can also load XYZ maps in [Placemark](https://app.placemark.io/play). This app supports the TileJSON format which can be requested by using the following pattern: `https://allmaps.xyz/tiles.json?url=`.

## Annotate the map with geojson
- In the geojson.io editor you can add markers, rectangles, polygons and polylines (see the tool palette). You can also edit and delete features by using the buttons at the bottom of the tool palette (follow the on-screen instructions).
- When you click a feature, you can edit its metadata in a popup panel. Each row in the table represents a label-value pair: labels left and values right. You can add a new pair by adding a new row.
- Make sure to establish standards, as a group, for adding metadata. Use simple names for labels, without caps and spaces.
- Disregard the style properties for now (they'll only work in the geojson.io editor).

❗You can temporarily hide the json-editor on the right by clicking the arrow on the very top of the line numbers column.

## Save geojson file to GitHub
- On the right side of the geojson.io editor you'll see a json document containing the features you created. Select all and copy the contents of this panel.
- Make a new file in [/assets/geojson](https://github.com/theberlage/allmaps-workshop/tree/main/assets/geojson) and paste the contents. Use the extension `.geojson` and commit the file.
- GitHub will show a preview of the file; click the `Display the source blob` button at the top of the preview to show the source code.
- To open the file again in the geojson.io editor, copy the raw contents of the file and paste them in the geojson.io side panel.
