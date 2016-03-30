"use strict";

var _ = require("lodash");
var base = require("./webpack.config.dev");

module.exports = _.merge({}, _.omit(base, "entry"), {
  entry: {
    app: ["webpack/hot/dev-server", "./demo/app.jsx"]
  }
});
