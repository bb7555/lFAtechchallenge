/*
  backgrid-image-cell
  http://github.com/williammincy/backgrid-image-cell
  
  Licensed under the MIT @license.
*/
(function (root, factory) {

  // CommonJS
  if (typeof exports == "object") {
    module.exports = factory(require("underscore"),
                             require("backbone"),
                             require("backgrid"));
  }
  // Browser
  else {
    factory(root._, root.Backbone, root.Backgrid);
  }

}(this, function (_, Backbone, Backgrid) {

  "use strict";
  
  var ImageCell = Backgrid.ImageCell = Backgrid.Cell.extend({

	  /** @property */
	  className: "ImageCell",

	  render: function () {
		this.$el.empty();
		this.$el.html( this.renderImage( this.model ) );
		this.delegateEvents();
		return this;
	  },

	  renderImage: function(model) {
	  	var img = this.model.attributes.id;
	  	if(true) {
		  	return '<img src="thumbnails/'+img+'.jpg" alt="" />';
		}
		return '';
	  }

	});
}));