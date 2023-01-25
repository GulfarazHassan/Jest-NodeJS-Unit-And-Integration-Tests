import { DataHandler } from "../../app/Handlers/DataHandler"
import { HTTP_CODES, HTTP_METHODS } from "../../app/Models/ServerModels";

describe('DataHandler test suit', () => {
    let dataHandler: DataHandler;

    const requestMoc = {
        method: ''
    };
    const responseMoc = {
        writeHead: jest.fn()
    };
    const tokenValidatorMoc = {};
    const usersDBAccessMoc = {};

    beforeEach(() => {
        dataHandler = new DataHandler(
            requestMoc as any,
            responseMoc as any,
            tokenValidatorMoc as any,
            usersDBAccessMoc as any
        )
    })

    afterEach(() => {
        jest.clearAllMocks();
    })

    test('options request', async () => {
        requestMoc.method = HTTP_METHODS.OPTIONS;
        await dataHandler.handleRequest();
        expect(responseMoc.writeHead).toBeCalledWith(HTTP_CODES.OK)
    })
})