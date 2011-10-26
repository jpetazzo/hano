# Hano: online IDE for Node.js on dotCloud

Hano (Hatta+Node) allows you to run Node.js code on dotCloud,
and edit it with a wiki-like interface.

## How to use it

Deployment is that easy (you need a dotCloud account first):

    git clone git://github.com/jpetazzo/hano.git
    dotcloud push hano hano

Then, check the entrypoints:

    dotcloud info hano.www
    [...]
    ports:
    -   name: ssh
        url: ssh://dotcloud@hano-yourusername.dotcloud.com:12345
    -   name: editor
        url: tcp://hano-yourusername.dotcloud.com:23456
    -   name: log
        url: tcp://hano-yourusername.dotcloud.com:34567
    -   name: http
        url: http://hano-yourusername.dotcloud.com/

By going to the URL referenced in the "http" section, you can see
your app running (by default, there is a "Hello World!" app
dumping the HTTP headers).

By going (with your browser) to the host+port referenced in
the "editor" section, you will see an IDE with a wiki-like
interface, allowing to edit the JS code. When you change the
code, Node.js is automatically restarted.

By going (with your browser, or with curl) to the host+port
referenced in the "log" section, you will see a stream of
the logs of your service.

All the changes made through the editor are versioned in
a Mercurial repository. You can clone/push/pull this repository
by hacking around the SSH entrypoint.
