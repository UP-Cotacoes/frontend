class Endpoint {
    constructor(base_url, location) {
        this.base_url = base_url
        this.location = location
        this.url = `${base_url}${location}`
    }
}

class ApiEndpoint extends Endpoint {
    constructor(location) {
        super(BASE_URL.API, location);
    }
}

const BASE_URL = {
    API: 'http://192.168.100.132:3000'
}

export const API= {
    register: new ApiEndpoint('/api/register/'),
    login: new ApiEndpoint('/api/sessions/')
}