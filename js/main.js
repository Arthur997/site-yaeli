/* Base da landing page: header no scroll, link ativo do menu, links externos pendentes,
   carrossel de depoimentos, entrada das seções, troca de idioma e envio do formulário. */

(function ($) {
  'use strict';

  var CONTACT_EMAIL = 'agape@agapewomenssupport.com.au';
  var ACTIVE_LINK_CLASSES = 'bg-action-subtle text-action-ink';

  /* Idiomas: o inglês está no HTML; os outros textos vêm de js/i18n.js. */
  var TEXTS = window.AQ_I18N || { en: {}, pt: {} };
  var DEFAULT_LANG = 'en';
  var LANG_STORAGE_KEY = 'aq-lang';
  var HTML_LANG = { en: 'en', pt: 'pt-BR' };
  var currentLang = DEFAULT_LANG;
  /* Páginas internas (políticas) indicam a própria chave de título em <html data-title-key>. */
  var TITLE_KEY = document.documentElement.getAttribute('data-title-key') || 'meta.title';

  /* Links externos ainda pendentes, ligados aos botões por data-link.
     Vazio: botão com data-closed fica desativado com aquele aviso; sem data-closed mantém o href da página. */
  var EXTERNAL_LINKS = {
    agape: '',              /* Humanitix: atividades da Ágape */
    'group-november': '',   /* Humanitix: encontro de 21/11 */
    'group-december': '',   /* Humanitix: encontro de 13/12 */
    webinar: ''             /* Formulário do webinar: só depois de vídeo, manual e e-mail testados */
  };

  /* Header ganha a borda inferior só depois que a página rola. */
  function bindHeaderBorder() {
    var $header = $('header');

    function updateBorder() {
      $header.toggleClass('border-line', $(window).scrollTop() > 8);
    }

    $(window).on('scroll', updateBorder);
    updateBorder();
  }

  /* Marca no menu a seção visível no topo da janela. */
  function bindActiveSection() {
    var $links = $('nav a[href^="#"]');
    var sections = $links
      .map(function () {
        var id = $(this).attr('href');
        return $(id).length ? { id: id, $el: $(id) } : null;
      })
      .get();

    if (!sections.length) {
      return;
    }

    function updateActive() {
      var limit = $(window).scrollTop() + 120;
      var current = null;

      sections.forEach(function (section) {
        if (section.$el.offset().top <= limit) {
          current = section.id;
        }
      });

      $links.removeClass(ACTIVE_LINK_CLASSES);
      if (current) {
        $links.filter('[href="' + current + '"]').addClass(ACTIVE_LINK_CLASSES);
      }
    }

    $(window).on('scroll', updateActive);
    updateActive();
  }

  /* A classe própria vem depois dos utilitários de cor: sem removê-los ela perderia a disputa. */
  function disableButton($button, labelKey) {
    $button
      .removeAttr('href')
      .attr({ role: 'link', 'aria-disabled': 'true' })
      .removeClass(function (_, classes) {
        return (classes.match(/\S*(bg-|text-ink|border|shadow)\S*/g) || []).join(' ');
      })
      .addClass('registration-closed')
      .attr('data-i18n', labelKey)
      .text(translate(labelKey));
  }

  /* Botão com link configurado abre o destino externo; sem link, desativa ou fica no href da página. */
  function bindExternalLinks() {
    $('[data-link]').each(function () {
      var $button = $(this);
      var url = EXTERNAL_LINKS[$button.data('link')];
      var closedLabelKey = $button.data('closed');

      if (url) {
        $button.attr({ href: url, target: '_blank', rel: 'noopener' });
      } else if (closedLabelKey) {
        disableButton($button, closedLabelKey);
      }
    });
  }

  /* Texto montado por JavaScript no idioma atual. Sem tradução, cai para o inglês. */
  function translate(key) {
    return (TEXTS[currentLang] || {})[key] || TEXTS.en[key] || key;
  }

  /* Guarda o inglês que está no HTML para poder voltar a ele sem recarregar. */
  function rememberEnglish() {
    $('[data-i18n]').each(function () { $(this).data('i18n-en', $(this).html()); });
    $('[data-i18n-alt]').each(function () { $(this).data('i18n-en', $(this).attr('alt')); });
    $('[data-i18n-aria]').each(function () { $(this).data('i18n-en', $(this).attr('aria-label')); });
  }

  /* Texto estático no idioma pedido: o de i18n.js ou, sem ele, o inglês guardado. */
  function staticText($el, key) {
    var dictionary = TEXTS[currentLang] || {};
    return currentLang !== DEFAULT_LANG && dictionary[key] ? dictionary[key] : $el.data('i18n-en');
  }

  function applyLanguage(lang) {
    currentLang = TEXTS[lang] ? lang : DEFAULT_LANG;

    $('[data-i18n]').each(function () {
      var $el = $(this);
      $el.html(staticText($el, $el.attr('data-i18n')));
    });
    $('[data-i18n-alt]').each(function () {
      var $el = $(this);
      $el.attr('alt', staticText($el, $el.attr('data-i18n-alt')));
    });
    $('[data-i18n-aria]').each(function () {
      var $el = $(this);
      $el.attr('aria-label', staticText($el, $el.attr('data-i18n-aria')));
    });

    $('.carousel-dots button').each(function (index) {
      $(this).attr('aria-label', translate('carousel.dot').replace('{n}', index + 1));
    });

    document.documentElement.lang = HTML_LANG[currentLang];
    document.title = translate(TITLE_KEY);
    $('meta[name="description"]').attr('content', translate('meta.description'));
    $('[data-lang]').each(function () {
      $(this).attr('aria-pressed', String($(this).data('lang') === currentLang));
    });
  }

  /* localStorage pode estar bloqueado (modo privado, cookies desligados): a escolha só não fica salva. */
  function readSavedLanguage() {
    try {
      return window.localStorage.getItem(LANG_STORAGE_KEY);
    } catch (error) {
      return null;
    }
  }

  function saveLanguage(lang) {
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch (error) {
      /* Sem armazenamento, o idioma vale só nesta visita. */
    }
  }

  /* ?lang=pt no endereço tem prioridade: permite mandar o link já em português. */
  function initialLanguage() {
    var fromUrl = new URLSearchParams(window.location.search).get('lang');
    return fromUrl || readSavedLanguage() || DEFAULT_LANG;
  }

  function bindLanguageSwitch() {
    rememberEnglish();
    applyLanguage(initialLanguage());

    $('[data-lang]').on('click', function () {
      var lang = $(this).data('lang');
      applyLanguage(lang);
      saveLanguage(lang);
    });
  }

  /* Quem vem de um botão com data-interest (Training, Supervision, Professional Referral) chega ao formulário com o interesse marcado. */
  function bindInterestShortcuts() {
    $('[data-interest]').on('click', function () {
      $('#contact-form input[name="interest"][value="' + $(this).data('interest') + '"]')
        .prop('checked', true)
        .trigger('change');
    });
  }

  /* Mostra um depoimento por vez, com setas e pontos. */
  function bindCarousel() {
    $('.carousel').each(function () {
      var $carousel = $(this);
      var $slides = $carousel.find('.carousel-slide');
      var $dots = $carousel.find('.carousel-dots');
      var current = 0;

      $slides.each(function (index) {
        $('<button type="button">')
          .attr('aria-label', translate('carousel.dot').replace('{n}', index + 1))
          .on('click', function () { show(index); })
          .appendTo($dots);
      });

      function show(index) {
        current = (index + $slides.length) % $slides.length;
        $slides.removeClass('is-active').eq(current).addClass('is-active');
        $dots.children().attr('aria-current', 'false').eq(current).attr('aria-current', 'true');
      }

      $carousel.find('.carousel-prev').on('click', function () { show(current - 1); });
      $carousel.find('.carousel-next').on('click', function () { show(current + 1); });
      show(0);
    });
  }

  /* Abas acessíveis: clique ou toque troca o painel; setas, Home e End navegam entre as abas. */
  function bindTabs() {
    $('.tabs').each(function () {
      var $tabs = $(this).find('[role="tab"]');

      function select(index) {
        $tabs.each(function (tabIndex) {
          var isSelected = tabIndex === index;
          $(this).attr({ 'aria-selected': String(isSelected), tabindex: isSelected ? '0' : '-1' });
          $('#' + $(this).attr('aria-controls')).prop('hidden', !isSelected);
        });
      }

      $tabs.on('click', function () {
        select($tabs.index(this));
      });

      $tabs.on('keydown', function (event) {
        var keyTargets = { ArrowRight: 1, ArrowLeft: -1 };
        var current = $tabs.index(this);
        var next = null;

        if (keyTargets[event.key]) {
          next = (current + keyTargets[event.key] + $tabs.length) % $tabs.length;
        } else if (event.key === 'Home') {
          next = 0;
        } else if (event.key === 'End') {
          next = $tabs.length - 1;
        }

        if (next !== null) {
          event.preventDefault();
          select(next);
          $tabs.eq(next).trigger('focus');
        }
      });

      select(0);
    });
  }

  /* Seção entra na tela uma vez e fica visível. Sem IntersectionObserver, tudo aparece já. */
  function bindReveal() {
    var $items = $('.reveal');

    if (!('IntersectionObserver' in window)) {
      $items.addClass('is-visible');
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          $(entry.target).addClass('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px' });

    $items.each(function () { observer.observe(this); });
  }

  /* Um campo é válido quando o controle nativo aceita o valor. */
  function isFieldValid($field) {
    var $controls = $field.find('input');

    if ($controls.filter('[type="radio"]').length) {
      return $controls.filter(':checked').length > 0;
    }

    return $controls.toArray().every(function (control) {
      return control.checkValidity() && $.trim(control.value) !== '';
    });
  }

  function validate($form) {
    var firstInvalid = null;

    $form.find('[data-field]').each(function () {
      var $field = $(this);
      var valid = isFieldValid($field);

      $field.toggleClass('field-error', !valid);
      if (!valid && !firstInvalid) {
        firstInvalid = $field;
      }
    });

    return firstInvalid;
  }

  function selectedInterest($form) {
    return $.trim($form.find('input[name="interest"]:checked').next('span').text());
  }

  /* Mensagem no idioma em que a pessoa está lendo a página. */
  function buildMessage($form) {
    var lines = [
      translate('message.greeting'),
      '',
      translate('message.name').replace('{name}', $.trim($form.find('#name').val())),
      translate('message.about').replace('{interest}', selectedInterest($form))
    ];
    var message = $.trim($form.find('#message').val());

    if (message) {
      lines.push('', message);
    }

    return lines.join('\n');
  }

  function buildMailtoUrl($form) {
    return 'mailto:' + CONTACT_EMAIL +
      '?subject=' + encodeURIComponent('Atma Qatarse Institute: ' + selectedInterest($form)) +
      '&body=' + encodeURIComponent(buildMessage($form));
  }

  function bindForm() {
    var $form = $('#contact-form');

    if (!$form.length) {
      return;
    }

    /* O erro some assim que o usuário corrige o campo. */
    $form.on('input change', '[data-field] input', function () {
      $(this).closest('[data-field]').removeClass('field-error');
    });

    $form.on('submit', function (event) {
      event.preventDefault();

      var $invalid = validate($form);
      if ($invalid) {
        $invalid.find('input').first().trigger('focus');
        return;
      }

      /* Sem backend: a mensagem abre pronta no e-mail e quem envia é a própria pessoa. */
      window.location.href = buildMailtoUrl($form);
    });
  }

  $(function () {
    bindHeaderBorder();
    bindActiveSection();
    bindExternalLinks();
    bindInterestShortcuts();
    bindCarousel();
    bindTabs();
    /* Depois dos links externos e do carrossel: os dois mudam textos que a troca de idioma precisa ver. */
    bindLanguageSwitch();
    bindReveal();
    bindForm();
  });
})(jQuery);
