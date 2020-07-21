const xapi = require('xapi');
xapi.on('ready', () => {
    setInterval(function() {
        xapi.command('HttpClient Get', {
            Url: 'https://api.kanye.rest/?format=text'
        }).then((r) => {
            xapi.config.set('UserInterface OSD HalfwakeMessage', r.Body)
        })
    }, 10000);
});
