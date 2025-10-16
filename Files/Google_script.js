let query = document.querySelector('.search');
let searchbtn = document.querySelector('.searchbtn');

searchbtn.onclick = function () {
    if(query.value.trim() !== ""){
    let url = 'https://www.google.com/search?q=' + query.value;

    window.open(url, '_self');
    }
}

query.addEventListener('keydown', function (e) {
    if(e.key === 'Enter' && query.value.trim() !== ""){
    let url = 'https://www.google.com/search?q=' + query.value;

    window.open(url, '_self');
    }
});

search.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') clicks.click();
});

document.getElementById("Sec_Btn").addEventListener("click", function () {
    window.location.href = "https://doodles.google/";
});