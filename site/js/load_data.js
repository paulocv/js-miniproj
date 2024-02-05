console.log("Loading load_data.js")

async function load_text_data(_url){

    console.log(`Fetching data from ${_url}`)
    
    // -()- Appends a time stamp to the request URL
    let timestamp = new Date().getTime();
    let updatedUrl = `${_url}?timestamp=${timestamp}`;
    let response = await fetch(updatedUrl)
    
    // -()- Uses the url as it is
    // let response = await fetch(_url)
    
    console.log(response)

    if (!response.ok){
        document.getElementById("statusLine").innerText = `Failed to fetch data from ${_url}`;
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }
    else{
        document.getElementById("statusLine").innerText = `Data retrieved, check the console!`;
    }
    
    return await response.text()
}
