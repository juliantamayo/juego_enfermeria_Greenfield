---
name: git-changes
description: Generate a short, reviewer-friendly PR description for the current branch against origin/master.
agent: agent
tools: ['edit/createFile', 'edit/createDirectory', 'search', 'runCommands', 'githubRepo']
model: Gemini 3.1 Pro (Preview) (copilot)
---

Instruction: Act as a senior software developer preparing an exemplary pull request (PR) for your team. Your goal is to make the reviewer's life easier by giving them all the context they need.

First, detect the current Git branch name and execute this command, replacing `<current-branch>` with that branch name:

```bash
git log -p origin/master..origin/<current-branch> > changes.txt
```

Run the command regardless of whether `changes.txt` already exists.

Based solely on the content of the generated `changes.txt` file, create a complete PR description in a file named `changes.md`.

Finally, after generating `changes.md`, delete the `changes.txt` file.

Description Requirements:

- Format: Strictly Markdown. The `changes.md` file must contain only the PR description Markdown.
- Language: English.
- Style: Professional, clear, and friendly.
- Size: Short, summarized, coherent, and relevant.
- No Citing Sources: Do not mention that the description is based on `changes.txt`, and do not cite any sources. The result must be the PR description itself.

The Markdown structure must be as follows:

```markdown
# <conventional-commit-style title>

## Purpose

<In one or two sentences, infer and explain the high-level purpose of this PR. What problem is it solving? Why was this change necessary?>

## Summary of Changes

- <Summarize the key changes. Base this on the commit messages and diffs, but rephrase them to be easy for a reviewer to understand.>

## Guide for the Reviewer

<Analyze the modified files in the diff and suggest a logical review order. Example: "I recommend starting with `file_A.js` to see the new data model, and then continuing with `file_B.js`, where the logic is implemented.">

<If the changes are front-end, add this placeholder:>

Screenshots:

- Before: _Add screenshot or recording here._
- After: _Add screenshot or recording here._
```

