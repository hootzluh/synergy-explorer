use serde::Serialize;

#[derive(Serialize)] // ✅ This makes the struct serializable
struct Record {
    id: i32,
    hash: String,
    previous_hash: String,
    timestamp: chrono::NaiveDateTime,
}
