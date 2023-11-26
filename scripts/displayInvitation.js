document.addEventListener("DOMContentLoaded", function() {
    const invitationQuestion = document.querySelector(".invitation-question");
    const invitationDate = document.querySelector(".invitation-date");
    const yesBtn = document.querySelector(".yes-btn");
    const noBtn = document.querySelector(".no-btn");
    const gif = document.querySelector(".gif");

    const urlParams = new URLSearchParams(window.location.search);
    const question = urlParams.get('question');
    const date = urlParams.get('date');

    invitationQuestion.textContent = `${question}`;

    yesBtn.addEventListener("click", () => {
        if (date) {
            invitationQuestion.textContent = `Yay, see you on ${date}`;
        } else {
            invitationQuestion.textContent = `Yay, see you soon!`;
        }
        invitationDate.textContent = ''

        gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
        
        const customInvitationLink = document.createElement('a');
        customInvitationLink.href = "https://yenduyenlemavs.github.io/ForcedInvite/"; // Replace with the link to your custom invitation page
        customInvitationLink.textContent = "Create your own custom forced invitation!";
        customInvitationLink.target = "_blank"; // Opens in a new tab
        customInvitationLink.style.display = "block";
        customInvitationLink.style.marginTop = "20px"; // Adjust spacing as needed

        // Append the link after the 'Yes' button
        yesBtn.parentNode.insertBefore(customInvitationLink, yesBtn.nextSibling);

        yesBtn.parentNode.remove(); 
    });

    noBtn.addEventListener("mouseover", () => {
        const noBtnRect = noBtn.getBoundingClientRect();
        const maxX = window.innerWidth - noBtnRect.width;
        const maxY = window.innerHeight - noBtnRect.height;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";
    });
});
