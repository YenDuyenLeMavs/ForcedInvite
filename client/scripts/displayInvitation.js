document.addEventListener("DOMContentLoaded", function() {
    const invitationQuestion = document.querySelector(".invitation-question");
    const invitationDate = document.querySelector(".invitation-date");
    const yesBtn = document.querySelector(".yes-btn");
    const noBtn = document.querySelector(".no-btn");
    const gif = document.querySelector(".gif");

    // Retrieve custom name, question, and date from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name'); // Default to "Friend" if name is not provided
    const question = urlParams.get('question');
    const date = urlParams.get('date');

    // Set the invitation content with custom data
    invitationQuestion.textContent = `${name}, ${question}`;

    if (date) {
        invitationDate.textContent = `${date}`;
    } else {
        invitationDate.textContent = '';
    }

    // Handle click on "Yes" button
    yesBtn.addEventListener("click", () => {
        if (date) {
            invitationQuestion.textContent = `Yay, see you on ${date}`;
        } else {
            invitationQuestion.textContent = `Yay, see you soon!`;
        }
        invitationDate.textContent = ''
        // Change GIF source here if needed
        gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
        
        // Remove the "Yes" and "No" buttons
        yesBtn.parentNode.remove(); // Removes the parent container of "Yes" button (assuming it wraps both buttons)
    });

    // Handle mouseover on "No" button
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
