function addUser()
{
    player_1 = document.getElementById("player_1").value
    localStorage.setItem("player_1",player_1)
    window.location = "kwitter_room.html"
}