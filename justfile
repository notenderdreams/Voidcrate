install:
    bun i

run:
    bun tauri dev

fmt:
    cd src-tauri && cargo fmt

test:
    cd src-tauri && cargo test
    
icon IMAGE:
    @if [ -z "{{IMAGE}}" ]; then \
        echo "Usage: just icon path/to/logo.png"; \
        exit 1; \
    fi
    bun tauri icon {{IMAGE}}
    echo "✔ Icons generated from {{IMAGE}}"
    rm -r src-tauri/icons/android
    rm -r src-tauri/icons/ios
    
    
i:
    just install
r:
    just run 
t: 
    just test 
    
    
