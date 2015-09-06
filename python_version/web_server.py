from bottle import route, run, template, static_file, get

@route('/')
def main():
    print 'HERE'
    return template('maps')


@get('/<filename:re:.*\.css>')
def server_static(filename):
    return static_file(filename, root='static/css/')

run(host='0.0.0.0', port = 8081, debug = True)
