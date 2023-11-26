document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("customForm");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const question = document.getElementById("question").value || "Will you go out with me?";
        const date = document.getElementById("date").value;

        const customLink = `https://yenduyenlemavs.github.io/ForcedInvite/invitation.html?question=${encodeURIComponent(question)}&date=${encodeURIComponent(date)}`;

        const copyLinkBtn = document.getElementById('copyLinkBtn');
        // const previewBtn = document.getElementById('previewBtn');

        copyLinkBtn.addEventListener("click", function() {
            const copiedLink = customLink;
            const textarea = document.createElement('textarea');
            textarea.value = copiedLink;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
        });

        // previewBtn.addEventListener("click", function(event) {
        //     event.preventDefault();

        //     // Open in a new tab
        //     const newWindow = window.open('', '_blank');
        //     if (newWindow) {
        //         newWindow.location.href = customLink;
        //     } else {
        //         // If the new tab/window was blocked
        //         window.location.href = customLink;
        //     }
        // });

        copyLinkBtn.style.display = 'inline-block';
        previewBtn.style.display = 'inline-block';
    });
});
