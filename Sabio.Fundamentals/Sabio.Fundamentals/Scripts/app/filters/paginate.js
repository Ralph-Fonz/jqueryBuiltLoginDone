﻿(function () {
    "use strict"
    angular.module('mainApp')
            .filter("paginate", PaginateFilter);

    function PaginateFilter() {
        return function (itemArray, currentPage, itemsPerPage) {
            currentPage = currentPage || 1;
            itemsPerPage = itemsPerPage || 1000000;
            var start = (currentPage - 1) * itemsPerPage;
            var end = start + itemsPerPage * 1;
            return itemArray.slice(start, end);
        }
    }

})();