FROM nginx:alpine

WORKDIR /etc/nginx/conf.d

RUN rm default.conf

COPY nginx.conf nginx_ssl.conf proxy_params /tmp/conf/
COPY start.sh /

EXPOSE 80 443

VOLUME ["/taiga-cert", "/taiga-conf"]

CMD ["/start.sh"]