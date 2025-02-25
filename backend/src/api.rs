use actix_web::{get, web, App, HttpResponse, HttpServer, Responder};

pub fn config(cfg: &mut web::ServiceConfig) {
    // Configure your API endpoints here; add your services directly or later if needed.
}

#[get("/blocks")]
async fn get_blocks() -> impl Responder {
    HttpResponse::Ok().json("List of Blocks")
}

#[get("/transactions")]
async fn get_transactions() -> impl Responder {
    HttpResponse::Ok().json("List of Transactions")
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| App::new().service(get_blocks).service(get_transactions))
        .bind("127.0.0.1:8080")?
        .run()
        .await
}
