function wintermute() {
    function wait(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }
    document.getElementById('reconnect').remove = 'shimmer';
    document.getElementById('reconnect').className = 'whiteOut';
    document.getElementById('blackOut').className = 'blackBar';
    document.getElementById('blackOut').style = 'display: inline';
    wait(1825).then(() => document.getElementById('connected').style ='display: inline');
    wait(1850).then(() => document.getElementById('connected').style ='display: none');
    wait(1875).then(() => document.getElementById('connected').style ='display: inline');
    wait(2675).then(() => window.location = "desktop.html");
}