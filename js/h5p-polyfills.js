/**
 * Polyfills for missing H5P utility functions.
 * Required by H5P.InteractiveVideo which calls H5P.isEmpty()
 */
(function () {
    if (typeof H5P === 'undefined') return;

    if (typeof H5P.isEmpty !== 'function') {
        H5P.isEmpty = function (value) {
            if (value === null || value === undefined) return true;
            if (typeof value === 'string' && value.trim() === '') return true;
            if (Array.isArray(value) && value.length === 0) return true;
            if (typeof value === 'object' && !(value instanceof Date) && Object.keys(value).length === 0) return true;
            return false;
        };
    }
})();
