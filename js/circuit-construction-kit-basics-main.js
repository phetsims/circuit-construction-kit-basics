// Copyright 2015-2016, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Sam Reid (PhET Interactive Simulations)
 */
define( function( require ) {
  'use strict';

  // modules
  var IntroScreen = require( 'CIRCUIT_CONSTRUCTION_KIT_BASICS/intro/IntroScreen' );
  var EnergyScreen = require( 'CIRCUIT_CONSTRUCTION_KIT_BASICS/energy/EnergyScreen' );
  var LabScreen = require( 'CIRCUIT_CONSTRUCTION_KIT_BASICS/lab/LabScreen' );
  var Sim = require( 'JOIST/Sim' );
  var SimLauncher = require( 'JOIST/SimLauncher' );
  var Tandem = require( 'TANDEM/Tandem' );

  // constants
  var TANDEM = Tandem.createRootTandem();

  // strings
  var circuitConstructionKitBasicsTitleString = require( 'string!CIRCUIT_CONSTRUCTION_KIT_BASICS/circuit-construction-kit-basics.title' );

  var simOptions = {
    credits: {
      leadDesign: 'Amy Rouinfar',
      softwareDevelopment: 'Sam Reid',
      team: 'Michael Dubson, Ariel Paul, Kathy Perkins',
      qualityAssurance: 'Steele Dalton, Bryce Griebenow, Elise Morgan, Ben Roberts',
      graphicArts: 'Bryce Gruneich'
    }
  };

  // Circuit Construction Kit has unit tests for checking the mathematics for the Modified Nodal Analysis
  // algorithm.  In order to load the classes into an accessible namespace, the *-config.js and *-main.js are loaded
  // however, when running the unit tests we don't also want to launch the simulation.
  if ( !window.circuitConstructionKitTestSuite ) {
    SimLauncher.launch( function() {
      var sim = new Sim( circuitConstructionKitBasicsTitleString, [
        new IntroScreen( TANDEM.createTandem( 'introScreen' ) ),
        new EnergyScreen( TANDEM.createTandem( 'energyScreen' ) ),
        new LabScreen( TANDEM.createTandem( 'labScreen' ) )
      ], simOptions );
      sim.start();
    } );
  }
} );