/*globals jQuery*/

/**
 * Colorir o fundo dos tópicos de acordo com o ícone de mensagem.
 *
 * @author   Luiz Felipe F.
 * @see      https://lffg.github.io
 * @version  1.0.0
 * @license  MIT
 */
 
(function ($) {
  'use strict';

  var config = [
    { url: 'i.imgur.com/pj3DCqm.png', background: 'rgba(146, 86, 178, 0.23)' },
    { url: 'i.imgur.com/N0UIwZW.png', background: 'rgba(127, 194, 93, 0.27)' },
    { url: 'i.imgur.com/9yStjvf.png', background: 'rgba(229, 86, 73, 0.13)' }
  ];

  /**
   * Caso o script não esteja sendo executado
   * dentro de um subfórum, pare a sua execução.
   */
  if (!/^\/f\d+-.+$/i.test(location.pathname)) return false;
  
  $(function () {
    $('.dterm').each(function () {
      var $this = $(this);

      /**
       * Caso o elemento não tenha uma estilização
       * como o nosso alvo, pule à próxima iteração.
       */
      if (!$this.css('background-image')) return;

      $.each(config, function (index, current) {
        var regex = new RegExp('^url\\("(http|https):\/\/' + current.url + '"\\)$', 'i');

        /**
         * Caso o elemento HTML que estamos na
         * iteração atual não tenha o fundo que
         * buscamos, passe à próxima iteração.
         */
        if (!regex.test($this.css('background-image'))) return;

        /**
         * Pintamos com o fundo desejado.
         */
        $this
          .parent()
          .css('background-color', current.background)
        ;
      });
    });
  });
})(jQuery);
