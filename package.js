Package.describe({
    name: 'cspecter:talib',
    version: '0.0.1',
    summary: 'Load Ta-lib NPM package.',
    git: "https://github.com/cspecter/meteor_talib",
    documentation: "README.md"
});

Npm.depends({
    "talib": "0.6.0"
});

Package.onUse( function( api ) {
    api.addFiles( 'npm-packages.js', [ 'server' ] );
    api.export( 'Talib', [ 'server' ] );
});
