var json_data = [
    { "email": "admin1@tech3s-mentor.com", "firstName": "AdminF1", "lastName": "L", "phone": "+84909123452" },
    { "email": "admin1@tech3s-mentor.com", "firstName": "AdminF2", "lastName": "L", "phone": "+84909123453" },
    { "email": "admin1@tech3s-mentor.com", "firstName": "AdminF3", "lastName": "L", "phone": "+84909123454" },
    { "email": "admin1@tech3s-mentor.com", "firstName": "AdminF4", "lastName": "L", "phone": "+84909123455" }
];

function SearchData(data, keyWord) {
    var result = [];
    data.forEach(e => {
        if (e.firstName.indexOf(keyWord) >= 0) result.push(e);
    })

    return result;
}