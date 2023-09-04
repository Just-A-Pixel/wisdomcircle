docker build -t backend ./backend
docker rm -f node
docker run -it -d --name node -v ./backend/src:/app/src -p 4000:4000 backend

# docker logs --follow node