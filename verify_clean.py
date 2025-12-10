from playwright.sync_api import sync_playwright
import os

def verify_changes():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Load the local HTML file
        file_path = os.path.abspath("index.html")
        page.goto(f"file://{file_path}")

        # Wait for content to load
        page.wait_for_load_state("networkidle")

        # Take a full page screenshot to verify layout
        page.screenshot(path="verification_clean.png", full_page=True)

        # Also verify specific elements aren't there
        content = page.content()
        if "min-height: 200px" in content and "}" in content and "proof-bar-item" in content:
             print("FAILURE: CSS leak text found in page content")
        else:
             print("SUCCESS: No CSS leak text found")

        browser.close()

if __name__ == "__main__":
    verify_changes()
