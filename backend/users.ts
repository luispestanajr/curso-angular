export class User {
  constructor(public email: string,
    public name: string,
    private password: string) { }

  matches(another: User): boolean {
    return another !== undefined
      && another.email === this.email
      && another.password === this.password;
  }
}

export const users: {[key: string]: User} = {
  'luis.pestanajr@gmail.com': new User('luis.pestanajr@gmail.com', 'Luis', 'abc123')
};
