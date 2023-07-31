window.onload = (() =>
{
    mainPreview.style.backgroundImage = `url('${previews[0].image}')`;
    setInterval(changeMainBG, 7000);
});

let index = 1;

const mainPreview = document.querySelector('.preview-container');
const previewLink = document.querySelector('.preview-link');

const previews = 
[
    {
        image: "images/GodStyle/main01.jpg",
        link: "Accessories/Football.html"
    },
    {
        image: "images/GodStyle/main02.jpg",
        link: "Men/MenRunningShoes.html"
    },
    {
        image: "images/GodStyle/main03.jpg",
        link: "Accessories/Badminton.html"
    }
];

function changeMainBG()
{
    mainPreview.style.backgroundImage = `url('${previews[index].image}')`;
    previewLink.href = previews[index].link;
    index > previews.length - 2 ? index = 0 : index++;
}