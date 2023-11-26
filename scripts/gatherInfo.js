document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("customForm");
    const copyLinkBtn = document.getElementById('copyLinkBtn');
    const previewBtn = document.getElementById('previewBtn');
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const question = document.getElementById("question").value || "Will you go out with me?";
        const date = document.getElementById("date").value;

        const customLink = `https://yenduyenlemavs.github.io/ForcedInvite/invitation.html?question=${encodeURIComponent(question)}&date=${encodeURIComponent(date)}`;

        document.getElementById("copyLinkBtn").addEventListener("click", function() {
            const copiedLink = customLink;
            const textarea = document.createElement('textarea');
            textarea.value = copiedLink;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
        });

        document.getElementById("previewBtn").addEventListener("click", function() {
            window.open(customLink);
        });

        copyLinkBtn.style.display = 'inline-block';
        previewBtn.style.display = 'inline-block';
    });
});
