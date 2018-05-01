/*globals jQuery*/

/**
 * Warning for sending PM'ss for admins.
 *
 * @author   Luiz Felipe F.
 * @see      https://lffg.github.io
 * @version  1.0.0
 * @license  MIT
 */

(function($) {
  'use strict';

  var admins = [
    'Luiz', 'Dr\\.'
  ];

  if (! /\/privmsg\?mode=post/i.test(location.href)) return;

  $(function() {
    var $alert = $([
      '<table class="mod-action adm" style="font-size: 13px; line-height: 1.6; margin: 10px 0;">',
      '  <tbody>',
      '    <tr>',
      '      <td class="icon fa fa-exclamation"></td>',
      '      <td>',
      '        <h4 class="post-content" style="margin-bottom: 10px;">Atenção</h4>',
      '        <br>',
      '        <div>Você está a enviar uma mensagem privada para um <strong>Administrador</strong>, portanto, pedimos que se atente aos pontos a seguir:</div>',
      '        <ul style="margin-bottom: 10px;">',
      '          <li>Se você procura suporte no geral, <a href="/c3-">crie um novo tópico no Setor de Suporte</a>;</li>',
      '          <li>Se você procura informações ou dúvidas em relação ao funcionamento do fórum, contate um <b>Moderador</b>.</li>',
      '        </ul>',
      '        <div>Com isso, pedimos que só envie uma mensagem privada para um Administrador caso:</div>',
      '        <ul style="margin-bottom: 10px;">',
      '          <li>Você precise recuperar senha, e-mail de fundação ou afins;</li>',
      '          <li>Outros assuntos que tenham urgência.</li>',
      '        </ul>',
      '        <div>Agradecemos a sua colaboração.</div>',
      '      </td>',
      '    </tr>',
      '  </tbody>',
      '</table>'
    ].join('')).hide().insertAfter($('dl dd input[name="subject"]').parents('dl'));

    /**
     * Creating the regex.
     */
    var regex = {
      field: undefined,
      _a: { nicks: [] }
    };

    $.each(admins, function(index, admin) {
      regex._a.nicks.push(admin);
    });

    regex.field = new RegExp('^(?:\\s+|)(?:' + regex._a.nicks.join('|') + ')(?:\\s+|)$', 'i');

    /**
     * Begin inserting when it's possible.
     */
    if (regex.field.test($('[name="username[]"]').val())) {
      $alert.show();
    }

    $('body').on('change keyup', '[name="username[]"]', function() {
      if (regex.field.test($(this).val())) {
        $alert.show();
        return;
      }
      
      $alert.hide();
    });
  });
})(jQuery);
