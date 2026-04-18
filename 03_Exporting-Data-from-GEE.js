Export.image.toDrive({
  image: myImage,             // The image object to export
  description: 'image_export', // Name for the task
  scale: 30,                  // Resolution in meters
  region: myGeometry,         // Geometry/AOI to clip to
  fileFormat: 'GeoTIFF',      // Default format
  maxPixels: 1e9              // Increase if the image is very large
});


Export.table.toDrive({
  collection: myFeatures,     // The FeatureCollection to export
  description: 'table_export',
  fileFormat: 'CSV'           // Options: 'CSV', 'SHP', 'GeoJSON', 'KML', 'KMZ'
});




Export.video.toDrive({
  collection: myCollection,    // Collection of images
  description: 'video_export',
  dimensions: 720,             // Resolution height/width
  framesPerSecond: 10,
  region: myGeometry
});


