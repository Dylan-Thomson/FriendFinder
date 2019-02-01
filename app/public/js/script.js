$(document).ready( () => {
    $("#submit").on("click", event => {
        event.preventDefault();
        if($("#name").val() === "" || $("#photo").val() === "") {
            alert("Please fill out all required forms!");
        }
        else {
            const scores = [];
            for(let i = 1; i <= $(".question").length; i++) {
                scores.push(Number($("#question" + i).val()));
            }
            const newUser = {
                name: $("#name").val(),
                photo: $("#photo").val(),
                scores: scores
            }

            $.post("/api/friends", newUser).then(data => {
                console.log(data.name);
                $("#bestMatchName").text(data.name);
                $("#bestMatchPhoto").attr("src", data.photo);
                $("#bestMatch").modal("show");
            });
        }
    });
});