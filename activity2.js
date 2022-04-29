function Get_score()
{
score = localStorage.getItem("score");
document.getElementById("update").innerHTML = score;
}