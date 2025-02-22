-- Add migration script here
-- Create the blocks table
CREATE TABLE IF NOT EXISTS blocks (
    id SERIAL PRIMARY KEY,
    hash TEXT NOT NULL,
    previous_hash TEXT NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    transactions JSONB NOT NULL
);
