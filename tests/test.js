(() => {
    const schedules = [
        {
            'title'      : 'Test 1 4242342 342 3423432',
            'description': 'Test 1 - DesriptionTest 1 - DesriptionTest 1 - DesriptionTest 1 - DesriptionTest^ Test 1 - DesriptionTest 1 - Desription',
            'date'       : '2019-02-24',
            'group'      : 'test-group',
            'created_by' : 'test-me',
            'create_date': '2019-10-10'
        },
        {
            'title'      : 'Test 2 4234234 fdsd f234r52342342',
            'description': 'Test 2 - Desription',
            'date'       : '2019-02-24',
            'group'      : 'test-group',
            'created_by' : 'test-me',
            'create_date': '2019-10-10'
        },
        {
            'title'      : 'Test 3 5434523432434 ',
            'description': 'Test 3 - Desription',
            'date'       : '2019-02-24',
            'group'      : 'test-group',
            'created_by' : 'test-me',
            'create_date': '2019-10-10'
        },
        {
            'title'      : 'Test 4',
            'description': 'Test 4 - Desription',
            'date'       : '2019-02-06',
            'group'      : 'test-group',
            'created_by' : 'test-me',
            'create_date': '2019-10-10'
        },
        {
            'title'      : 'Test 5',
            'description': 'Test 5 - Desription',
            'date'       : '2019-02-01 12:00',
            'group'      : 'test-group',
            'created_by' : 'test-me',
            'create_date': '2019-10-10'
        },
        {
            'title'      : 'Test 6',
            'description': 'Test 6 - Desription',
            'date'       : '2019-02-31',
            'group'      : 'test-group',
            'created_by' : 'test-me',
            'create_date': '2019-10-10'
        },
        {
            'title'      : 'Test 2 4234234 fdsd f234r52342342',
            'description': 'Test 2 - Desription',
            'date'       : '2019-02-24',
            'group'      : 'test-group',
            'created_by' : 'test-me',
            'create_date': '2019-10-10'
        },
        {
            'title'      : 'Test 3 5434523432434 ',
            'description': 'Test 3 - Desription',
            'date'       : '2019-02-24',
            'group'      : 'test-group',
            'created_by' : 'test-me',
            'create_date': '2019-10-10'
        },
        {
            'title'      : 'Test 4',
            'description': 'Test 4 - Desription',
            'date'       : '2019-02-06',
            'group'      : 'test-group',
            'created_by' : 'test-me',
            'create_date': '2019-10-10'
        },
        {
            'title'      : 'Test 5',
            'description': 'Test 5 - Desription',
            'date'       : '2019-02-01',
            'group'      : 'test-group',
            'created_by' : 'test-me',
            'create_date': '2019-10-10'
        },
        {
            'title'      : 'Test 6',
            'description': 'Test 6 - Desription',
            'date'       : '2019-02-31',
            'group'      : 'test-group',
            'created_by' : 'test-me',
            'create_date': '2019-10-10'
        },
        {
            'title'      : 'Test 2 4234234 fdsd f234r52342342',
            'description': 'Test 2 - Desription',
            'date'       : '2019-02-24',
            'group'      : 'test-group',
            'created_by' : 'test-me',
            'create_date': '2019-10-10'
        },
        {
            'title'      : 'Test 3 5434523432434 ',
            'description': 'Test 3 - Desription',
            'date'       : '2019-02-24',
            'group'      : 'test-group',
            'created_by' : 'test-me',
            'create_date': '2019-10-10'
        },
        {
            'title'      : 'Test 4',
            'description': 'Test 4 - Desription',
            'date'       : '2019-02-06',
            'group'      : 'test-group',
            'created_by' : 'test-me',
            'create_date': '2019-10-10'
        },
        {
            'title'      : 'Test 5',
            'description': 'Test 5 - Desription',
            'date'       : '2019-02-01',
            'group'      : 'test-group',
            'created_by' : 'test-me',
            'create_date': '2019-10-10'
        },
        {
            'title'      : 'Test 6',
            'description': 'Test 6 - Desription',
            'date'       : '2019-02-31',
            'group'      : 'test-group',
            'created_by' : 'test-me',
            'create_date': '2019-10-10'
        },
        {
            'title'      : 'Test 2 4234234 fdsd f234r52342342',
            'description': 'Test 2 - Desription',
            'date'       : '2019-02-24',
            'group'      : 'test-group',
            'created_by' : 'test-me',
            'create_date': '2019-10-10'
        },
        {
            'title'      : 'Test 3 5434523432434 ',
            'description': 'Test 3 - Desription',
            'date'       : '2019-02-24',
            'group'      : 'test-group',
            'created_by' : 'test-me',
            'create_date': '2019-10-10'
        },
        {
            'title'      : 'Test 4',
            'description': 'Test 4 - Desription',
            'date'       : '2019-02-06',
            'group'      : 'test-group',
            'created_by' : 'test-me',
            'create_date': '2019-10-10'
        },
        {
            'title'      : 'Test 5',
            'description': 'Test 5 - Desription',
            'date'       : '2019-02-01',
            'group'      : 'test-group',
            'created_by' : 'test-me',
            'create_date': '2019-10-10'
        },
        {
            'title'      : 'Test 6',
            'description': 'Test 6 - Desription',
            'date'       : '2019-02-31',
            'group'      : 'test-group',
            'created_by' : 'test-me',
            'create_date': '2019-10-10'
        },
        {
            'title'      : 'Test 2 4234234 fdsd f234r52342342',
            'description': 'Test 2 - Desription',
            'date'       : '2019-02-24',
            'group'      : 'test-group',
            'created_by' : 'test-me',
            'create_date': '2019-10-10'
        },
        {
            'title'      : 'Test 3 5434523432434 ',
            'description': 'Test 3 - Desription',
            'date'       : '2019-02-24',
            'group'      : 'test-group',
            'created_by' : 'test-me',
            'create_date': '2019-10-10'
        },
        {
            'title'      : 'Test 4',
            'description': 'Test 4 - Desription',
            'date'       : '2019-02-06',
            'group'      : 'test-group',
            'created_by' : 'test-me',
            'create_date': '2019-10-10'
        },
        {
            'title'      : 'Test 5',
            'description': 'Test 5 - Desription',
            'date'       : '2019-02-01',
            'group'      : 'test-group',
            'created_by' : 'test-me',
            'create_date': '2019-10-10'
        },
        {
            'title'      : 'Test 6',
            'description': 'Test 6 - Desription',
            'date'       : '2019-02-31',
            'group'      : 'test-group',
            'created_by' : 'test-me',
            'create_date': '2019-10-10'
        },
        {
            'title'      : 'Test 2 4234234 fdsd f234r52342342',
            'description': 'Test 2 - Desription',
            'date'       : '2019-02-24',
            'group'      : 'test-group',
            'created_by' : 'test-me',
            'create_date': '2019-10-10'
        },
        {
            'title'      : 'Test 3 5434523432434 ',
            'description': 'Test 3 - Desription',
            'date'       : '2019-02-24',
            'group'      : 'test-group',
            'created_by' : 'test-me',
            'create_date': '2019-10-10'
        },
        {
            'title'      : 'Test 4',
            'description': 'Test 4 - Desription',
            'date'       : '2019-02-06',
            'group'      : 'test-group',
            'created_by' : 'test-me',
            'create_date': '2019-10-10'
        },
        {
            'title'      : 'Test 5',
            'description': 'Test 5 - Desription',
            'date'       : '2019-02-01',
            'group'      : 'test-group',
            'created_by' : 'test-me',
            'create_date': '2019-10-10'
        },
        {
            'title'      : 'Test 6',
            'description': 'Test 6 - Desription',
            'date'       : '2019-02-31',
            'group'      : 'test-group',
            'created_by' : 'test-me',
            'create_date': '2019-10-10'
        },
        {
            'title'      : 'Test 2 4234234 fdsd f234r52342342',
            'description': 'Test 2 - Desription',
            'date'       : '2019-02-24',
            'group'      : 'test-group',
            'created_by' : 'test-me',
            'create_date': '2019-10-10'
        },
        {
            'title'      : 'Test 3 5434523432434 ',
            'description': 'Test 3 - Desription',
            'date'       : '2019-02-24',
            'group'      : 'test-group',
            'created_by' : 'test-me',
            'create_date': '2019-10-10'
        },
        {
            'title'      : 'Test 4',
            'description': 'Test 4 - Desription',
            'date'       : '2019-02-06',
            'group'      : 'test-group',
            'created_by' : 'test-me',
            'create_date': '2019-10-10'
        },
        {
            'title'      : 'Test 5',
            'description': 'Test 5 - Desription',
            'date'       : '2019-02-01',
            'group'      : 'test-group',
            'created_by' : 'test-me',
            'create_date': '2019-10-10'
        },
        {
            'title'      : 'Test 6',
            'description': 'Test 6 - Desription',
            'date'       : '2019-02-31',
            'group'      : 'test-group',
            'created_by' : 'test-me',
            'create_date': '2019-10-10'
        },
        {
            'title'      : 'Test 2 4234234 fdsd f234r52342342',
            'description': 'Test 2 - Desription',
            'date'       : '2019-02-24',
            'group'      : 'test-group',
            'created_by' : 'test-me',
            'create_date': '2019-10-10'
        },
        {
            'title'      : 'Test 3 5434523432434 ',
            'description': 'Test 3 - Desription',
            'date'       : '2019-02-24',
            'group'      : 'test-group',
            'created_by' : 'test-me',
            'create_date': '2019-10-10'
        },
        {
            'title'      : 'Test 4',
            'description': 'Test 4 - Desription',
            'date'       : '2019-02-06',
            'group'      : 'test-group',
            'created_by' : 'test-me',
            'create_date': '2019-10-10'
        },
        {
            'title'      : 'Test 5',
            'description': 'Test 5 - Desription',
            'date'       : '2019-02-01',
            'group'      : 'test-group',
            'created_by' : 'test-me',
            'create_date': '2019-10-10'
        },
        {
            'title'      : 'Test 6',
            'description': 'Test 6 - Desription',
            'date'       : '2019-02-31',
            'group'      : 'test-group',
            'created_by' : 'test-me',
            'create_date': '2019-10-10'
        },
        {
            'title'      : 'Test 2 4234234 fdsd f234r52342342',
            'description': 'Test 2 - Desription',
            'date'       : '2019-02-24',
            'group'      : 'test-group',
            'created_by' : 'test-me',
            'create_date': '2019-10-10'
        },
        {
            'title'      : 'Test 3 5434523432434 ',
            'description': 'Test 3 - Desription',
            'date'       : '2019-02-24',
            'group'      : 'test-group',
            'created_by' : 'test-me',
            'create_date': '2019-10-10'
        },
        {
            'title'      : 'Test 4',
            'description': 'Test 4 - Desription',
            'date'       : '2019-02-06',
            'group'      : 'test-group',
            'created_by' : 'test-me',
            'create_date': '2019-10-10'
        },
        {
            'title'      : 'Test 5',
            'description': 'Test 5 - Desription',
            'date'       : '2019-02-01',
            'group'      : 'test-group',
            'created_by' : 'test-me',
            'create_date': '2019-10-10'
        },
        {
            'title'      : 'Test 6',
            'description': 'Test 6 - Desription',
            'date'       : '2019-02-31',
            'group'      : 'test-group',
            'created_by' : 'test-me',
            'create_date': '2019-10-10'
        }
    ];

    const Calendar = require('..');
    const calendar = new Calendar(schedules);

    document.body.appendChild(calendar.render());
})();
