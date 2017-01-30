goog.provide('gmfapp.displayquerygrid');

goog.require('gmf.QueryManager');
goog.require('gmf.Themes');
/** @suppress {extraRequire} */
goog.require('gmf.displayquerygridDirective');
/** @suppress {extraRequire} */
goog.require('gmf.layertreeDirective');
/** @suppress {extraRequire} */
goog.require('gmf.mapDirective');
/** @suppress {extraRequire} */
goog.require('ngeo.proj.EPSG21781');
/** @suppress {extraRequire} */
goog.require('ngeo.btnDirective');
/** @suppress {extraRequire} */
goog.require('ngeo.gridDirective');
/** @suppress {extraRequire} */
goog.require('ngeo.mapQueryDirective');
goog.require('ol.Map');
goog.require('ol.View');
goog.require('ol.layer.Tile');
goog.require('ol.source.OSM');
goog.require('ol.style.Circle');
goog.require('ol.style.Fill');
goog.require('ol.style.Stroke');
goog.require('ol.style.Style');


/** @type {!angular.Module} **/
gmfapp.module = angular.module('gmfapp', ['gmf']);


gmfapp.module.constant('ngeoQueryOptions', {
  'limit': 20
});


gmfapp.module.constant(
    'gmfTreeUrl',
    'https://geomapfish-demo.camptocamp.net/2.2/wsgi/themes?' +
        'version=2&background=background');


/**
 * Demo, NOT USED.
 * A sample directive to display the result.
 *
 * @return {angular.Directive} The directive specs.
 * @ngInject
 */
gmfapp.queryresultDirective = function() {
  return {
    restrict: 'E',
    scope: {},
    controller: 'gmfappQueryresultController as qrCtrl',
    bindToController: true,
    templateUrl: 'partials/queryresult.html'
  };
};

gmfapp.module.directive('gmfappQueryresult', gmfapp.queryresultDirective);


/**
 * Demo, NOT USED.
 * @param {ngeox.QueryResult} ngeoQueryResult Query service.
 * @constructor
 * @ngInject
 */
gmfapp.QueryresultController = function(ngeoQueryResult) {

  /**
   * @type {ngeox.QueryResult}
   * @export
   */
  this.result = ngeoQueryResult;

};


gmfapp.module.controller('gmfappQueryresultController', gmfapp.QueryresultController);


/**
 * @constructor
 * @param {gmf.Themes} gmfThemes The gmf themes service.
 * @param {gmf.QueryManager} gmfQueryManager The gmf query manager service.
 * @param {ngeo.FeatureOverlayMgr} ngeoFeatureOverlayMgr The ngeo feature
 *   overlay manager service.
 * @ngInject
 */
gmfapp.MainController = function(gmfThemes, gmfQueryManager,
    ngeoFeatureOverlayMgr) {

  gmfThemes.loadThemes();

  const fill = new ol.style.Fill({color: [255, 170, 0, 0.6]});
  const stroke = new ol.style.Stroke({color: [255, 170, 0, 1], width: 2});

  /**
   * FeatureStyle used by the displayquerygrid directive
   * @type {ol.style.Style}
   * @export
   */
  this.featureStyle = new ol.style.Style({
    fill,
    image: new ol.style.Circle({fill, radius: 5, stroke}),
    stroke
  });

  /**
   * @type {ol.Map}
   * @export
   */
  this.map = new ol.Map({
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      projection: 'EPSG:21781',
      resolutions: [200, 100, 50, 20, 10, 5, 2.5, 2, 1, 0.5],
      center: [537635, 152640],
      zoom: 3
    })
  });

  /**
   * @type {Array.<Object>|undefined}
   * export
   */
  this.themes = undefined;

  /**
   * @type {Object|undefined}
   * @export
   */
  this.treeSource = undefined;

  /**
   * @type {boolean}
   * @export
   */
  this.queryActive = true;

  /**
   * @type {boolean}
   * @export
   */
  this.queryGridActive = true;

  gmfThemes.getThemesObject().then((themes) => {
    if (themes) {
      this.themes = themes;
      this.treeSource = themes[3];
    }
  });

  ngeoFeatureOverlayMgr.init(this.map);
};

gmfapp.module.controller('MainController', gmfapp.MainController);
