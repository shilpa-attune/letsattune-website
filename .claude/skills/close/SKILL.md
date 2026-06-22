# /close — End of Session Wrap-Up

Run this skill at the end of every working session with Shilpa.
It makes sure nothing is forgotten and all tracking files are up to date.

## What to do (in order)

### 1. Check for unpublished changes
Run `git status --short`.
- If there are unsaved changes, ask Shilpa: "You have unpublished changes — would you like me to publish them before we close?"
- If she says yes, run the `push-website` skill.
- If nothing to publish, move on.

### 2. Update PENDING.md
Read `.claude/PENDING.md`.
- Move any tasks completed this session from "To do" → "✅ Done this project"
- Add any new tasks Shilpa mentioned during the session that aren't listed yet
- Keep the "In progress / not yet published" section accurate

### 3. Update SITEMAP.md
Read `.claude/SITEMAP.md`.
- If any pages were changed structurally (sections added, removed, reordered), update the relevant page description
- If a new page was added, add it to the sitemap

### 4. Update PREFERENCES.md
Read `.claude/PREFERENCES.md`.
- Add any new preferences or dislikes Shilpa expressed this session
- Update design preferences if any colours, fonts, or layout choices were made

### 5. Update CLAUDE.md if needed
Read `CLAUDE.md`.
- If any permanent facts changed (new page, new booking link, new colour, etc.), update the relevant section
- Do NOT rewrite large sections — only update what actually changed

### 6. Update memory files
Check the memory folder at:
`C:\Users\shilp\.claude\projects\D--storage-Docs-shilpa-LetsAttune-Projects-Website-Lets-attune-letsattune-website\memory\`
- Update or create memory entries for anything notable learned this session (preferences, project state, feedback)
- Read MEMORY.md index and update it if new files were added

### 7. Give Shilpa a friendly session summary
End with a short plain-English summary, e.g.:

> **Session wrap-up:**
> - Published: [what went live]
> - Still to do: [pending items]
> - Reminder: [anything she asked to be reminded about]
>
> All your files are up to date. See you next time! 👋
