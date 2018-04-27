/**
 * Inline code SCEditor button.
 *
 * @author   Luiz Felipe F.
 * @see      https://lffg.github.io
 * @version  1.0.0
 * @license  MIT
 */

(function($) {
  'use strict';
  
  if (! /^(?:\/t\d+(?:p\d+|)-.*|\/post)$/i.test(location.pathname)) return false;

  $(window).on('load', function() {
    var $textarea = $('#text_editor_textarea');

    if (! $textarea.length) return false;

    var $sceditor = $textarea.sceditor('instance');

    var $button = $([
      '<a class="sceditor-button sceditor-button-inline-code" title="Inline Code">',
      '  <div unselectable="on" style="background-image: url(https://i.imgur.com/lCuu7i6.png);">Inline Code</div>',
      '</a>'
    ].join('')).insertAfter('.sceditor-button-code');

    $button.on('click', function() {
      var code = prompt('Insira o código...');

      if (! code || ! /\S/gi.test(code)) return false;

      $sceditor.insertText([
        '[table class="inline-code"][tr][td][code]', '[/code][/td][/tr][/table]'
      ].join(code))
    });
  });
})(jQuery);
