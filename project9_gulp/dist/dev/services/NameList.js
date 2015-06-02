var NamesList = (function () {
    function NamesList() {
        this.names = ['Dijkstra', 'Knuth', 'Turing', 'Hopper'];
    }
    NamesList.prototype.get = function () {
        return this.names;
    };
    NamesList.prototype.add = function (value) {
        this.names.push(value);
    };
    return NamesList;
})();
exports.NamesList = NamesList;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL05hbWVMaXN0LnRzIl0sIm5hbWVzIjpbIk5hbWVzTGlzdCIsIk5hbWVzTGlzdC5jb25zdHJ1Y3RvciIsIk5hbWVzTGlzdC5nZXQiLCJOYW1lc0xpc3QuYWRkIl0sIm1hcHBpbmdzIjoiQUFBQTtJQUVFQTtRQUNFQyxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxDQUFDQSxVQUFVQSxFQUFFQSxPQUFPQSxFQUFFQSxRQUFRQSxFQUFFQSxRQUFRQSxDQUFDQSxDQUFDQTtJQUN6REEsQ0FBQ0E7SUFDREQsdUJBQUdBLEdBQUhBO1FBQ0VFLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBO0lBQ3BCQSxDQUFDQTtJQUNERix1QkFBR0EsR0FBSEEsVUFBSUEsS0FBS0E7UUFDUEcsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7SUFDekJBLENBQUNBO0lBQ0hILGdCQUFDQTtBQUFEQSxDQVhBLEFBV0NBLElBQUE7QUFYWSxpQkFBUyxZQVdyQixDQUFBIiwiZmlsZSI6InNlcnZpY2VzL05hbWVMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE5hbWVzTGlzdCB7XG4gIG5hbWVzOiBBcnJheTxzdHJpbmc+O1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm5hbWVzID0gWydEaWprc3RyYScsICdLbnV0aCcsICdUdXJpbmcnLCAnSG9wcGVyJ107XG4gIH1cbiAgZ2V0KCkge1xuICAgIHJldHVybiB0aGlzLm5hbWVzO1xuICB9XG4gIGFkZCh2YWx1ZSkge1xuICAgIHRoaXMubmFtZXMucHVzaCh2YWx1ZSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==