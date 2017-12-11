var ClientLogin = new Class(
{
initialize: function() 
{
        //get body
        var body = document.getElementsByTagName("body")[0];

        //username
        var usernameInput = document.createElement("input");
        usernameInput.innerHTML = "";
        body.appendChild(usernameInput);

        //password
        var passwordInput = document.createElement("input");
        passwordInput.innerHTML = "";
        body.appendChild(passwordInput);

        //submit
        var loginButton = document.createElement("button");
        loginButton.innerHTML = "Login";
        body.appendChild(loginButton);

        loginButton.addEventListener
        ("click", function()
        {
                alert("did something");
        });
}, 
/*  
set: function(x,y,z)
{
	this.x = 0;
	this.y = 0;
	this.z = 0;
} 
*/
});
    
