const advice_text = document.getElementById('advice-text');
const advice_number = document.getElementById('advice-number');
const dicee_btn = document.getElementById('btn');
const getPosts = async () => 
{
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    advice_number.innerHTML =  "#" + data.slip.id;
    advice_text.innerHTML = '"' + data.slip.advice + '"';
}
dicee_btn.addEventListener('click', function()
{
    getPosts();
});
getPosts();