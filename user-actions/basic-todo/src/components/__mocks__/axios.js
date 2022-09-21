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



export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}