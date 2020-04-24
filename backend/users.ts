export class User {
    constructor(public email: string,
        public name: string, private password: string) { }

    matches(another: User): boolean {
        return another !== undefined &&
            another.email === this.email && another.password === this.password
    }
}

export const users: { [key: string]: User } = {
    "Juliana@gmail.com": new User('Juliana@gmail.com', 'Juliana Sezoloit', 'Juju123'),
    "Amanda@gmail.com": new User('Amanda@gmail.com', 'Amanda', 'Amanda123')
}