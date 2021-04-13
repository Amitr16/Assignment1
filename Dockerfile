FROM alpine
EXPOSE 8080
RUN apk update
RUN apk add python3
COPY app.js /tmp/app.js
COPY start.sh /tmp/start.sh
RUN npm install axios
USER 1000   
CMD ["sh","/tmp/start.sh"]
