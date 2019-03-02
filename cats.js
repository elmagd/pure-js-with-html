function Cat(name, src) {
    let $this = Object(); 
    
    $this.name = name; 
    $this.src = src; 
    $this.counter = 0;  

    return $this; 
}; 

cats = [
    new Cat('Nemo', './nemo.jpg'),
    new Cat('Soso', './soso.jpg'),
    new Cat('Jojo', './jojo.jpg'),
]; 

catsList = document.getElementById("catsList"); 

for (let i = 0; i < cats.length ; i++) { 
    let listElem = document.createElement('li'); 
    listElem.appendChild(document.createTextNode(cats[i].name));
    
    listElem.addEventListener('click', (function (image) {
        return function () {
            let catImage = document.createElement('img'); 
            catImage.src = image.src; 
            // catImage.alt = 'No Image'; 
            catImage.width = 300; 
            catImage.height = 250;

            let catNameLabel = document.createElement('label'); 
            catNameLabel.innerHTML = '<h1> ' + image.name + '</h1>' + 'Clicks: ' + image.counter; 

            catImage.addEventListener('click', (function (catLabel) {
                return function () { 
                    image.counter += 1; 
                    catLabel.innerHTML = '<h1> ' + image.name + '</h1>' + 'Clicks: ' + image.counter;
                }
            })(catNameLabel)); 

            let catNameDiv = document.getElementById('catName');
            catNameDiv.innerHTML = '';
            catNameDiv.appendChild(catNameLabel); 
            
            let imageDiv = document.getElementById('imageDiv');
            imageDiv.innerHTML = '';
            imageDiv.appendChild(catImage); 
        }; 
        
    })(cats[i])); 
    catsList.appendChild(listElem); 
};