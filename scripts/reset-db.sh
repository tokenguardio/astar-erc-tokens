set -e
npx squid-typeorm-codegen
npm run build
rm -rf db/migrations/*.js
docker-compose down
sleep 3
docker-compose up -d
sleep 5
npx squid-typeorm-migration generate
npx squid-typeorm-migration apply