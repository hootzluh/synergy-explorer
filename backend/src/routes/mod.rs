use actix_web::web;

pub fn configure(cfg: &mut web::ServiceConfig) {
    cfg.service(
        web::scope("/api")
            .route("/blocks", web::get().to(crate::handlers::get_blocks)) // ✅ Correctly use handlers::get_blocks
    );
}
