"""Build ckb.json from en.json + path translations."""
from __future__ import annotations

import json
from pathlib import Path

I18N = Path(__file__).resolve().parent.parent / "src" / "i18n"
MAP_PATH = Path(__file__).resolve().parent / "ckb_map.json"


def set_path(root: dict, path: str, value: str) -> None:
    parts = path.split(".")
    cur = root
    for part in parts[:-1]:
        cur = cur[part]
    cur[parts[-1]] = value


def main() -> None:
    with (I18N / "en.json").open(encoding="utf-8") as f:
        ckb = json.load(f)
    with MAP_PATH.open(encoding="utf-8") as f:
        translations: dict[str, str] = json.load(f)
    for path, value in translations.items():
        set_path(ckb, path, value)
    with (I18N / "ckb.json").open("w", encoding="utf-8") as f:
        json.dump(ckb, f, ensure_ascii=False, indent=2)
        f.write("\n")
    print("ckb.json written", len(translations), "paths")


if __name__ == "__main__":
    main()
