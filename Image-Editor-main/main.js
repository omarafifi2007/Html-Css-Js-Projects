let Saturate = document.getElementById("Saturate");
let Contrast = document.getElementById("Contrast");
let Brightness = document.getElementById("Brightness");
let Sepia = document.getElementById("Sepia");
let Grayscale = document.getElementById("Grayscale");
let Blur = document.getElementById("Blur");
let HueRotate = document.getElementById("Hue-Rotate");
let Download = document.getElementById("Download");
let Upload = document.getElementById("Upload");
let Img = document.getElementById("Img");
let Reset = document.querySelector("span");
let ImgBox = document.querySelector(".Img-Box");

function ResetValue()
{
    Img.style.filter = "none";
    Saturate.value = "100";
    Brightness.value = "100";
    Sepia.value = "100";
    Blur.value = "0";
    Contrast.value = "100";
    Grayscale.value = "0";
    HueRotate.value = "0";
}
window.onclick = function ()
{
    Reset.onclick = ResetValue;
}
Download.onclick = function ()
{
    Download.href = Img.src;
}
window.onload = function()
{
    Reset.style.display = "none";
    ImgBox.style.display = "none";
    Download.style.display = "none";
}
Upload.onchange = function()
{
    ResetValue();
    Reset.style.display = "block";
    ImgBox.style.display = "block";
    Download.style.display = "block";
    let File = new FileReader();
    File.readAsDataURL(Upload.files[0]);
    File.onload = function()
    {
        Img.src = File.result;
    }
}
let filters = document.querySelectorAll("ul li input");
filters.forEach(filter =>
{
    filter.addEventListener('input', function()
    {
        Img.style.filter =
        `Saturate(${Saturate.value}%)
        Contrast(${Contrast.value}%)
        Brightness(${Brightness.value}%)
        Sepia(${Sepia.value}%)
        Grayscale(${Grayscale.value})
        Blur(${Blur.value}px)
        Hue-Rotate(${HueRotate.value}deg)`
    });
});

