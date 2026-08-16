// Classic-script module registry.
//
// This app was written as ES modules and bundled by Vite. Browsers block
// `<script type="module">` loaded from file:// under CORS (origin null), so
// the modules were converted to classic scripts that register their exports
// here instead. This file replaces the module graph and must load before any
// converted module.
//
// The same pattern the education app uses in I18n.loadLangData().

(function () {
    window.AINOW = window.AINOW || {};

    var pending = {};

    // Replaces dynamic import(). Injects a classic <script> and resolves once
    // the module has registered itself on window.AINOW.
    //
    // relPath is relative to the HTML document, e.g. 'data/data-business.js'.
    window.AINOW.loadScript = function (relPath) {
        var key = relPath.replace(/\.js$/, '');

        if (window.AINOW[key]) {
            return Promise.resolve(window.AINOW[key]);
        }
        if (pending[key]) {
            return pending[key];
        }

        pending[key] = new Promise(function (resolve, reject) {
            var s = document.createElement('script');
            s.src = (window.AINOW.basePath || '') + relPath;
            s.onload = function () {
                if (window.AINOW[key]) {
                    resolve(window.AINOW[key]);
                } else {
                    reject(new Error('Loaded ' + relPath + ' but it registered nothing'));
                }
            };
            s.onerror = function () {
                delete pending[key];
                reject(new Error('Failed to load ' + relPath));
            };
            document.head.appendChild(s);
        });

        return pending[key];
    };
})();
