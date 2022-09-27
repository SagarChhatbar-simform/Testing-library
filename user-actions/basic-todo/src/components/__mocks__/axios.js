const mockResponse = {
    data: {
        results: [
            {
                name: {
                    first: "sagar",
                    last: "khatri"
                },
                picture: {
                    large: " https://randomuser.me/api/portraits/men/39.jpg "
                },
                login: {
                    username: "sk"
                }
            }
        ]
    }
}



// eslint-disable-next-line import/no-anonymous-default-export
export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}