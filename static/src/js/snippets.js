odoo.define('depriss_theme.snippets', function (require) {
    'use strict';

    var core = require('web.core');
    var snippetsEditor = require('website.snippet.editor');

    var _t = core._t;

    snippetsEditor.Class.include({
        xmlDependencies: snippetsEditor.Class.prototype.xmlDependencies.concat([
            '/depriss_theme/static/src/xml/snippets.xml',
        ]),

        defaultXmlDependencies: snippetsEditor.Class.prototype.defaultXmlDependencies.concat([
            '/depriss_theme/static/src/xml/snippets.xml',
        ]),

        _get_snippet_archs: function () {
            var archs = this._super.apply(this, arguments);
            archs.push('/depriss_theme/static/src/xml/snippets.xml');
            return archs;
        },
    });

    return snippetsEditor;
});
