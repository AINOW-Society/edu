
(function () {
    window.AINOW = window.AINOW || {};

    var pending = {};

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
