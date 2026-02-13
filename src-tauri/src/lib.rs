mod menu;
mod os;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .setup(|app| {
            if cfg!(debug_assertions) {
                app.handle().plugin(
                    tauri_plugin_log::Builder::default()
                        .level(log::LevelFilter::Info)
                        .build(),
                )?;
            }
            let menu = menu::create_menu(app)?;
            app.set_menu(menu)?;
            app.on_menu_event(menu::handle_menu_event);

            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
