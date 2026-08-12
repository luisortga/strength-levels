

fn main() {
    let saludo = String::from("Hello");
    let add = saludo; // saludo cede la propiedad
    // Error en compilacion
    println!("{add}"); // successful
} 