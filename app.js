$(function () {
    function Count() {
        var self = this;
        function addZero(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }
        var countUp = function () {
            var result = {};
            var startingDate = new Date(2016, 2, 27);
            var currentDate = new Date();
            console.log(startingDate);
            var timeDiff = Math.abs(currentDate - startingDate) / 1000;
            var day = addZero(Math.floor(timeDiff / 60 / 60 / 24));
            timeDiff -= day * 60 * 60 * 24;
            var hour = addZero(Math.floor(timeDiff / 60 / 60));
            timeDiff -= hour * 60 * 60;
            var minute = addZero(Math.floor(timeDiff / 60));
            timeDiff -= minute * 60;
            var second = addZero(Math.floor(timeDiff));
            result = { days: day, hours: hour, minutes: minute, seconds: second };
            return result;
        }
        self.days = ko.observable();
        self.hours = ko.observable();
        self.minutes = ko.observable();
        self.seconds = ko.observable();
        self.updateCount = function () {
            setInterval(function () {
                var result = countUp();
                self.days(result.days);
                self.hours(result.hours);
                self.minutes(result.minutes);
                self.seconds(result.seconds);
            }, 1000);
        };
    }
    var vm = new Count();
    ko.applyBindings(vm);
    vm.updateCount();
})