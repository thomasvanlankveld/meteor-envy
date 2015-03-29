/* Information about this package */
Package.describe({
  summary: "Adds a red border to the HTML body when in development environment",
  version: "1.0.0",
  name: "thomasvanlankveld:meteor-envy"
  // git: "https://github.com/something/something.git",
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.0');
  api.use('underscore', 'server');
  api.use('mrt:allow-env');
  api.addFiles('client.js', 'client');
  api.addFiles('server.js', 'server');
});
