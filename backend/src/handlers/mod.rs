use actix_web::{web, HttpResponse, Responder};
use sqlx::PgPool;

/// API Route: `/status` - Returns the API health status
#[allow(dead_code)]
pub async fn get_status() -> impl Responder {
    HttpResponse::Ok().body("Synergy Explorer API is running")
}

use serde::{Deserialize, Serialize};
use sqlx::FromRow;
use time::OffsetDateTime;

#[derive(Serialize, Deserialize, Debug, FromRow)]
struct Block {
    id: i32,
    hash: String,
    previous_hash: String,
    #[serde(with = "time::serde::rfc3339::option")]
    timestamp: Option<OffsetDateTime>,
    transactions: serde_json::Value,
}

pub async fn get_blocks(db_pool: web::Data<PgPool>) -> impl Responder {
    let blocks = sqlx::query_as!(
        Block,
        "SELECT id, hash, previous_hash, timestamp AT TIME ZONE 'UTC' as timestamp, transactions FROM public.blocks"
    )
    .fetch_all(db_pool.get_ref())
    .await;

    match blocks {
        Ok(result) => HttpResponse::Ok().json(result),
        Err(_) => HttpResponse::InternalServerError().body("Error fetching blocks"),
    }
}
