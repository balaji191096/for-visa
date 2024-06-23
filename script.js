(async () => {
    const carosalContainer = document.getElementsByClassName('carosal-container');
    let imageFiles = [];

    const res = await fetch('http://localhost:3001/getFiles');
    if (res.status === 200) {
        const jsonData = await res.json();
        imageFiles = jsonData.data;
    }
    else // Optional else block
        console.log("Something went wrong!");

    await imageFiles.forEach(file => {
        const img = document.createElement('img');
        img.setAttribute('src', './Banner/Login/' + file); // change the parent directory name here
        img.setAttribute('style', 'height: 150px; width:150px; padding:20px');
        carosalContainer[0].appendChild(img);
    })
})();




