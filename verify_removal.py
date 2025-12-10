import os

def check_sections(should_exist=True):
    with open('index.html', 'r', encoding='utf-8') as f:
        content = f.read()

    sections = [
        'class="proof-bar"',
        'class="impact-dashboard"',
        'class="featured-preview"'
    ]

    missing = []
    present = []

    for section in sections:
        if section in content:
            present.append(section)
        else:
            missing.append(section)

    if should_exist:
        if len(missing) > 0:
            print(f"FAIL: Expected sections to exist, but missing: {missing}")
            return False
        print("PASS: All sections found.")
        return True
    else:
        if len(present) > 0:
            print(f"FAIL: Expected sections to be removed, but found: {present}")
            return False
        print("PASS: All sections removed.")
        return True

if __name__ == "__main__":
    # Default to checking existence first
    import sys
    mode = sys.argv[1] if len(sys.argv) > 1 else "exist"

    if mode == "exist":
        if not check_sections(should_exist=True):
            sys.exit(1)
    elif mode == "absent":
        if not check_sections(should_exist=False):
            sys.exit(1)
