window.onload = async function () {
    const statusDiv = document.getElementById('status');
    const protectedContentDiv = document.getElementById('protected-content');

    const checkSubscriptionAndFollow = async () => {
        try {
            const youtubeRes = await fetch('https://www.googleapis.com/youtube/v3');
            const githubRes = await fetch('https://github.com/login/oauth/authorize');

            const youtubeData = await youtubeRes.json();
            const githubData = await githubRes.json();

            if (youtubeData.subscribed || githubData.following) {
                statusDiv.style.color = 'green';
                statusDiv.innerText = 'You are authorized to view the content!';
                protectedContentDiv.style.display = 'block';
            } else {
                statusDiv.innerText = 'You must be subscribed to B.Y.T.E. on YouTube or following on GitHub to view the content.';
            }
        } catch (error) {
            statusDiv.innerText = 'Failed to verify subscription/follow status.';
        }
    };

    checkSubscriptionAndFollow();
};
