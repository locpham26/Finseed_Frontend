FROM nginx:alpine

WORKDIR /etc/nginx/conf.d

RUN rm default.conf

COPY nginx-ssl.conf proxy_params /tmp/conf/
COPY start.sh /

EXPOSE 80 443

CMD ["/start.sh"]