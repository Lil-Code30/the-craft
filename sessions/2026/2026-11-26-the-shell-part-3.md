# Session #003

## Objective

Continue exploring Topic 1 of the missing semester: The Shell. I want to understand the shell, how it works, and how to use it effectively.

## Activities

- Read the [MIT Missing Semester: The Shell](https://missing.csail.mit.edu/2026/course-shell/) materials.
- Continued exploring the shell commands:

## What I learned

What did I understand?

- `> file` : takes the output of a program and write it to `file`
  - `>> file` : Append to `file` rather than overwrite it
  - `< file`: read from `file` instead of the keyboard as the standard input of the program `command < filename`
- `tee`: (need to check some use cases)
- Conditionals `if command1; then command2; command3; fi`
  - Will execute `command1` if no errors occur, execute `command2` and `command3` (**NB:** If **command2** results in an error (returns a non-zero exit status), **command3 will still be executed**.)
  - ``
- `test` use to evaluate conditional expressions
  - Syntax: `test EXPRESSION` or `[ EXPRESSION ]`
- Loops: `while` and `for`
  - `while command1; do command2; command3; done` : will re-execute the command as long as `command1` does not error
  - `for varname in a b c d; do command; done`
- Arithmetic expansion: evaluate an arithmetic expression and substitutes the result. `$(( expression ))`
  **NB:** 😅 use the command `man` to know more about the specific command and not `--help`. For example : `man [cmd]`, `man test`

## Notes

### 🗂️ tee program

La commande **tee** est un utilitaire standard qui lit l'entrée standard et écrit les données à la fois sur la **sortie standard** (écran) et dans un ou plusieurs **fichiers**. Son nom fait référence au raccord en T de la plomberie.

- **Syntaxe :** `commande | tee fichier.txt`
- **Option `-a` :** Pour ajouter au fichier existant au lieu de l'écraser (`tee -a`).
- **Usage :** Permet de visualiser la sortie d'un programme tout en la sauvegardant pour un journal ou un traitement ultérieur.

### 🗂️ tee vs cat command line

The primary difference is that **cat** reads data from **files** or standard input and sends it to standard output, whereas **tee** reads from **standard input** (piped data) and writes simultaneously to **standard output** and one or more **files**.

**cat** is used to view or concatenate existing files:

```bash
cat filename.txt
```

**tee** is used to capture piped output while still displaying it:

```bash
command | tee output.txt
```

#### Key Distinctions

- **Input Source**: **cat** takes filenames as arguments; **tee** takes input from pipes (`|`) or redirection (`<`).
- **Output Behavior**: **cat** outputs to the terminal by default; **tee** outputs to the terminal **and** saves to the specified file(s).
- **Risk**: Passing filenames to **tee** can accidentally overwrite files you intended to read, whereas **cat** is the idiomatic choice for reading files.
- **Permissions**: **tee** works with `sudo` to write to protected files (e.g., `echo "text" | sudo tee /etc/config`), which **cat** cannot do directly due to shell redirection timing.

### 🗂️ test command linux

La commande **test** sous Linux est un utilitaire fondamental utilisé pour évaluer des expressions conditionnelles, vérifier les types de fichiers et comparer des valeurs. Elle retourne un code de sortie de **0** si l'expression est vraie (succès) et **1** si elle est fausse (échec).

#### Syntaxe et Formes

La commande peut être invoquée de trois manières équivalentes :

- **Forme explicite** : `test EXPRESSION`
- **Forme courte** : `[ EXPRESSION ]` (les espaces autour des crochets sont obligatoires)
- **Forme améliorée (Bash)** : `[[ EXPRESSION ]]` (supporte les motifs et les opérateurs logiques sans échapper)

#### Catégories de Tests

- **Fichiers** : `-e` (existe), `-f` (fichier régulier), `-d` (répertoire), `-r` (lisible), `-w` (inscriptible), `-x` (exécutable), `-s` (taille > 0).
- **Chaînes** : `-n` (non vide), `-z` (vide), `=` (égalité), `!=` (différent).
- **Entiers** : `-eq` (égal), `-ne` (différent), `-gt` (plus grand), `-ge` (plus grand ou égal), `-lt` (plus petit), `-le` (plus petit ou égal).
- **Comparaison de fichiers** : `-nt` (plus récent que), `-ot` (plus ancien que), `-ef` (même inode).

#### Exemples d'utilisation

```bash
# Vérifier si un fichier existe
test -f /etc/resolv.conf && echo "Existe" || echo "N'existe pas"

# Comparer des entiers
[ 10 -gt 5 ] && echo "Vrai"

# Tester la longueur d'une chaîne
test -n "$VARIABLE" && echo "Non vide"
```

### 🗂️ Conditionals

Next, conditionals: if command1; then command2; command3; fi will execute command1, what happen if command 2 result to and error

If **command2** results in an error (returns a non-zero exit status), **command3 will still be executed**.

In Bash, the `if command1; then command2; command3; fi` structure evaluates **command1** solely to decide whether to enter the `then` block. Once inside that block, **command2** and **command3** are executed sequentially as a list of commands, regardless of whether **command2** succeeds or fails. The `if` condition does not monitor the exit status of the commands inside the `then` block.

- **command1**: Determines entry into the block (exit 0 = enter, non-zero = skip to `else` or after `fi`).
- **command2**: Executes unconditionally if the block is entered. Its failure does **not** stop execution.
- **command3**: Executes unconditionally after **command2**, even if **command2** failed.

To stop execution if **command2** fails, you must use conditional operators like `&&` or check the exit status explicitly:

```bash
# This stops if command2 fails:
if command1; then
    command2 && command3
fi

# Or check exit status:
if command1; then
    command2
    if [ $? -ne 0 ]; then
        echo "command2 failed"
        exit 1
    fi
    command3
fi
```

#### 🗂️ loops shell command

Shell scripting provides three primary loop structures to automate repetitive tasks: **for**, **while**, and **until** loops. The **for** loop iterates over a specific list of items or a defined range, making it ideal for processing files or sequences. The **while** loop executes commands repeatedly as long as a specified condition remains true, commonly used for reading files line-by-line or monitoring statuses. The **until** loop is the logical opposite, continuing execution until a condition becomes true.

##### For Loop

Used to iterate over a list of values, such as files or numbers.

```bash
# Iterate over a list
for file in *.txt; do
    echo "Processing $file"
done

# Iterate over a numeric range
for i in {1..5}; do
    echo "Number: $i"
done
```

##### While Loop

Executes a block of code as long as the test condition is true.

```bash
count=1
while [ $count -le 5 ]; do
    echo "Count is $count"
    count=$((count + 1))
done
```

#### Until Loop

Executes a block of code until the test condition becomes true.

```bash
count=1
until [ $count -gt 5 ]; do
    echo "Count is $count"
    count=$((count + 1))
done
```

#### Control Statements

- **break**: Exits the loop immediately.
- **continue**: Skips the current iteration and moves to the next one.

```bash
for i in {1..5}; do
    if [ $i -eq 3 ]; then continue; fi
    if [ $i -eq 4 ]; then break; fi
    echo $i
done
# Output: 1 2 5
```

## Experiments / Implementation

What did I build, test, or investigate?

- use the `test` command to check if a file exists and if a variable is non-empty:

```bash
# Check if a file exists
if test -f "/etc/resolv.conf"; then
    echo "File exists."
else
    echo "File does not exist."
fi
```

- `man` command is very useful to get more information about a specific command. For example, `man test` will give you the manual for the `test` command.

## Problems encountered

What needs further investigation?

- the `tee` command and its use cases

## References

- [Topic 1: The Shell](https://missing.csail.mit.edu/2026/course-shell/)
- https://www.gnu.org/software/bash/manual/html_node/Arithmetic-Expansion.html

## Outcome

What did I accomplish?

## Next exploration

What might I work on next?

- Start the Shell's exercises.
