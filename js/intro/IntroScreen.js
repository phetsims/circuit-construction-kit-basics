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
  var IntroModel = require( 'CIRCUIT_CONSTRUCTION_KIT_BASICS/intro/model/IntroModel' );
  var IntroScreenView = require( 'CIRCUIT_CONSTRUCTION_KIT_BASICS/intro/view/IntroScreenView' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Screen = require( 'JOIST/Screen' );
  var Rectangle = require( 'SCENERY/nodes/Rectangle' );
  var CCKCConstants =
    require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/CCKCConstants' );
  var VBox = require( 'SCENERY/nodes/VBox' );
  var HBox = require( 'SCENERY/nodes/HBox' );
  var Image = require( 'SCENERY/nodes/Image' );
  var ResistorNode = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/view/ResistorNode' );
  var Vertex = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/model/Vertex' );
  var Resistor = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/model/Resistor' );
  var Wire = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/model/Wire' );
  var WireNode = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/view/WireNode' );
  var CustomLightBulbNode = require( 'CIRCUIT_CONSTRUCTION_KIT_COMMON/view/CustomLightBulbNode' );
  var Property = require( 'AXON/Property' );

  // images
  var batteryImage = require( 'mipmap!CIRCUIT_CONSTRUCTION_KIT_COMMON/battery.png' );

  // constants
  var BACKGROUND_COLOR = CCKCConstants.BACKGROUND_COLOR;

  /**
   * @constructor
   */
  function IntroScreen( tandem ) {

    var icon = new Rectangle( 0, 0, Screen.MINIMUM_NAVBAR_ICON_SIZE.width, Screen.MINIMUM_NAVBAR_ICON_SIZE.height, {
      fill: BACKGROUND_COLOR
    } );

    var wireNode = new WireNode( null, null, new Wire( new Vertex( 0, 0 ), new Vertex( 100, 0 ), new Property( 0 ), tandem.createTandem( 'iconWire' ) ), new Property( true ), new Property( 'lifelike' ), tandem.createTandem( 'wireIcon' ) );
    var resistorNode = new ResistorNode( null, null, new Resistor( new Vertex( 0, 0 ), new Vertex( CCKCConstants.RESISTOR_LENGTH, 0 ), CCKCConstants.DEFAULT_RESISTANCE ),
      tandem.createTandem( 'resistorIcon' ), {
        icon: true
      } );
    var battery = new Image( batteryImage );
    var lightBulbNode = new CustomLightBulbNode( new Property( 0 ) );

    var elementWidth = 50;
    resistorNode.mutate( { scale: elementWidth / resistorNode.width * 0.75 } );
    wireNode.mutate( { scale: elementWidth / wireNode.width * 0.7 } );
    battery.mutate( { scale: elementWidth / battery.width } );
    lightBulbNode.mutate( { scale: elementWidth / lightBulbNode.width / 2 } );
    var vBox = new VBox( {
      spacing: 20,
      children: [ new HBox( { spacing: 20, children: [ wireNode, resistorNode ] } ), new HBox( {
        spacing: 20,
        children: [ battery, lightBulbNode ]
      } ) ]
    } );
    vBox.mutate( {
      scale: icon.height / vBox.height * 0.8,
      center: icon.center
    } );
    icon.addChild( vBox );

    var options = {
      name: 'Intro', //TODO i18n
      homeScreenIcon: icon,
      backgroundColorProperty: new Property( BACKGROUND_COLOR ),
      tandem: tandem
    };

    Screen.call( this,
      function() {
        return new IntroModel();
      },
      function( model ) {
        return new IntroScreenView( model, tandem.createTandem( 'view' ) );
      },
      options );
  }

  circuitConstructionKitCommon.register( 'IntroScreen', IntroScreen );

  return inherit( Screen, IntroScreen );
} );