#!/bin/sh

INITIAL_SETUP_LOCK=/conf/.initial_setup.lock
if [ ! -f $INITIAL_SETUP_LOCK ]; then
    CONFIG_FILE=nginx_ssl.conf
    touch $INITIAL_SETUP_LOCK
    cp /tmp/conf/$CONFIG_FILE /conf/nginx.conf
    ln -sf /conf/nginx.conf /etc/nginx/conf.d/nginx.conf
    cp /tmp/conf/proxy_params /conf/proxy_params
    ln -sf /conf/proxy_params /etc/nginx/proxy_params
else
    ln -sf /conf/nginx.conf /etc/nginx/conf.d/nginx.conf
    ln -sf /conf/proxy_params /etc/nginx/proxy_params
fi

exec nginx -g 'daemon off;'