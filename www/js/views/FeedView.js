define([
	"jquery",
	"backbone",
	"../models/FeedModel"
], function( $, Backbone, FeedModel ) {

    // Extends Backbone.View
    var FeedView = Backbone.View.extend( {

        // The View Constructor
        initialize: function() {

            // The render method is called when Feed Models are added to the Collection
            this.collection.on( "added", this.render, this );

        },

        // Renders all of the Feed models on the UI
        render: function() {

            // Sets the view's template property
            this.template = _.template( $( "script#feedItems" ).html(), { "collection": this.collection } );

            // Renders the view's template inside of the current listview element
            this.$el.find("ul").html(this.template);

            // Maintains chainability
            return this;

        }

    } );

    // Returns the View class
    return FeedView;

} );