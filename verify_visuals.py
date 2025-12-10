from playwright.sync_api import sync_playwright
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Load the local HTML file
        file_path = os.path.abspath("index.html")
        page.goto(f"file://{file_path}")

        # Wait for content to load
        page.wait_for_load_state("networkidle")

        # 1. Experience Section Screenshot
        # Scroll to experience section
        experience_section = page.locator("#experience")
        experience_section.scroll_into_view_if_needed()
        page.wait_for_timeout(500) # Wait for potential animations
        page.screenshot(path="verification/experience_section.png", full_page=False, clip=experience_section.bounding_box())

        # 2. Tech Stack Section Screenshot
        tech_stack_section = page.locator("#tech-stack")
        tech_stack_section.scroll_into_view_if_needed()
        page.wait_for_timeout(500)
        page.screenshot(path="verification/tech_stack_section.png", full_page=False, clip=tech_stack_section.bounding_box())

        # 3. Projects Section Screenshot
        # We want to see the grid layout
        projects_section = page.locator("#projectsContainer") # Targeting the container specifically
        projects_section.scroll_into_view_if_needed()
        page.wait_for_timeout(1000) # Wait for JS to render projects

        # Take a screenshot of the whole projects area to check grid sizing
        # Since projects are dynamic, we might need to target the section wrapper
        projects_wrapper = page.locator("#projects .container")
        page.screenshot(path="verification/projects_grid.png", full_page=False, clip=projects_wrapper.bounding_box())

        browser.close()

if __name__ == "__main__":
    run()
