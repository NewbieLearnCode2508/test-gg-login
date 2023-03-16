function handleCredentialResponse(res) {
    let data = jwt_decode(res.credential);
    document.getElementById("g_id_onload").style.display = "none";
    document.querySelector(".g_id_signin").style.display = "none";
    document.querySelector(".g_id_signout").style.display = "block";
    console.log("ID: " + data.sub);
    console.log("Full Name: " + data.name);
    console.log("Given Name: " + data.given_name);
    console.log("Family Name: " + data.family_name);
    console.log("Image URL: " + data.picture);
    console.log("Email: " + data.email);
}

let btnLogout = document.querySelector(".g_id_signout");
btnLogout.onclick = () => {
    google.accounts.id.disableAutoSelect();
    document.getElementById("g_id_onload").style.display = "block";
    document.querySelector(".g_id_signin").style.display = "block";
    document.querySelector(".g_id_signout").style.display = "none";
};
