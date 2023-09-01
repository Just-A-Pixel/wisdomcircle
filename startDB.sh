docker rm -f postgres-db
docker run -it --name postgres-db -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=raj -p 5432:5432 -d postgres
# cd backend
# npm run migrate up
# cd ..
# docker exec -it postgres-db bash
# PGPASSWORD=postgres psql -U postgres
# bash startBackend.sh