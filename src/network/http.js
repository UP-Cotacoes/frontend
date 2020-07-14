const global_headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type'
}

export function get() {

}

export async function post(endpoint, body, headers) {
    const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
            ...global_headers,
            ...headers
        },
        body: JSON.stringify(body)
    })
    return res.json()
}