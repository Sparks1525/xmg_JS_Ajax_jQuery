function getJSON1() {

    var p = {
        name: 'will',
        age: 17,
        sex: true,
        hireDate: new Date(),
        hobbys: ["java", "c", "girl"],
        dept: {
            id: 123,
            name: '财务部'
        }
    };

    console.debug("p->" + p);

    console.debug("p.name->" + p.name);

    console.debug("p.age->" + p.age);

    console.debug("p.hobbys[1]->" + p.hobbys[1]);

    console.debug("p.dept.name->" + p.dept.name);


    var persons1 = [p, p, p];

    var persons2 = [{
        name: 'will',
        age: 17,
        sex: true,
        hireDate: new Date(),
        hobbys: ["java", "c", "girl"],
        dept: {
            id: 123,
            name: '财务部'
        }
    }, {
        name: 'will',
        age: 17,
        sex: true,
        hireDate: new Date(),
        hobbys: ["java", "c", "girl"],
        dept: {
            id: 123,
            name: '财务部'
        }
    }, {
        name: 'will',
        age: 17,
        sex: true,
        hireDate: new Date(),
        hobbys: ["java", "c", "girl"],
        dept: {
            id: 123,
            name: '财务部'
        }
    }];
}


