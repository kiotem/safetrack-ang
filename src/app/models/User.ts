export default interface UserService
{
    objectId: string;
    username: string;
    email: string;
    sessionToken: string;
    vendors: any[];
}