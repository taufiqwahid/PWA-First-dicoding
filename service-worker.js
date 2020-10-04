const CHACE_NAME = "firstpwa";

var urlsToChace = [
  "/",
  "/nav.html",
  "/index.html",
  "/pages/home.html",
  "/pages/about.html",
  "/pages/contact.html",
  "/css/materialize.min.css",
  "/js/materialize.min.js",
  "/js/nav.js",
];

self.addEventListener("install", function (event) {
  event.waitUntill(
    chaces.open(CHACE_NAME).then(function (chace) {
      return chace.addAll(urlsToChace);
    }),
  );
});
