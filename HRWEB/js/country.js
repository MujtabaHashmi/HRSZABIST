const country_URL = "https://fluffy-space-computing-machine-5g5j6r5r9gw4hvg94-6006.app.github.dev/country";

fetch(country_URL).then(response=>{
    if (!response.ok)
        throw new Error("Failed to fetch Country DATA");
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#countrytable tbody");
    data.forEach(country=>{
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${country.country_id}</td>        
        <td>${country.country_name}</td>        
        <td>${country.region_id}</td>        
        `;

        tbody.appendChild(row);
    });
}).catch(err=>{
    console.log(err.message);
});

