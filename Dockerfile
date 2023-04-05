FROM nginx:1.23.3-alpine

EXPOSE 80

COPY dist/planner-core-core-ui-angular /var/www/html
COPY config/nginx.conf /etc/nginx/nginx.conf
COPY config/site-default /etc/nginx/sites-enabled/default

