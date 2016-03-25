Meteor.npmPackage = function( npmPackage ) {
    var package = Npm.require( npmPackage );
    return package;
};

Talib = Npm.require( 'talib' );