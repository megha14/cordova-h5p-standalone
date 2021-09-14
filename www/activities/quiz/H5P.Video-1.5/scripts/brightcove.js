/** @namespace H5P */
H5P.VideoBrightcove = (function ($) {

  /**
   * Brightcove video player for H5P.
   *
   * @class
   * @param {Array} sources Video files to use
   * @param {Object} options Settings for the player
   * @param {Object} l10n Localization strings
   */
  function Brightcove(sources, options, l10n) {
    
    var initiateStyling = function() {
      H5P.jQuery('style', window.parent.document).filter(function () {
        let bcStyles = H5P.jQuery(this).attr('id') === 'bc-style-vjs' ||
        (H5P.jQuery(this).attr('class') && H5P.jQuery(this).attr('class').search(videoId.dataPlayer) !== -1);
        if (bcStyles) {
          return true;
        } else {
          return false;
        }
      }).appendTo(H5P.jQuery('head'));
      H5P.jQuery('<style></style>').attr('type', 'text/css').text('.h5p-actions{display:none !important;}').appendTo(H5P.jQuery('head'));
    }
    
    let isActivityCreateMode = window.location.pathname.split('/').filter(x => (x === 'create') || (x === 'activity')).length === 2 ? true : false;
    let isActivityEditMode = window.location.pathname.split('/').filter(x => (x === 'edit') || (x === 'activity')).length === 2 ? true : false;
    let isActivityPreviewMode = window.location.pathname.split('/').filter(x => (x === 'preview') || (x === 'activity')).length === 2 ? true : false;
    const hideIVDefaultControls = !(isActivityCreateMode || isActivityEditMode || isActivityPreviewMode);
    
    var self = this;

    var player;
    var playbackRate = 1;
    var id = 'h5p-brightcove-' + numInstances;
    numInstances++;

    var $wrapper = $('<div/>').attr('id','curriki-player-wrapper');
    var $placeholder = $('<div/>', {
      id: id,
      html: '<div id="loading-wrapper">' + l10n.loading + '</div>'
    });

    var videoId = getId(sources[0].path);
    window.videoIdGlobal = getId(sources[0].path);
    let videoJsTagId = 'curriki-brightcove';
    var iframeDimensions = {width: 0, height: 0};
    if (window.parent.bcPlayerExternal) {
      videoJsTagId = window.parent.bcPlayerExternal.tagAttributes.id;
      //window.parent.document.getElementById(videoJsTagId).remove();
      H5P.jQuery('#' + videoJsTagId, window.parent.document).appendTo($placeholder);
      initiateStyling();
      $placeholder.appendTo($wrapper);
      H5P.jQuery('#' + videoJsTagId + '-container .h5p-iframe-wrapper iframe', window.parent.document).show();
      iframeDimensions.width = H5P.jQuery('#' + videoJsTagId + '-container .h5p-iframe-wrapper iframe', window.parent.document).width();
      iframeDimensions.height = H5P.jQuery('#' + videoJsTagId + '-container .h5p-iframe-wrapper iframe', window.parent.document).height();

      if (!window.bcPlayerInteractionsLoaded) {
        H5P.jQuery(window.parent.bcPlayerExternal.el()).find('p.vjs-loading-message').remove();
        let playTime = window.parent.bcPlayerExternalCurrentTime ? window.parent.bcPlayerExternalCurrentTime : 0;
        window.parent.bcPlayerExternal.currentTime(playTime);
        window.parent.bcPlayerExternal.play();
        window.parent.bcPlayerExternal.controls(true);
        window.parent.bcPlayerInteractionsLoaded = true;
      }

    } else {
      window.videoJsTagIdGlobal = videoJsTagId;
      H5P.jQuery('<video-js id="' + videoJsTagId + '" data-account="'+videoId.dataAccount+'" data-player="'+videoId.dataPlayer+'" data-embed="' + videoId.dataEmbed +'" controls="" data-video-id="'+videoId.dataVideoId+'" data-playlist-id="" data-application-id=""></video-js>').appendTo($placeholder);
      $placeholder.appendTo($wrapper);
    }
    
    self.brightcoveUrlParts = null;
    self.isPlayerLoaded = false;
    
    // Optional placeholder
    // var $placeholder = $('<iframe id="' + id + '" type="text/html" width="640" height="360" src="https://www.brightcove.com/embed/' + getId(sources[0].path) + '?enablejsapi=1&origin=' + encodeURIComponent(ORIGIN) + '&autoplay=' + (options.autoplay ? 1 : 0) + '&controls=' + (options.controls ? 1 : 0) + '&disabledkb=' + (options.controls ? 0 : 1) + '&fs=0&loop=' + (options.loop ? 1 : 0) + '&rel=0&showinfo=0&iv_load_policy=3" frameborder="0"></iframe>').appendTo($wrapper);
    
    var initiatePLayerControlsExternalEmbed = function (videojsLib, player, width) {
      player.getChild('controlBar').removeChild('FullscreenToggle');
      var FullscreenToggle = videojsLib.getComponent('FullscreenToggle');
      var CurrikiFullScreenButton = videojsLib.extend(FullscreenToggle, {
        constructor: function() {
          FullscreenToggle.apply(this, arguments);
          //this.addClass('vjs-fullscreen-control');
        },
        handleClick: function() {
          self.parent.controls.$fullscreen.trigger('click');
        }
      });
      videojsLib.registerComponent('CurrikiFullScreenButton', CurrikiFullScreenButton);
      player.getChild('controlBar').addChild('currikiFullScreenButton', {});

      player.on('play', function () {
        self.trigger('stateChange', H5P.Video.PLAYING);
      });

      player.on('pause', function () {
        self.trigger('stateChange', H5P.Video.PAUSED);
      });
      
      player.on('buffered', function () {
        self.trigger('stateChange', H5P.Video.BUFFERING);
      });

      player.on('ended', function () {
        self.trigger('stateChange', H5P.Video.ENDED);
      });
      
      player.width(width);
      let height = width * (9/16);
      player.height(height);
      if (hideIVDefaultControls) {
        player.controls(true);
      } else {
        player.controls(false);
      }

      self.trigger('ready');
      self.trigger('loaded');
      
      if (hideIVDefaultControls && window.parent.bcPlayerExternal) {
        H5P.jQuery('.h5p-controls').hide();
        H5P.jQuery('.h5p-splash-wrapper').hide();
        H5P.jQuery('.h5p-content').css('border', '0px');
      }
    }

    /**
     * Use the Brightcove API to create a new player
     *
     * @private
     */
    var create = function () {
      
      H5P.jQuery('#loading-wrapper').remove();
      if (!$placeholder.is(':visible') || player !== undefined) {
        return;
      }

      let videojsLib = window.parent.bcPlayerExternal ? window.parent.videojs : window.videojs;
      if (videojsLib === undefined) {
        // Load Bridghtcove library
        loadAPI(create);
        //return;
      }

      var width = $wrapper.width();
        if (width < 200) {
          width = 200;
        }
        
      player = window.parent.bcPlayerExternal ? window.parent.bcPlayerExternal : undefined;
      if (player) {
        player.tech_.off('dblclick');
        initiatePLayerControlsExternalEmbed(videojsLib, player, width);
        return;
      }

      var intervalCount = 0;
      let cntrStartTime = new Date();
      var videojsloadTime = setInterval(function(e) {
        videojsLib = window.parent.bcPlayerExternal ? window.parent.videojs : window.videojs;
        if (videojsLib !== undefined) {
          if (videojsLib) {
            player = videojsLib(window.videoJsTagIdGlobal);
          }

          const videoId = getId(sources[0].path);
          
          player.tech_.off('dblclick');
          // when player has HAVE_ENOUGH_DATA state. https://docs.videojs.com/player#readyState
          if ( (player.readyState() === 4 || player.readyState() === 2) && !window.videoJsEventsInitiated ) {
            /************[start full screen]*********************/
            player.getChild('controlBar').removeChild('FullscreenToggle');
            var FullscreenToggle = videojsLib.getComponent('FullscreenToggle');
            var CurrikiFullScreenButton = videojsLib.extend(FullscreenToggle, {
              constructor: function() {
                FullscreenToggle.apply(this, arguments);
                //this.addClass('vjs-fullscreen-control');
              },
              handleClick: function() {
                self.parent.controls.$fullscreen.trigger('click');
              }
            });
            videojsLib.registerComponent('CurrikiFullScreenButton', CurrikiFullScreenButton);
            player.getChild('controlBar').addChild('currikiFullScreenButton', {});

            // /************[end full screen]*********************/

            player.on('play', function () {
              self.trigger('stateChange', H5P.Video.PLAYING);
            });
  
            player.on('pause', function () {
              self.trigger('stateChange', H5P.Video.PAUSED);
            });
  
            
            player.on('buffered', function () {
              self.trigger('stateChange', H5P.Video.BUFFERING);
            });
  
            player.on('ended', function () {
              self.trigger('stateChange', H5P.Video.ENDED);
            });
            
            player.ready(function() {
              H5P.jQuery('#loading-msg').remove();
              H5P.jQuery('#' + videoJsTagId).show();
              player.width(width);
              let height = width * (9/16);
              player.height(height);
              if (hideIVDefaultControls) {
                player.controls(true);
              } else {
                player.controls(false);
              }
              
              self.trigger('ready');
              self.trigger('loaded');
            });
            clearInterval(videojsloadTime);
            window.videoJsEventsInitiated = true;
          } else if ( (((new Date().getTime()) - cntrStartTime.getTime()) / 1000) > 60) {
            console.log("Player could not get ready after waiting for 1 minute.");
            clearInterval(videojsloadTime);
          }
        } else if (intervalCount === 20) {
          console.log("VideoJS not loaded. or it's taking too much time to load.");
          clearInterval(videojsloadTime);
        }
        intervalCount++;
      }, 1000);
      
    };

    /**
     * Indicates if the video must be clicked for it to start playing.
     * For instance Brightcove videos on iPad must be pressed to start playing.
     *
     * @public
     */
    self.pressToPlay = navigator.userAgent.match(/iPad/i) ? true : false;

    /**
    * Appends the video player to the DOM.
    *
    * @public
    * @param {jQuery} $container
    */
    self.appendTo = function ($container) {
      $container.addClass('h5p-brightcove').append($wrapper);
      create();
    };

    /**
     * Get list of available qualities. Not available until after play.
     *
     * @public
     * @returns {Array}
     */
    self.getQualities = function () {
      if (!player || !player.getAvailableQualityLevels) {
        return;
      }

      var qualities = player.getAvailableQualityLevels();
      if (!qualities.length) {
        return; // No qualities
      }

      // Add labels
      for (var i = 0; i < qualities.length; i++) {
        var quality = qualities[i];
        var label = (LABELS[quality] !== undefined ? LABELS[quality] : 'Unknown'); // TODO: l10n
        qualities[i] = {
          name: quality,
          label: LABELS[quality]
        };
      }

      return qualities;
    };

    /**
     * Get current playback quality. Not available until after play.
     *
     * @public
     * @returns {String}
     */
    self.getQuality = function () {
      if (!player || !player.getPlaybackQuality) {
        return;
      }

      var quality = player.getPlaybackQuality();
      return quality === 'unknown' ? undefined : quality;
    };

    /**
     * Set current playback quality. Not available until after play.
     * Listen to event "qualityChange" to check if successful.
     *
     * @public
     * @params {String} [quality]
     */
    self.setQuality = function (quality) {
      if (!player || !player.setPlaybackQuality) {
        return;
      }

      player.setPlaybackQuality(quality);
    };

    /**
     * Start the video.
     *
     * @public
     */
    self.play = function () {
      if (!player || !player.play) {
        self.on('ready', self.play);
        return;
      }

      player.play();
    };

    /**
     * Pause the video.
     *
     * @public
     */
    self.pause = function () {
      self.off('ready', self.play);
      if (!player || !player.pause) {
        return;
      }
      player.pause();
    };

    /**
     * Seek video to given time.
     *
     * @public
     * @param {Number} time
     */
    self.seek = function (time) {
      if (!player || !player.currentTime) {
        return;
      }
      player.currentTime(time);
    };

    /**
     * Get elapsed time since video beginning.
     *
     * @public
     * @returns {Number}
     */
    self.getCurrentTime = function () {
      if (!player || !player.currentTime) {
        return;
      }
      return player.currentTime();
    };

    /**
     * Get total video duration time.
     *
     * @public
     * @returns {Number}
     */
    self.getDuration = function () {
      if (!player || !player.duration) {
        return;
      }
      return player.duration();
    };

    /**
     * Get percentage of video that is buffered.
     *
     * @public
     * @returns {Number} Between 0 and 100
     */
    self.getBuffered = function () {
      if (!player || !player.bufferedPercent) {
        return;
      }

      return player.bufferedPercent();
    };

    /**
     * Turn off video sound.
     *
     * @public
     */
    self.mute = function () {
      if (!player || !player.muted) {
        return;
      }

      player.muted(true);
    };

    /**
     * Turn on video sound.
     *
     * @public
     */
    self.unMute = function () {
      if (!player || !player.muted) {
        return;
      }

      player.muted(false);
    };

    /**
     * Check if video sound is turned on or off.
     *
     * @public
     * @returns {Boolean}
     */
    self.isMuted = function () {
      if (!player || !player.muted) {
        return;
      }

      return player.muted();
    };

    /**
     * Return the video sound level.
     *
     * @public
     * @returns {Number} Between 0 and 100.
     */
    self.getVolume = function () {
      if (!player || !player.volume) {
        return;
      }

      return player.volume();
    };

    /**
     * Set video sound level.
     *
     * @public
     * @param {Number} level Between 0 and 100.
     */
    self.setVolume = function (level) {
      if (!player || !player.volume) {
        return;
      }

      player.volume(level);
    };

    /**
     * Get list of available playback rates.
     *
     * @public
     * @returns {Array} available playback rates
     */
    self.getPlaybackRates = function () {
      return [0.25, 0.5, 1, 1.25, 1.5, 2];
    };

    /**
     * Get current playback rate.
     *
     * @public
     * @returns {Number} such as 0.25, 0.5, 1, 1.25, 1.5 and 2
     */
    self.getPlaybackRate = function () {
      if (!player || !player.playbackRate) {
        return;
      }

      return player.playbackRate();
    };

    /**
     * Set current playback rate.
     * Listen to event "playbackRateChange" to check if successful.
     *
     * @public
     * @params {Number} suggested rate that may be rounded to supported values
     */
    self.setPlaybackRate = function (newPlaybackRate) {
      if (!player || !player.playbackRate) {
        return;
      }

      playbackRate = Number(newPlaybackRate);
      player.playbackRate(playbackRate);
    };

    /**
     * Set current captions track.
     *
     * @param {H5P.Video.LabelValue} Captions track to show during playback
     */
    self.setCaptionsTrack = function (track) {
      player.setOption('captions', 'track', track ? {languageCode: track.value} : {});
    };

    /**
     * Figure out which captions track is currently used.
     *
     * @return {H5P.Video.LabelValue} Captions track
     */
    self.getCaptionsTrack = function () {
      var track = player.getOption('captions', 'track');
      return (track.languageCode ? new H5P.Video.LabelValue(track.displayName, track.languageCode) : null);
    };

    var manageStylesOnResize = function () {
      H5P.jQuery('style', window.parent.document).filter(function () {
        let bcStyles = H5P.jQuery(this).attr('id') === 'bc-style-vjs' ||
        (H5P.jQuery(this).attr('class') && H5P.jQuery(this).attr('class').search(videoId.dataPlayer) !== -1);
        if (bcStyles) {
          let domSelectorType = H5P.jQuery(this).attr('id') ? '#' : '.';
          let domSelectorTypeAttr = H5P.jQuery(this).attr('id') ? 'id' : 'class';
          H5P.jQuery(domSelectorType + H5P.jQuery(this).attr(domSelectorTypeAttr)).remove();
          return H5P.jQuery(domSelectorType + H5P.jQuery(this).attr(domSelectorTypeAttr)) ? true : false;
        } else {
          return false;
        }
      }).appendTo(H5P.jQuery('head'));
    }

    // Respond to resize events by setting the YT player size.
    self.on('resize', function () {
      
      if (!$wrapper.is(':visible')) {
        return;
      }

      if (!player) {
        // Player isn't created yet. Try again.
        create();
        return;
      }

      // Use as much space as possible
      $wrapper.css({
        width: '100%',
        height: '100%'
      });

      var width = $wrapper[0].clientWidth;
      var height = options.fit ? $wrapper[0].clientHeight : (width * (9/16));

      if (window.parent.bcPlayerExternal && H5P.jQuery('body.h5p-fullscreen', window.parent.document).get().length > 0) {
        width = H5P.jQuery('.h5p-fullscreen', window.parent.document).width();
        height = options.fit ? H5P.jQuery('.h5p-fullscreen', window.parent.document).height() : (width * (9/16));
        H5P.jQuery('#' + videoJsTagId + '-container .h5p-iframe-wrapper iframe', window.parent.document).width(width);
        H5P.jQuery('#' + videoJsTagId + '-container .h5p-iframe-wrapper iframe', window.parent.document).height(height);
        height = height - 30;
      } else if (window.parent.bcPlayerExternal && H5P.jQuery('body.h5p-fullscreen', window.parent.document).get().length === 0) {
        H5P.jQuery('#' + videoJsTagId + '-container .h5p-iframe-wrapper iframe', window.parent.document).width(iframeDimensions.width);
        H5P.jQuery('#' + videoJsTagId + '-container .h5p-iframe-wrapper iframe', window.parent.document).height(iframeDimensions.height);
        width = iframeDimensions.width;
        height = iframeDimensions.height;
        height = height > 200 ? height : (width * (9/16));
      }

      // Set size
      $wrapper.css({
        width: width + 'px',
        height: height + 'px'
      });

      player.width(width);
      player.height(height);

      if (window.parent.bcPlayerExternal) {
        manageStylesOnResize();
        H5P.jQuery('.h5p-splash-wrapper').remove();
      }
    });
  }

  /**
   * Check to see if we can play any of the given sources.
   *
   * @public
   * @static
   * @param {Array} sources
   * @returns {Boolean}
   */
  Brightcove.canPlay = function (sources) {
    return getId(sources[0].path);
  };

  /**
   * Find id of Brightcove video from given URL.
   *
   * @private
   * @param {String} url
   * @returns {String} Brightcove video identifier
   */

  var getId = function (url) {
    // Has some false positives, but should cover all regular URLs that people can find
    var matches = url.match(/((?:(?:https?|ftp|file):\/\/|www\.)players.brightcove.net)\/([0-9]*)\/(\w+)\/(index.html)\?(\w+)\=([0-9]*)/i);
    if (matches && matches.length === 7) {
      let dataPlayer = matches[3].split('_').length === 2 ? matches[3].split('_')[0] : 'default';
      let dataEmbed = matches[3].split('_')[1];
      let brightcoveUrlParts = {dataAccount: matches[2], dataVideoId: matches[6], dataPlayer, dataEmbed};
      self.brightcoveUrlParts = brightcoveUrlParts;
      return brightcoveUrlParts;
    }
  };

  /**
   * Load the IFrame Player API asynchronously.
   */
  var loadAPI = function (loaded) {  
    if (window.onBrightcoveIframeAPIReady !== undefined) {
      // Someone else is loading, hook in
      var original = window.onBrightcoveIframeAPIReady;
      window.onBrightcoveIframeAPIReady = function (id) {
        loaded(id);
        original(id);
      };
    }
    else {
      // Load the API our self
      var tag = document.createElement('script');
      tag.src = "https://players.brightcove.net/" + self.brightcoveUrlParts.dataAccount + "/" + window.videoIdGlobal.dataPlayer + "_" + self.brightcoveUrlParts.dataEmbed + "/index.min.js";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      window.onBrightcoveIframeAPIReady = loaded;
    }
  };

  /** @constant {Object} */
  var LABELS = {
    highres: '2160p', // Old API support
    hd2160: '2160p', // (New API)
    hd1440: '1440p',
    hd1080: '1080p',
    hd720: '720p',
    large: '480p',
    medium: '360p',
    small: '240p',
    tiny: '144p',
    auto: 'Auto'
  };

  /** @private */
  var numInstances = 0;

  // Extract the current origin (used for security)
  var ORIGIN = window.location.href.match(/http[s]?:\/\/[^\/]+/);
  ORIGIN = !ORIGIN || ORIGIN[0] === undefined ? undefined : ORIGIN[0];
  // ORIGIN = undefined is needed to support fetching file from device local storage

  return Brightcove;
})(H5P.jQuery);

// Register video handler
H5P.videoHandlers = H5P.videoHandlers || [];
H5P.videoHandlers.push(H5P.VideoBrightcove);
