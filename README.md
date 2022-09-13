# Allmaps workshop
Monday, September 12 2022, 13:00-17:00

The Berlage Post-Master Program in Architecture and Urban Design

Faculty of Architecture and the Built Environment

Delft University of Technology

## Prerequisites
- [GitHub account](https://github.com)
- [GitHub Desktop](https://desktop.github.com) (or command line tools)
- Updated browser (Firefox or Chrome)
- Optional: code editor like [Visual Studio Code](https://code.visualstudio.com)

## What is IIIF?
- The [International Image Interoperability Framework](https://iiif.io) (IIIF) is a set of standards used by cultural heritage institutions to share their digital collection data.
- The [IIIF Image API](https://iiif.io/api/image/3.0/) supports request for parts of images at different zoom levels. This makes it possible to quickly navigate high resolution image files. Compare for example these URLs that all refer to the same image:
  - Base URL: `https://dlc.services/iiif-img/7/4/0b0af56c-d836-4fe4-a9da-7ed66ea7a236`
  - Full image at 1000px: [/full/1000,/0/default.jpg](https://dlc.services/iiif-img/7/4/0b0af56c-d836-4fe4-a9da-7ed66ea7a236/full/1000,/0/default.jpg)
  - Part of the image: [/4316,4389,1557,890/1557,890/0/default.jpg](https://dlc.services/iiif-img/7/4/0b0af56c-d836-4fe4-a9da-7ed66ea7a236/4316,4389,1557,890/1557,890/0/default.jpg)
  - Upper left corner of the image: [/0,0,1000,1000/500,500/0/default.jpg](https://dlc.services/iiif-img/7/4/0b0af56c-d836-4fe4-a9da-7ed66ea7a236/0,0,1000,1000/500,500/0/default.jpg)
  - Rotated image: [/0,0,1000,1000/500,500/90/default.jpg](https://dlc.services/iiif-img/7/4/0b0af56c-d836-4fe4-a9da-7ed66ea7a236/0,0,1000,1000/500,500/90/default.jpg)
  - Full image (8662 x 7519 pixels): [/full/full/0/default.jpg](https://dlc.services/iiif-img/7/4/0b0af56c-d836-4fe4-a9da-7ed66ea7a236/full/full/0/default.jpg)
  - URL scheme: `[base url]/[region]/[size]/[rotation]/[quality].[format]`
  - Not all IIIF-servers support the same functionalities! The level of support is described in an [info.json](https://dlc.services/iiif-img/7/4/0b0af56c-d836-4fe4-a9da-7ed66ea7a236/info.json) file.
- The [IIIF Presentation API](https://iiif.io/api/presentation/3.0/) describes the relationship between different images and their metadata. For example the individual pages that together make up the pages of a book. On digital collection portals that support IIIF, you can usually find a link to the IIIF Presentation Manifest. This is a [json](https://www.json.org/json-en.html) document holding the information about the object. You can use this IIIF Manifest link to open the object in other viewers.

## How to find IIIF maps
- A curated list of [IIIF Map Collections](https://observablehq.com/@bertspaan/iiif-map-collections?collection=@bertspaan/allmaps)
- [Digitised maps from TU Delft Library](https://observablehq.com/@sammeltassen/tresor-maps) – at the moment without metadata
- [David Rumsey Map Collection](https://www.davidrumsey.com)
- [River Maps](https://github.com/theberlage/river-maps)
- Dutch collections that support IIIF:
  - [National Archives](https://www.nationaalarchief.nl/onderzoeken/zoeken?activeTab=maps&rm=gallery)
  - [Wageningen University](https://images.wur.nl/digital/search/searchterm/map/field/type/mode/exact/conn/and)
  - [Vrije Universiteit](https://vu.contentdm.oclc.org/digital/collection/krt/search)
  - [University of Groningen](https://facsimile.ub.rug.nl/digital/collection/Kaarten/search)
  - [Leiden University Libraries](https://digitalcollections.universiteitleiden.nl/search?type=dismax&islandora_solr_search_navigation=1&f%5B0%5D=RELS_EXT_isMemberOfCollection_uri_ms:%22info%5C:fedora%5C/collection%5C:ubl_maps%22&f%5B1%5D=fedora_datastreams_ms:MANIFEST)
  - [Gouda Tijdmachine](https://www.goudatijdmachine.nl/data/collection/ark:/60537/bb25wx)
  - [Utrecht University](https://www.uu.nl/en/special-collections/collections/maps-and-atlases)
  - [Rijksdienst voor Cultureel Erfgoed](https://beeldbank.cultureelerfgoed.nl/)
  - [Amsterdam City Archive](https://archief.amsterdam/beeldbank/?mode=gallery&view=horizontal&sort=random%7B1656067417757%7D%20asc)
   
❗Please note: not all of these collections expose the IIIF-link to the public (contact us to learn the tricks), and some of them are currently not compatible with Allmaps.

## Georeferencing with Allmaps
- Copy the link to the IIIF-manifest
- Open the [Allmaps Editor](https://editor.allmaps.org)
- Paste the link and click 'Load'. At the top you now see four tabs, you can also go back and forth. If you get an error message, double check if you copied the right link.
- Select an image under the 'Collection' tab (often there's only one image to select). If somebody else has already began georeferencing the map, you'll be notified about this (but you can continue).
- Click the 'Mask' tab and draw a mask by zooming in and clicking the image. The mask will be used to crop the image in the viewer. If you want to start again, click the centre button of the menu on the bottom right. This opens up a panel listing all masks; clicking the bin removes them (there's no way to undo this currently). You can move points around or add new points to the mask by dragging points or lines.
- Now go to the 'Georeference' tab. On the left you see the selected image, on the right a world map. Zoom to the region of the map on the right. Click a point you recognise on both maps (which has remained the same over time), such as a church tower or a road crossing. Add the point on both sides (a number will indicate that they are paired). Add at least three of these points (they are called *control points*)and try to spread them as much as possible. If you unfold the layers panel (centre button of the menu) you see an overview of your mask and the control points. You can remove points if needed (there's no undo yet).
- Navigate to the 'Results' tab and open the link in a new browser window. The georeferenced map will now open in the Allmaps Viewer. If it doesn't show up right away, go back and forth between 'Original image' and 'Warped map' at the top right. The mask is indicated with an orange outline (the images are not yet cropped in this version of the viewer). If the IIIF-Manifest contains multiple images and if more than one were georeferenced, other images show up in a thumbnail row at the bottom. Click them to change the view.

❗Removing points from the menu might confuse the numbering. Reload the page to reset the numbering. Note that the order of numbers could change after reloading the page.

## Save the georeferencing annotation to GitHub
The Editor saves your work. If you close the window, open the editor again, paste the same manifest link, you can continue editing. If somebody else is editing the same map at the same time, changes will become visible in real time. This also means somebody else can change your work, which is why you want to save the results independently of the Allmaps Editor.

- Click the right 'code' button in the bottom menu. A popup shows the results of your work: a json webannotation that references the IIIF image. The document contains the mask (in the form of a SVG selector) and the control points (in the form of an embedded GeoJSON document, see below).
- Copy the contents of the annotation by clicking the 'Copy' button
- Add a new file to the [/assets/annotations](https://github.com/theberlage/allmaps-workshop/tree/main/assets/annotations) folder in this GitHub repository. Give it a filename without spaces and special characters (you can use - to indicate spaces). Add `.json` as filename. Save the file by committing it.

*Alternative method*: several annotations can also be combined on a single `AnnotationPage`. Allmaps can generate this file for you. Follow these steps:

- Copy the IIIF manifest link
- Open this url: [https://annotations.allmaps.org/?url=](https://annotations.allmaps.org/?url=)
- Paste the IIIF manifest link after `?url=` in the browser address bar and press enter (the link will change automatically)
- Select all and copy the contents, save this to GitHub (using the `.json` extension)

## View your annotation in the Allmaps Viewer
There're two ways to view the annotation in the Allmaps Viewer.

- Navigate to the file on GitHub
  - Option 1: Click the 'Raw' button and copy the URL in the address bar of the browser
  - Option 2: Click the 'Copy raw contents' button next to the bin
- Go to the [Allmaps Viewer](https://viewer.allmaps.org)
  - Option 1: Paste the URL in the first field (Annotation URL) 
  - Option 2: Paste the contents in the text box
- Click view

❗You can also paste the link generated in the previous section (under *Alternative method*) in the Annotation URL field.

## Add the map as a layer in geojson.io
- In order to add the map as a layer in geojson.io (and also in GIS-applications), you need to use the Allmaps Tile Server. The Tile Server uses the georeferencing annotation to create [XYZ map tiles](https://en.wikipedia.org/wiki/Tiled_web_map).
- There're two ways to generate the URL template:
  - Follow the [Tile Server instructions](https://observablehq.com/@bertspaan/allmaps-tile-server) and click the 'Copy URL template to clipboard' button
  - Copy the url to the georeferencing annotation (see previous section) and place it after `=` in the following url: `https://allmaps.xyz/{z}/{x}/{y}.png?url=`
- Go to the [GeoJSON](http://geojson.io) editor
- Click 'Meta' and 'Add map layer' in the top menu. Paste the URL template and give the layer a name. Navigate the map to see the result (it won't do this automatically). At the bottom right, a checkbox appears to hide/show the layer
- You can repeat this to add another layer

## Annotate the map with geojson
- In the geojson.io editor you can add markers, rectangles, polygons and polylines (see the tool panel). You can also edit and delete features by using the buttons at the bottom of the tool panel.
- When you click a feature, you can edit its metadata in a popup panel. Each row in the table represents a label-value pair: on the left the labels, on the right the values. You can add a new pair by adding a new row.
- Make sure to establish standards, as a group, for adding metadata. Use simple names for labels, without caps and spaces.
- Disregard the style properties (they will only work in the geojson.io editor)

## Save the annotation to GitHub
- Make a new file in [/assets/geojson](https://github.com/theberlage/allmaps-workshop/tree/main/assets/geojson) and paste the contents. Give the file the extension `.geojson`.
