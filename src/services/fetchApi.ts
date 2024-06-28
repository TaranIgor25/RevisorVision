export async function getData(endPoint: string) {
    const response = await fetch(`http://localhost:3000/${endPoint}`);
    const responseJson = await response.json();
    return responseJson;
}

export default getData;
