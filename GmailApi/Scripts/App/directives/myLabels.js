app.directive('myLabels', function () {
    return {
        //template: 'Name: {{Labels[0].Name}}<br /> Street: {{Labels[0].Name}}'
        templateUrl: '/Scripts/App/views/myLabels-directive.html',
        link: function (scope, element, attr) {
            element.on('click', function () {
                alert('clicked');
            })
        }
    };
});