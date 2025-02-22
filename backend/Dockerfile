# Use an official Rust image as a base
FROM rust:latest

# Set working directory inside the container
WORKDIR /app

# Install required dependencies
RUN apt-get update && apt-get install -y \
  libpq-dev \
  && rm -rf /var/lib/apt/lists/*

# Copy Cargo files separately to optimize caching
COPY Cargo.toml Cargo.lock ./

# Create an empty lib directory for cargo check
RUN mkdir -p src && echo "fn main() {}" > src/main.rs

# Build dependencies first for caching
RUN cargo build --release || true

# Copy the actual project files
COPY . .

# Build the actual project
RUN cargo build --release

# Expose port for API (adjust as necessary)
EXPOSE 8000

# Run the application
CMD ["./target/release/synergy-explorer"]
