var a = [{ 'individualid': 0, 'comapnyid': 345 }, { 'individualid': 123, 'comapnyid': 0 }, { 'individualid': 0, 'comapnyid': 12346 }];
var b = [{ 'individualid': 123, 'comapnyid': 0 }, { 'individualid': 0, 'comapnyid': 345 }, { 'individualid': 9, 'comapnyid': 12345 }];

function remove_duplicates(a, b) {
    b = b.filter(function (item) {
        for (var i = 0, len = a.length; i < len; i++) {
            if (a[i].individualid == item.individualid || a[i].comapnyid == item.comapnyid) {
                return false;
            }
        }
        return true;
    });

    //console.log(a);
    console.log(b);
}

remove_duplicates(a, b);
