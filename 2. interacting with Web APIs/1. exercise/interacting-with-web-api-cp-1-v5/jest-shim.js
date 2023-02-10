const { TextEncoder, TextDecoder } = require("util");
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
const { JSDOM } = require("jsdom");
const { readFileSync } = require("fs");
const { resolve } = require("path");
const html = readFileSync(resolve(__dirname, "index.html"), "utf8");

const { window } = new JSDOM(html, {
  runScripts: "dangerously",
  includeNodeLocations: false,
  pretendToBeVisual: true,
});

global.window = window;
global.document = window.document;

module.export = {
  window,
};
