use tauri::Window;
use std::ffi::OsString;
use winptyrs::{PTY, PTYArgs, PTYBackend, AgentConfig, MouseMode};
use notify::{Watcher, RecursiveMode, watcher};
use std::sync::mpsc::channel;
use std::time::Duration;

#[tauri::command]
async fn front_ready(link:String, window: Window) {
    let (tx, rx) = channel();
    let mut watcher = watcher(tx, Duration::from_secs(10)).unwrap();

    watcher.watch("C:/Program Files (x86)/MTA San Andreas 1.6/server/mods/deathmatch/resources/abc", RecursiveMode::Recursive).unwrap();

    loop {
        match rx.recv() {
           Ok(event) => println!("{:?}", event),
           Err(e) => println!("watch error: {:?}", e),
        }
    }


    let path: String = link.replace("\\", "/");

    let pty_args = PTYArgs {
        cols: 80,
        rows: 25,
        mouse_mode: MouseMode::WINPTY_MOUSE_MODE_NONE,
        timeout: 15000,
        agent_config: AgentConfig::WINPTY_FLAG_COLOR_ESCAPES
    };

    let mut pty = PTY::new(&pty_args).unwrap();

    let appname = OsString::from(format!("{}/MTA Server.exe", path));
    pty.spawn(appname, None, None, None).unwrap();

    let mut output_buffer = String::new();

    loop {
        let output = pty.read(1000, false);
        match output {
            Ok(line) => {
                let line_str = line
                    .to_string_lossy()
                    .into_owned();
                output_buffer.push_str(&line_str);
    
                while let Some(index) = output_buffer.find('\n') {
                    let line_str = output_buffer[..index].to_string();
                    output_buffer = output_buffer[index + 1..].to_string();
                    println!("{}", line_str);
                    window.emit("info",line_str);
                }
            },
            Err(err) => panic!("{:?}", err),
        }
    }
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![front_ready])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
