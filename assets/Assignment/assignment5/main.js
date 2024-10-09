window.onload = function()
{
    document.getElementById("top").innerHTML = "Welcome to the Forum";
}

function postFunction()
{
    const message = document.getElementById("message").value;
    
    const topic = document.getElementById("topic");

    const reply1 = document.getElementById("reply1");

    const reply2 = document.getElementById("reply2");

    if (!topic.innerHTML) 
    {
        topic.innerHTML = message;
    } else if (!reply1.innerHTML){
        reply1.innerHTML = message;
    } else if (!reply2.innerHTML){
        reply2.innerHTML = message;
    }
    document.getElementById("message").value = "";
}
function clearFunction()
{
    document.getElementById("topic").innerHTML = "";

    document.getElementById("reply1").innerHTML = "";

    document.getElementById("reply2").innerHTML = "";
}

