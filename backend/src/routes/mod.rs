use actix_web::web;
use crate::handlers;

pub fn configure(cfg: &mut web::ServiceConfig) {
    cfg.service(web::scope("/api")
        .route("/status", web::get().to(handlers::get_status))
        .route("/blocks", web::get().to(handlers::get_blocks))
    );
}
