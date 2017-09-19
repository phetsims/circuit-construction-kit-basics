// Copyright 2015-2016, University of Colorado Boulder
// TODO: Review, document, annotate, i18n, bring up to standards

/**
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // modules
  var circuitConstructionKitCommon = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/circuitConstructionKitCommon' );
  var inherit = require( 'PHET_CORE/inherit' );
  var CCKCScreenView = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/view/CCKCScreenView' );

  /**
   * @param {CircuitConstructionKitModel} circuitConstructionKitScreenModel
   * @constructor
   */
  function LabScreenView( circuitConstructionKitScreenModel, tandem ) {
    CCKCScreenView.call( this, circuitConstructionKitScreenModel, tandem, {
      toolboxOrientation: 'horizontal'
    } );
  }

  circuitConstructionKitCommon.register( 'LabScreenView', LabScreenView );

  return inherit( CCKCScreenView, LabScreenView );
} );