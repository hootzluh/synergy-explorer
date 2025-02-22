use actix_web::{web, App, HttpServer};
use sqlx::PgPool;
use std::env;

mod db;
mod handlers;
mod routes;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    dotenv::dotenv().ok();

    let database_url = env::var("DATABASE_URL").expect("DATABASE_URL must be set");
    let db_pool = PgPool::connect(&database_url)
        .await
        .expect("Failed to connect to database");

    println!("🚀 Synergy Explorer API is running...");

    HttpServer::new(move || {
        App::new()
            .app_data(web::Data::new(db_pool.clone()))
            .configure(routes::configure)
    })
    .bind("0.0.0.0:8000")?
    .run()
    .await
}
