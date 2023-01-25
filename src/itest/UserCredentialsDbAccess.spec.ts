import { UserCredentialsDbAccess } from "../app/Authorization/UserCredentialsDbAccess";
import { UserCredentials } from "../app/Models/ServerModels";

describe('UserCredentialsDbAccess itest suite', () => {
    let userCredentialsDBAccess: UserCredentialsDbAccess;
    let someUserCredentials: UserCredentials;
    const randomString = Math.random().toString(36).substring(7);

    beforeAll(() => {
        userCredentialsDBAccess = new UserCredentialsDbAccess();
        someUserCredentials = {
            accessRights: [1, 2, 3],
            username: 'someUser',
            password: randomString
        }
    })

    it('should store UserCredentials', async () => {
        const storeUser = await userCredentialsDBAccess.putUserCredential(someUserCredentials);
        expect(storeUser).toMatchObject(someUserCredentials);
    })
})