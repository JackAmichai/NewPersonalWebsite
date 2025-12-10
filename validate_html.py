from html.parser import HTMLParser

class TagValidator(HTMLParser):
    def __init__(self):
        super().__init__()
        self.tags = []
        self.errors = []

    def handle_starttag(self, tag, attrs):
        if tag not in ['br', 'img', 'meta', 'link', 'input', 'hr', 'source', 'track', 'wbr']:
            self.tags.append(tag)

    def handle_endtag(self, tag):
        if tag not in ['br', 'img', 'meta', 'link', 'input', 'hr', 'source', 'track', 'wbr']:
            if not self.tags:
                self.errors.append(f"Unexpected closing tag: </{tag}>")
            elif self.tags[-1] == tag:
                self.tags.pop()
            else:
                self.errors.append(f"Mismatched closing tag: Expected </{self.tags[-1]}> but got </{tag}>")

    def validate(self, filepath):
        try:
            with open(filepath, 'r') as f:
                content = f.read()
            self.feed(content)
            if self.tags:
                self.errors.append(f"Unclosed tags: {self.tags}")

            if self.errors:
                print("HTML Validation Errors:")
                for error in self.errors:
                    print(f"- {error}")
            else:
                print("HTML looks valid structure-wise.")
        except Exception as e:
            print(f"Validation failed with exception: {e}")

validator = TagValidator()
validator.validate('index.html')
