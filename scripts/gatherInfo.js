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
        const customLink = `https://yenduyenlemavs.github.io/ForcedInvite/invitation.html?name=${encodeURIComponent(name)}&question=${encodeURIComponent(question)}&date=${encodeURIComponent(date)}`;
        document.getElementById("link-container").innerHTML = `<p>Copy this link: <a href="${customLink}">${customLink}</a></p>`;
    });
});
