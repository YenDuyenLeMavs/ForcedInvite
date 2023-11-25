document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("customForm");
    const invitationLink = document.getElementById("invitationLink");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Retrieve input values from the form
        const name = document.getElementById("name").value;
        const question = document.getElementById("question").value || "Will you go out with me?";
        const date = document.getElementById("date").value;

        // Generate a custom link with the provided information
        const customLink = `${window.location.origin}/invitation.html?name=${encodeURIComponent(name)}&question=${encodeURIComponent(question)}&date=${encodeURIComponent(date)}`;

        // Set the generated link as the href attribute of the anchor element
        invitationLink.href = customLink;
        invitationLink.style.display = "block"; // Show the link element

        // Optionally, you can display the link somewhere on the page for the user to copy
        // For instance, in a <div> with id "linkContainer"
        // document.getElementById("linkContainer").innerHTML = `<p>Copy this link: <a href="${customLink}">${customLink}</a></p>`;
    });
});
