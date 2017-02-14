goog.provide('ngeo.utils');

goog.require('ol.geom.LineString');
goog.require('ol.geom.MultiPoint');
goog.require('ol.geom.MultiLineString');
goog.require('ol.geom.MultiPolygon');
goog.require('ol.geom.Point');
goog.require('ol.geom.Polygon');


/**
 * Utility method that converts a simple geometry to its multi equivalent. If
 * the geometry itself is already multi, it is returned as-is.
 * @param {ol.geom.Geometry} geometry A geometry
 * @return {ol.geom.Geometry} A multi geometry
 */
ngeo.utils.toMulti = function(geometry) {
  let multiGeom;
  if (geometry instanceof ol.geom.Point) {
    multiGeom = new ol.geom.MultiPoint([]);
    multiGeom.appendPoint(geometry);
  } else if (geometry instanceof ol.geom.LineString) {
    multiGeom = new ol.geom.MultiLineString([]);
    multiGeom.appendLineString(geometry);
  } else if (geometry instanceof ol.geom.Polygon) {
    multiGeom = new ol.geom.MultiPolygon([]);
    multiGeom.appendPolygon(geometry);
  } else {
    multiGeom = geometry;
  }
  return multiGeom;
};

/**
 * Checks if on Safari.
 * @return {boolean} True if on Safari.
 */
ngeo.utils.isSafari = function() {
  return navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
};

/**
 * Takes a hex value and prepends a zero if it's a single digit.
 * Small helper method for use by goog.color and friends.
 * @param {string} hex Hex value to prepend if single digit.
 * @return {string} hex value prepended with zero if it was single digit,
 *     otherwise the same value that was passed in.
 */
ngeo.utils.colorZeroPadding = function(hex) {
  return hex.length == 1 ? `0${hex}` : hex;
};

/**
 * Converts a color from RGB to hex representation.
 * @param {!Array.<number>} rgb rgb representation of the color.
 * @return {string} hex representation of the color.
 */
ngeo.utils.rgbArrayToHex = function(rgb) {
  const r = rgb[0];
  const g = rgb[1];
  const b = rgb[2];
  if (r != (r & 255) || g != (g & 255) || b != (b & 255)) {
    throw Error(`"(${r},${g},${b})" is not a valid RGB color`);
  }
  const hexR = ngeo.utils.colorZeroPadding(r.toString(16));
  const hexG = ngeo.utils.colorZeroPadding(g.toString(16));
  const hexB = ngeo.utils.colorZeroPadding(b.toString(16));
  return `#${hexR}${hexG}${hexB}`;
};