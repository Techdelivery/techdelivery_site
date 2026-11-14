# Static marketing site served by unprivileged nginx (no root, binds :8080).
# Same shape as the cluster's other static hosts (vert-sh, bentopdf).
FROM nginxinc/nginx-unprivileged:1.29-alpine

# Site files are the whole app; no build step.
COPY index.html styles.css app.js /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf

# nginx-unprivileged runs as uid 101 and exposes 8080.
EXPOSE 8080
