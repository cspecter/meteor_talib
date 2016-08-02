Package.describe({
    name: 'cspecter:talib',
    version: '0.1.0',
    summary: 'Load Ta-lib NPM package.',
    git: "https://github.com/cspecter/meteor_talib",
    documentation: "README.md"
});

Npm.depends({
    "talib": "1.0.2"
});

Package.onUse( function( api ) {
    api.addFiles( 'npm-packages.js', [ 'server' ] );
    api.export( 'talib', [ 'server' ] );
    api.export( 'Talib', [ 'server' ] );
});
