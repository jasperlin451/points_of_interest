from bottle import Bottle, route, run, template, static_file, get, view, url

@route('/')
def main():
    return template('maps')

@route('/update_location/')
def update_location(name='update_location'):

@route('/<filename>')
def server_state(filename):
    return static_file(filename, root='.')

@route('/static/<filename>')
def server_state(filename):
    return static_file(filename, root='static/')

@route('/static/<filename>', name='static')
def server_static(filename):
    return static_file(filename, root='static')

run(host='0.0.0.0', port = 8081, debug = True)
