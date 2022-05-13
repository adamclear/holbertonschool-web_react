/// <reference path="Teacher.ts" />
var Subjects;
(function (Subjects) {
    var Subject = /** @class */ (function () {
        function Subject() {
        }
        Object.defineProperty(Subject.prototype, "setTeacher", {
            set: function (teach) {
                this.teacher = teach;
            },
            enumerable: false,
            configurable: true
        });
        return Subject;
    }());
    Subjects.Subject = Subject;
})(Subjects || (Subjects = {}));
