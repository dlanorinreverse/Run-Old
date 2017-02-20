var form = document.getElementById('url-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    var uri = document.getElementById('uri-box').value;
    var uriParts = parseUri(uri);
    render(uriParts);
});

function render(uriParts) {
    document.getElementById('parts').className = '';
    for (var key in uriParts) {
        document.getElementById(key + '-value').innerHTML = uriParts[key];
    }
}

function parseUri(uri) {
    var uriParts = {
        scheme: '',
        authority: '',
        path: '',
        query: '',
        fragment: ''
    };

var parser = document.createElement('a');
parser.href = uri;

uriParts.scheme = parser.protocol.substring(0, parser.protocol.length - 1);
uriParts.authority = parser.hostname;
uriParts.path = parser.pathname;
uriParts.query = parser.search.substring(1);
uriParts.fragment = parser.hash.substring(1);

    return uriParts;
}