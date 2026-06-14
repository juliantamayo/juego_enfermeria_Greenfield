---
name: git-changes
description: Generate a short, reviewer-friendly development summary in a text file.
agent: agent
tools: ['edit/createFile', 'search', 'runCommands']
---

Act as a senior software developer preparing an exemplary pull request
description. Make the reviewer's work easier by clearly explaining the
development that was implemented.

Analyze the current development against the local `master` branch:

```bash
git diff --stat master...HEAD
git diff --name-status master...HEAD
git diff master...HEAD
git diff --stat
git diff --name-status
git diff
```

Generate or replace a file named `git-changes.txt` in the repository root.

## Safety Rules

- Git commands must be read-only.
- Never run `git fetch`, `git pull`, `git merge`, `git rebase`, `git commit`,
  `git push`, `git switch`, `git checkout`, or `git reset`.
- Do not modify source files.
- Creating or replacing `git-changes.txt` is the only allowed file change.

## Description Requirements

- Language: English.
- Format: Plain text using the exact structure below.
- Style: Professional, clear, concise, and friendly.
- Focus only on the development implemented and its impact.
- Do not mention branches, commits, Git status, or uncommitted changes.
- Do not include the full raw diff.
- Mention validation results only when verified during the current session.
- Include the screenshots placeholder when the changes affect the user interface.

```text
<conventional-commit-style title>

PURPOSE

<In one or two sentences, explain the high-level purpose of the development and
the problem it solves.>

SUMMARY OF CHANGES

- <Summarize the key implemented changes and their impact.>

GUIDE FOR THE REVIEWER

<Recommend a logical review order using the most important modified files.
Explain briefly what the reviewer should verify in each area.>

SCREENSHOTS

- Before: Add screenshot or recording here.
- After: Add screenshot or recording here.

VALIDATION

- <Verified validation command and result, or "Not verified.">
```

After creating `git-changes.txt`, respond only with a short confirmation that
includes the generated file path. Do not paste the full report in the chat.
