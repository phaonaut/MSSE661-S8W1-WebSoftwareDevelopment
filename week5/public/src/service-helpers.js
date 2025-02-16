const access_token = storageHasData() ? getStorage("access_token") : null;
const token = access_token ? `Bearer ${access_token}` : null;

const _get = async (url) => {
    const res = await fetch(url, { 
        method: 'GET',
        headers: {
            Authorization: token,
            'Content-Type': 'application/json'
        }
    });
    return res.json()
};


const _post = async (url, data) => {
    console.log("data", data);
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return res.json();
}

const _put = async (url, data) => {
    const res = await fetch(url, {
        method: 'PUT',
        headers: {
            Authorization: token,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    return res.json();
}