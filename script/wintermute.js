function wintermute() {
    function wait(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }
    document.getElementById('reconnect').remove = 'shimmer';
    document.getElementById('reconnect').className = 'whiteOut';
    document.getElementById('blackOut').className = 'blackBar';
    document.getElementById('blackOut').style = 'display: inline';
    wait(1825).then(() => window.location = "desktop.html");
}
