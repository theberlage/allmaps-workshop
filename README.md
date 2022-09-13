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

## Whats is IIIF?
- The [International Image Interoperability Framework](https://iiif.io) (IIIF) is a set of standards used by cultural heritage institutions to share their digital collection data.
- The [IIIF Image API](https://iiif.io/api/image/3.0/) supports request for parts of images at different zoom levels. This makes it possible to quickly navigate high resolution image files. For example:
  - The full image: [https://dlc.services/iiif-img/7/4/0b0af56c-d836-4fe4-a9da-7ed66ea7a236/full/full/0/default.jpg](https://dlc.services/iiif-img/7/4/0b0af56c-d836-4fe4-a9da-7ed66ea7a236/full/full/0/default.jpg)
  - Part of the image: [https://dlc.services/iiif-img/7/4/0b0af56c-d836-4fe4-a9da-7ed66ea7a236/4316,4389,1557,890/1557,890/0/default.jpg](https://dlc.services/iiif-img/7/4/0b0af56c-d836-4fe4-a9da-7ed66ea7a236/4316,4389,1557,890/1557,890/0/default.jpg)
  - Left corner of the image: [https://dlc.services/iiif-img/7/4/0b0af56c-d836-4fe4-a9da-7ed66ea7a236/0,0,1000,1000/500,500/0/default.jpg](https://dlc.services/iiif-img/7/4/0b0af56c-d836-4fe4-a9da-7ed66ea7a236/0,0,1000,1000/500,500/0/default.jpg)
  - Rotated image: [https://dlc.services/iiif-img/7/4/0b0af56c-d836-4fe4-a9da-7ed66ea7a236/0,0,1000,1000/500,500/90/default.jpg](https://dlc.services/iiif-img/7/4/0b0af56c-d836-4fe4-a9da-7ed66ea7a236/0,0,1000,1000/500,500/90/default.jpg)
  - The URL scheme: `https://dlc.services/iiif-img/7/4/0b0af56c-d836-4fe4-a9da-7ed66ea7a236/[region]/[size]/[rotation]/[quality].[format]`
  - Not all IIIF-servers support the same functionalities!
- The [IIIF Presentation API](https://iiif.io/api/presentation/3.0/) describes the relationship between different images and their metadata. For example the individual pages that together make up the pages of a book. On digital collection portals that support IIIF, you can usually find a link to the IIIF Presentation Manifest. This is a json document holding the information about the object. You can use this link to open the object in other viewers.

## Find IIIF maps
- A curated list of [IIIF Map Collections](https://observablehq.com/@bertspaan/iiif-map-collections?collection=@bertspaan/allmaps)
- [David Rumsey Map Collection](https://www.davidrumsey.com)
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
   
❗Please note: not all of these collections expose the IIIF-link for the public, and some are currently not compatible with Allmaps.

## Georeference maps
- Copy the link to the IIIF-manifest
- Open the [Allmaps Editor](https://editor.allmaps.org)
- Paste the link and click 'Load'. At the top you now see four tabs, you can also go back and forth
- Select an image under the 'Collection' tab (often there's only one image to select). If somebody else has already began georeferencing the map, you'll be notified about this.
- Click the 'Mask' tab and draw a mask by zooming in and clicking points. The mask will be used to crop the image in the viewer. If you want to start again, click the centre button on the bottom right. This opens a panel of all masks; clicking the bin removes them (there's no way to undo). You can move points or add new points to the mask by clicking (don't release the mouse) and dragging points of lines.
- Now go to the 'Georeference' tab. On the left you see the selected image, on the right a world map. Zoom to the region of the map on the right. Click a point you recognise on both maps (and which has remained the same over time), such as a church tower or road crossing. Add the point on both sides (a number will indicate that they are paired). Add at least three of these points (they are called 'control points'). If you unfold the layers panel (centre button on the bottom right) you see an overview of your mask and the control points. You can remove points if needed (there's no undo yet).
- Navigate to the 'Results' tab and open the link in a new browser tab. The georeferenced map will now open in the Allmaps Viewer. If it doesn't show up right away, go back and forth between 'Original image' and 'Warped map' at the top right. The mask is indicated with an orange outline (the image is not cropped yet). If the IIIF-manifest contained multiple images and if more than one were georeferenced, these are shown at the bottom in a thumbnail row. Click them to change the view.

## Add the georef annotation to GitHub
- Copy the contents of the annotation
- Add to [/assets/annotations](https://github.com/theberlage/allmaps-workshop/tree/main/assets/annotations)

## View the map
- Find the georef annotation on GitHub and copy the raw url

## Annotate the map
- [Tile Server instructions](https://observablehq.com/@bertspaan/allmaps-tile-server)
- Or: `https://allmaps.xyz/{z}/{x}/{y}.png?url=[url to annotation]`
- [GeoJSON](http://geojson.io)
  - Meta > Add map Layer > Paste url

## Save the annotation to GitHub
- Add to [/assets/geojson](https://github.com/theberlage/allmaps-workshop/tree/main/assets/geojson)
