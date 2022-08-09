process: migrate
	@node -r dotenv/config lib/processor.js


serve:
	@npx squid-graphql-server


migrate:
	@npx squid-typeorm-migration apply


migration:
	@npx squid-typeorm-migration generate


build:
	@npm run build


codegen:
	@npx squid-typeorm-codegen

typegen:
	@npx squid-substrate-typegen ./typegen/typegen.json


astarVersions.json:
	@make explore


explore:
	@npx squid-substrate-metadata-explorer \
		--chain wss://rpc.astar.network \
		--archive https://astar.archive.subsquid.io/graphql \
		--out ./typegen/astarVersions.jsonl


up:
	@docker-compose up -d


down:
	@docker-compose down


.PHONY: process serve start codegen migration migrate up down
