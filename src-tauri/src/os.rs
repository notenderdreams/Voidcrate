use tauri::menu::MenuItem;
use tauri::AppHandle;

pub fn create_preferences_item(
    app_handle: &AppHandle,
) -> Result<MenuItem<tauri::Wry>, tauri::Error> {
    #[cfg(target_os = "macos")]
    {
        MenuItem::with_id(
            app_handle,
            "preferences",
            "Preferences",
            true,
            Some("Cmd+,"),
        )
    }

    #[cfg(not(target_os = "macos"))]
    {
        MenuItem::with_id(app_handle, "preferences", "Preferences", true, None::<&str>)
    }
}
