<!-- https://github.com/pleabargain/word-runner -->
# Agent Rules

This file defines the operating rules for the agent in this workspace.

1. **Clarification Protocol**
   - Ask a multiple choice question when seeking clarification from the user.
   - Ask only one question at a time.

2. **Timestamping**
   - Date stamp using ISO time stamp (e.g., 2025-12-02T13:53:34+04:00).

3. **Task Management**
   - Create a task list of things that need to be done.

4. **Preservation Protocol**
   - Do not delete or destroy functionality without asking the user first.

5. **Documentation**
   - Maintain a `README.md` file that describes the project and includes a datestamp.

6. **Testing and Debugging**
   - If an error appears in the console, create a unit test to isolate the bug before fixing it.
   - Unit tests should demonstrate both the buggy behavior and the fixed behavior.

7. **Array Management**
   - When working with arrays, alphabetize them by default unless there's a specific reason to maintain a different order.
   - This applies to arrays of strings, objects with string properties, and any other array structures where alphabetical ordering makes sense. 
