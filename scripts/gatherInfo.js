document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("customForm");
    // const invitationLink = document.getElementById("invitationLink");
    // const generateLinkBtn = document.getElementById('generateLinkBtn');
    const copyLinkBtn = document.getElementById('copyLinkBtn');
    const previewBtn = document.getElementById('previewBtn');
    // const newInvitationLink = document.getElementById('newInvitationLink');
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Retrieve input values from the form
        const name = document.getElementById("name").value;
        const question = document.getElementById("question").value || "Will you go out with me?";
        const date = document.getElementById("date").value;

        // Generate a custom link with the provided information
        const customLink = `https://yenduyenlemavs.github.io/ForcedInvite/invitation.html?name=${encodeURIComponent(name)}&question=${encodeURIComponent(question)}&date=${encodeURIComponent(date)}`;

        // Set the generated link as the href attribute of the anchor element
        // invitationLink.href = customLink;
        // invitationLink.innerHTML = `<a href="${customLink}" target="_blank">${customLink}</a>`;

        // document.getElementById("link-container").innerHTML = `<a href="${customLink}">${customLink}</a>`;
        document.getElementById("copyLinkBtn").addEventListener("click", function() {
            const copiedLink = customLink;
            const textarea = document.createElement('textarea');
            textarea.value = copiedLink;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            // alert("Link copied to clipboard!");
        });

        // Function to open the invitation in a new window
        document.getElementById("previewBtn").addEventListener("click", function() {
            window.open(customLink);
        });

        // generateLinkBtn.style.display = 'none';
        copyLinkBtn.style.display = 'inline-block';
        previewBtn.style.display = 'inline-block';
        // newInvitationLink.style.display = 'block';
        // newInvitationLink.setAttribute('href', '#');

    });
    // newInvitationLink.addEventListener('click', function(event) {
    //     event.preventDefault();

    //     // Show the "Generate Link" button and hide "Copy Link" and "Preview" buttons
    //     // generateLinkBtn.style.display = 'block';
    //     copyLinkBtn.style.display = 'none';
    //     previewBtn.style.display = 'none';
    //     newInvitationLink.style.display = 'none';
    // });
});
