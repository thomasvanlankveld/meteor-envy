/* Information about this package */
Package.describe({
  summary: "Adds a red border to the HTML body when in development environment",
  version: "1.0.0",
  name: "thomasvanlankveld:meteor-envy",
  documentation: "readme.md",
  git: "https://github.com/thomasvanlankveld/meteor-envy.git"
});

Package.onUse(function (api) {
  api.versionsFrom("0.9.0");
  api.use("underscore", "server");
  api.use("mrt:allow-env@0.0.1");
  api.addFiles("client.js", "client");
  api.addFiles("server.js", "server");
});
