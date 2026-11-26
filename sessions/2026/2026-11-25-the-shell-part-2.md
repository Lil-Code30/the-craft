# Session #002

## Objective

Continue exploring Topic 1 of the missing semester: The Shell. I want to understand the shell, how it works, and how to use it effectively.

## Activities

- Read the [MIT Missing Semester: The Shell](https://missing.csail.mit.edu/2026/course-shell/) materials.
- Continued exploring the shell commands:
  - `cat`:
    - `cat file` : display content of the `file`
    - `sort file`
    - `uniq file`
    - `head file` and `tail file`

  - `grep pattern file`: finds lines matching `pattern` in a `file`
  - `find`: find files (recursively) that matches certain conditions
    - `find [options] [path...] [expression]`
    - **Examples:**
      - `find ~/Downloads -type f -name "*.zip" -mtime +30`
      - `find ~ -type f -size +100M -exec ls -lh {} \;`
      - `find . -name "*.py -exec grep -l "TODO" {} \;`
        - **NB:** `-exec` takes a command terminated with a `;`
  - `awk`: (to be continue..)
  - pipes `|` : These let you string together the output of one program with the input of another

## What I learned

What did I understand?

- The `find` command is very powerful and can be used to search for files based on various criteria such as name, type, size, and modification time.

## Experiments / Implementation

What did I build, test, or investigate?

- Found all files greater than 100MB in my home directory and was able to delete some of them to free up space:
  - `find ~ -type f -size +100M -exec ls -lh {} \;`

## Problems encountered

What needs further investigation?

- Not really a problem, but I need to learn more about `awk` and how to use it effectively for text processing.

## References

- [Topic 1: The Shell](https://missing.csail.mit.edu/2026/course-shell/)
- https://eza.rocks/
- https://github.com/BurntSushi/ripgrep
- https://linuxize.com/post/how-to-find-files-in-linux-using-the-command-line/
- https://github.com/sharkdp/fd

## Outcome

What did I accomplish?

- N/A

## Next exploration

What might I work on next?

- Finish reading the MIT Missing Semester: The Shell materials and do the exercises.

## Notes:

help for find command shell

The basic syntax for the Linux `find` command is `find [path...] [expression]`, where `[path...]` specifies the directory hierarchy to search (defaulting to the current directory `.`) and `[expression]` defines the criteria and actions.

**Common Search Criteria**

- **Name**: Use `-name "pattern"` for case-sensitive matching or `-iname "pattern"` for case-insensitive matching.
- **Type**: Use `-type f` for regular files, `-type d` for directories, and `-type l` for symbolic links.
- **Size**: Use `-size +10M` to find files larger than 10MB or `-size -10M` for smaller files.
- **Time**: Use `-mtime -7` to find files modified in the last 7 days or `-mtime +30` for files older than 30 days.
- **Permissions**: Use `-perm 644` to find files with specific permission bits.

**Actions and Operators**

- **Execute**: Use `-exec command {} \;` to run a command on each found file (e.g., `find . -name "*.tmp" -exec rm {} \;`).
- **Logical Operators**: Combine conditions using `-a` (AND, implicit), `-o` (OR), and `!` (NOT).
- **Depth**: Use `-maxdepth N` to limit recursion depth or `-mindepth N` to skip initial directories.

**Example Usage**

```bash
# Find all .log files modified in the last day
find /var/log -type f -name "*.log" -mtime -1

# Find empty files in the current directory
find . -type f -empty
```
