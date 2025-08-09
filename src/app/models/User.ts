export default interface UserService
{
    objectId: string;
    username: string;
    email: string;
    name?: string;
    sessionToken: string;
    vendors: any[];
}