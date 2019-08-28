export class CreateUserDto {
    readonly user: {
        readonly username: string;
        readonly email: string;
        readonly password: string;
    };
}
