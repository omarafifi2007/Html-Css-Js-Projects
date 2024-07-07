let Score = document.getElementById("Score");
document.getElementById("BTN1").onclick = function ()
{
    location.reload();
}
document.getElementById("BTN2").onclick = function ()
{
    location.reload();
}
document.getElementById("Pape").onclick = function ()
{
    document.getElementById("Roc").style.display = 'none';
    document.getElementById("Scissors").style.display = 'none';
    let Const = [Paper, Rock, Scissors];
    document.getElementById("Image").style.marginLeft = '0px';
    function ComputerPlay()
    {
        let Random = Math.floor(Math.random() * Const.length);
        return Const[Random];
    }
    if(ComputerPlay() == Paper)
    {
        document.getElementById("Compute").style.display = 'block';
        document.getElementById("Compute").style.border = "15px solid hsl(230, 89%, 62%)";
        document.getElementById("Computer").src = "./img/icon-paper.svg";
        document.getElementById("Result").style.display = 'block';
        document.getElementById("Result").innerHTML = 'Tai';
    }
    else if(ComputerPlay() == Rock)
    {
        Score.innerHTML++;
        document.getElementById("Compute").style.display = 'block';
        document.getElementById("Computer").src = "./img/icon-rock.svg";
        document.getElementById("Compute").style.border = "15px solid hsl(349, 71%, 52%)";
        document.getElementById("Result").style.display = 'block';
        document.getElementById("Result").innerHTML = 'You Win';
    }
    else if(ComputerPlay() == Scissors)
    {
        Score.innerHTML--;
        document.getElementById("Compute").style.display = 'block';
        document.getElementById("Computer").src = "./img/icon-scissors.svg";
        document.getElementById("Compute").style.border = "15px solid hsl(39, 89%, 49%)";
        document.getElementById("Result").style.display = 'block';
        document.getElementById("Result").innerHTML = 'You Lose';
    }
    else
    {
        location.reload();
    }
    document.getElementById("Pape").onclick = function ()
    {
        window.alert("Click Play Again To Reload Page!");
    }
    document.getElementById("BTN1").style.display = 'block';
    document.getElementById("BTN1").style.marginRight = '95px';
    
}
document.getElementById("Roc").onclick = function ()
{
    document.getElementById("Pape").style.display = 'none';
    document.getElementById("Scissors").style.display = 'none';
    let Const = [Paper, Rock, Scissors];
    function ComputerPlay()
    {
        let Random = Math.floor(Math.random() * Const.length);
        return Const[Random];
    }
    if(ComputerPlay() == Rock)
    {
        document.getElementById("Compute").style.display = 'block';
        document.getElementById("Computer").src = "./img/icon-rock.svg";
        document.getElementById("Compute").style.border = "15px solid hsl(349, 71%, 52%)";
        document.getElementById("Result2").style.display = 'block';
        document.getElementById("Result2").innerHTML = 'Tai';
    }
    else if(ComputerPlay() == Scissors)
    {
        Score.innerHTML++;
        document.getElementById("Compute").style.display = 'block';
        document.getElementById("Computer").src = "./img/icon-scissors.svg";
        document.getElementById("Compute").style.border = "15px solid hsl(39, 89%, 49%)";
        document.getElementById("Result2").style.display = 'block';
        document.getElementById("Result2").innerHTML = 'You Win';
    }
    else if(ComputerPlay() == Paper)
    {
        Score.innerHTML--;
        document.getElementById("Compute").style.display = 'block';
        document.getElementById("Compute").style.border = "15px solid hsl(230, 89%, 62%)";
        document.getElementById("Computer").src = "./img/icon-paper.svg";
        document.getElementById("Result2").style.display = 'block';
        document.getElementById("Result2").innerHTML = 'You Lose';
    }
    else
    {
        location.reload();
    }
    document.getElementById("Roc").onclick = function ()
    {
        window.alert("Click Play Again To Reload Page!");
    }
    document.getElementById("BTN2").style.display = 'block';
    document.getElementById("BTN2").style.marginLeft = '5px';
}
document.getElementById("Scissors").onclick = function ()
{
    document.getElementById("Roc").style.display = 'none';
    document.getElementById("Pape").style.display = 'none';

    let Const = [Paper, Rock, Scissors];
    function ComputerPlay()
    {
        let Random = Math.floor(Math.random() * Const.length);
        return Const[Random];
    }
    if(ComputerPlay() == Scissors)
    {
        document.getElementById("Compute").style.display = 'block';
        document.getElementById("Compute").style.border = "15px solid hsl(39, 89%, 49%)";
        document.getElementById("Computer").src = "./img/icon-scissors.svg";
        document.getElementById("Result2").style.display = 'block';
        document.getElementById("Result2").innerHTML = 'Tia';
    }
    else if(ComputerPlay() == Paper)
    {
        Score.innerHTML++;
        document.getElementById("Compute").style.display = 'block';
        document.getElementById("Compute").style.border = "15px solid hsl(230, 89%, 62%)";
        document.getElementById("Computer").src = "./img/icon-paper.svg";
        document.getElementById("Result2").style.display = 'block';
        document.getElementById("Result2").innerHTML = 'You Win';
    }
    else if(ComputerPlay() == Rock)
    {
        Score.innerHTML--;
        document.getElementById("Compute").style.display = 'block';
        document.getElementById("Compute").style.border = "15px solid hsl(349, 71%, 52%)";
        document.getElementById("Computer").src = "./img/icon-rock.svg";
        document.getElementById("Result2").style.display = 'block';
        document.getElementById("Result2").innerHTML = 'You Lose';
    }
    else
    {
        location.reload();
    }
    document.getElementById("Scissors").onclick = function ()
    {
        window.alert("Click Play Again To Reload Page!");
    }
    document.getElementById("BTN2").style.display = 'block';
    document.getElementById("BTN2").style.marginLeft = '5px';
}