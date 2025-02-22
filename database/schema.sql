CREATE TABLE IF NOT EXISTS blocks (
    id SERIAL PRIMARY KEY,
    hash TEXT NOT NULL,
    previous_hash TEXT NOT NULL,
    timestamp BIGINT NOT NULL,
    transactions JSONB NOT NULL
);
