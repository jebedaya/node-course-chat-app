const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        },{
            id: '2',
            name: 'Jen',
            room: 'React Course'
        },{
            id: '3',
            name: 'Julie',
            room: 'Node Course'
        }];
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: 123,
            name: 'Judes',
            room: 'The Office Fans'
        };
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        var Julie = users.users[2];
        var user = users.removeUser(Julie.id);

        expect(user).toEqual(Julie);
        expect(users.users.length).toBe(2);
    });

    it('should not remove user with non-existent id', () => {
        var user = users.removeUser('4');

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        var Jen = users.users[1];
        var user = users.getUser(Jen.id);

        expect(user).toEqual(Jen);
    })

    it('should not find user with non-existent id', () => {
        var user = users.getUser('asdf');

        expect(user).toNotExist();
    })

    it('should return names for node course', () => {
        var userList = users.getUserList('Node Course');

        expect(userList).toEqual(['Mike', 'Julie']);
    });

    it('should return names for react course', () => {
        var userList = users.getUserList('React Course');

        expect(userList).toEqual(['Jen']);
    });
});
