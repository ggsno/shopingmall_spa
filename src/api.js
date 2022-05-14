const URL = "https://uikt6pohhh.execute-api.ap-northeast-2.amazonaws.com/dev/products"

const request = async(url) => {
    try {
        const response = await fetch(url);
        if (response.ok)
            return response.json();
        throw new Error("error: ")
    } catch (e) {
        alert(e.message);
    }
}

export const fetchProduct = (id) => request(`${URL}${id ? "/" + id : ""}`);
