use tauri::menu::{Menu, MenuItem, PredefinedMenuItem, Submenu};
use tauri::{App, AppHandle};

use crate::os;

// Menu Action Handlers
pub fn handle_menu_event(app: &AppHandle, event: tauri::menu::MenuEvent) {
    match event.id().as_ref() {
        "add_asset" => add_asset(app),
        "scan_assets" => scan_for_assets(app),
        "check_missing" => check_for_missing_assets(app),
        "open_engine" => open_in_engine(app),
        "pack_all" => pack_all(app),
        "unpack_all" => unpack_all(app),
        "preferences" => open_preferences(app),
        _ => {}
    }
}

// Menu Builder
pub fn create_menu(app: &App) -> Result<Menu<tauri::Wry>, tauri::Error> {
    let app_handle = app.handle();

    // VoidCrate Menu
    let preferences = os::create_preferences_item(app_handle)?;
    let quit = PredefinedMenuItem::quit(app_handle, None)?;

    let voidcrate_menu = Submenu::with_items(
        app_handle,
        "VoidCrate",
        true,
        &[
            &preferences,
            &PredefinedMenuItem::separator(app_handle)?,
            &quit,
        ],
    )?;

    // Asset Menu
    let add_asset = MenuItem::with_id(app_handle, "add_asset", "Add Asset", true, None::<&str>)?;
    let scan_assets = MenuItem::with_id(
        app_handle,
        "scan_assets",
        "Scan for Assets",
        true,
        None::<&str>,
    )?;
    let check_missing = MenuItem::with_id(
        app_handle,
        "check_missing",
        "Check for Missing Assets",
        true,
        None::<&str>,
    )?;

    let asset_menu = Submenu::with_items(
        app_handle,
        "Asset",
        true,
        &[&add_asset, &scan_assets, &check_missing],
    )?;

    // Project Menu
    let open_engine = MenuItem::with_id(
        app_handle,
        "open_engine",
        "Open in Engine",
        true,
        None::<&str>,
    )?;
    let pack_all = MenuItem::with_id(app_handle, "pack_all", "Pack All", true, None::<&str>)?;
    let unpack_all = MenuItem::with_id(app_handle, "unpack_all", "Unpack All", true, None::<&str>)?;

    let project_menu = Submenu::with_items(
        app_handle,
        "Project",
        true,
        &[&open_engine, &pack_all, &unpack_all],
    )?;

    //  Main Menu
    Menu::with_items(app_handle, &[&voidcrate_menu, &asset_menu, &project_menu])
}

// Implementations
fn add_asset(_app: &AppHandle) {
    log::info!("Add Asset clicked");
}

fn scan_for_assets(_app: &AppHandle) {
    log::info!("Scan for Assets clicked");
}

fn check_for_missing_assets(_app: &AppHandle) {
    log::info!("Check for Missing Assets clicked");
}

fn open_in_engine(_app: &AppHandle) {
    log::info!("Open in Engine clicked");
}

fn pack_all(_app: &AppHandle) {
    log::info!("Pack All clicked");
}

fn unpack_all(_app: &AppHandle) {
    log::info!("Unpack All clicked");
}

fn open_preferences(_app: &AppHandle) {
    log::info!("Preferences clicked");
}
