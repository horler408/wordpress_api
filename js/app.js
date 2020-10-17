BASE_URL = `https://blog.epower.ng/wp-json/wp/v2/posts`

const getRequest = async () => {
    const response = await fetch(BASE_URL)
    const data = await response.json();

    console.log(data);
    console.log("Hello World");
}

getRequest()