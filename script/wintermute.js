function wintermute() {
    function wait(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }
    document.getElementById('reconnect').remove = 'shimmer';
    document.getElementById('reconnect').className = 'whiteOut';
    document.getElementById('blackOut').className = 'blackBar';
    document.getElementById('blackOut').style = 'display: inline';
    wait(1770).then(() => document.getElementById('connected').style ='display: inline');
    wait(1790).then(() => document.getElementById('connected').style ='display: none');
    wait(1815).then(() => document.getElementById('connected').style ='display: inline');
    wait(2605).then(() => document.getElementById('connected').style ='display: none');
    wait(2632).then(() => window.location.reload()); /* allows back arrow to not display connected */
    wait(2632).then(() => window.location = "desktop.html");
}