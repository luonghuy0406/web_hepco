module.exports = {
    options: {
        input: [
            'src/**/*.js',
            'src/layout/main/header/index.js'
          ],
        debug: true,
        removeUnusedKeys: true,
        // read strings from functions: IllegalMoveError('KEY') or t('KEY')
        func: {
            list: ['rta_t', 't'],
            extensions: ['.js'],
        },

        trans: false,

        // Create and update files `en.json`, `fr.json`, `es.json`
        lngs: ['vi', 'en'],

        ns: [
            // The namespace I use
            'translation',
        ],

        defaultLng: 'vi',
        defaultNs: 'translation',

        // Put a blank string as initial translation
        // (useful for Weblate be marked as 'not yet translated', see later)
        defaultValue: (lng, ns, key) => '',

        // Location of translation files
        resource: {
            loadPath: 'src/i18n/locales/{{lng}}.json',
            savePath: 'src/i18n/locales/{{lng}}.json',
            jsonIndent: 4,
            lineEnding: '\n'
        },
        nsSeparator: false, // namespace separator
        keySeparator: false, // key separator
        interpolation: {
            prefix: '{{',
            suffix: '}}'
        }
    },
};