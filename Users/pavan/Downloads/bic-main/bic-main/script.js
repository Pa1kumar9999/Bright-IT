// Object to store references for each topic
const topicReferences = {
    // Java References
    'Java Basics': {
        websites: [
            { name: 'Oracle Java Tutorials', url: 'https://docs.oracle.com/javase/tutorial/' },
            { name: 'Baeldung Java Guide', url: 'https://www.baeldung.com/java-tutorial' }
        ],
        youtubeVideos: [
            { name: 'Java Basics Full Course', url: 'https://www.youtube.com/watch?v=eIrMbAQSU34' },
            { name: 'Java Programming for Beginners', url: 'https://www.youtube.com/watch?v=A74TOX803D0' }
        ]
    },
    'Java Loops': {
        websites: [
            { name: 'Java For Loop', url: 'https://www.w3schools.com/java/java_for_loop.asp' },
            { name: 'Programiz Java Loops', url: 'https://www.programiz.com/java-programming/for-loop' }
        ],
        youtubeVideos: [
            { name: 'Java Loops Explained', url: 'https://www.youtube.com/watch?v=8cm1x4bC610' },
            { name: 'Java Loops Tutorial', url: 'https://www.youtube.com/watch?v=8cm1x4bC610' }
        ]
    },
    'Java Operators': {
        websites: [
            { name: 'Java Operators Guide', url: 'https://www.w3schools.com/java/java_operators.asp' },
            { name: 'Programiz Java Operators', url: 'https://www.programiz.com/java-programming/operators' }
        ],
        youtubeVideos: [
            { name: 'Java Operators Explained', url: 'https://www.youtube.com/watch?v=8cm1x4bC610' },
            { name: 'Complete Java Operators', url: 'https://www.youtube.com/watch?v=8cm1x4bC610' }
        ]
    },
    'Java Arrays': {
        websites: [
            { name: 'Java Arrays Tutorial', url: 'https://www.w3schools.com/java/java_arrays.asp' },
            { name: 'Programiz Java Arrays', url: 'https://www.programiz.com/java-programming/arrays' }
        ],
        youtubeVideos: [
            { name: 'Java Arrays Explained', url: 'https://www.youtube.com/watch?v=eIrMbAQSU34' },
            { name: 'Complete Java Arrays', url: 'https://www.youtube.com/watch?v=eIrMbAQSU34' }
        ]
    },
    'Java Strings': {
        websites: [
            { name: 'Java Strings Guide', url: 'https://www.w3schools.com/java/java_strings.asp' },
            { name: 'Baeldung Java String', url: 'https://www.baeldung.com/java-string' }
        ],
        youtubeVideos: [
            { name: 'Java Strings Tutorial', url: 'https://www.youtube.com/watch?v=eIrMbAQSU34' },
            { name: 'Java String Methods', url: 'https://www.youtube.com/watch?v=eIrMbAQSU34' }
        ]
    },
    'Java Inheritance': {
        websites: [
            { name: 'Java Inheritance Tutorial', url: 'https://www.w3schools.com/java/java_inheritance.asp' },
            { name: 'Programiz Inheritance Guide', url: 'https://www.programiz.com/java-programming/inheritance' }
        ],
        youtubeVideos: [
            { name: 'Java Inheritance Full Tutorial', url: 'https://www.youtube.com/watch?v=gc216ndOrb4' },
            { name: 'Inheritance in Java Explained', url: 'https://www.youtube.com/watch?v=gc216ndOrb4' }
        ]
    },
    'Java Abstraction': {
        websites: [
            { name: 'Java Abstraction Tutorial', url: 'https://www.w3schools.com/java/java_abstract.asp' },
            { name: 'Baeldung Java Abstraction', url: 'https://www.baeldung.com/java-abstraction' }
        ],
        youtubeVideos: [
            { name: 'Java Abstraction Explained', url: 'https://www.youtube.com/watch?v=8cm1x4bC610' },
            { name: 'Abstract Classes & Interfaces', url: 'https://www.youtube.com/watch?v=8cm1x4bC610' }
        ]
    },
    'Java Encapsulation': {
        websites: [
            { name: 'Java Encapsulation Tutorial', url: 'https://www.w3schools.com/java/java_encapsulation.asp' },
            { name: 'Programiz Encapsulation', url: 'https://www.programiz.com/java-programming/encapsulation' }
        ],
        youtubeVideos: [
            { name: 'Java Encapsulation Explained', url: 'https://www.youtube.com/watch?v=szYzBC89CPE' },
            { name: 'Encapsulation in Java', url: 'https://www.youtube.com/watch?v=szYzBC89CPE' }
        ]
    },
    'Java Exception Handling': {
        websites: [
            { name: 'Java Exception Handling', url: 'https://www.w3schools.com/java/java_try_catch.asp' },
            { name: 'Baeldung Exception Handling', url: 'https://www.baeldung.com/java-exceptions' }
        ],
        youtubeVideos: [
            { name: 'Java Exception Handling Tutorial', url: 'https://www.youtube.com/watch?v=_nmm0nZqIIY' },
            { name: 'Try Catch in Java', url: 'https://www.youtube.com/watch?v=_nmm0nZqIIY' }
        ]
    },
    'Java File I/O': {
        websites: [
            { name: 'Java File I/O Tutorial', url: 'https://www.w3schools.com/java/java_files.asp' },
            { name: 'Baeldung Java File I/O', url: 'https://www.baeldung.com/java-io' }
        ],
        youtubeVideos: [
            { name: 'Java File I/O Explained', url: 'https://www.youtube.com/watch?v=8cm1x4bC610' },
            { name: 'Java File Handling Tutorial', url: 'https://www.youtube.com/watch?v=8cm1x4bC610' }
        ]
    },
    'Java Collections Framework': {
        websites: [
            { name: 'Java Collections Tutorial', url: 'https://www.w3schools.com/java/java_collections.asp' },
            { name: 'Baeldung Java Collections', url: 'https://www.baeldung.com/java-collections' }
        ],
        youtubeVideos: [
            { name: 'Java Collections Framework', url: 'https://www.youtube.com/watch?v=8cm1x4bC610' },
            { name: 'Complete Collections Guide', url: 'https://www.youtube.com/watch?v=rzA7UJ-hQn4' }
        ]
    },
    'Java Conditional statements': {
        websites: [
            { name: 'Java Conditional Statements', url: 'https://www.w3schools.com/java/java_conditions.asp' },
            { name: 'Programiz Conditional Statements', url: 'https://www.programiz.com/java-programming/if-else-statement' }
        ],
        youtubeVideos: [
            { name: 'Java Conditional Statements Tutorial', url: 'https://www.youtube.com/watch?v=eIrMbAQSU34' },
            { name: 'If-Else, Switch Statements', url: 'https://www.youtube.com/watch?v=eIrMbAQSU34' }
        ]
    },
    'Java Classes and Objects': {
        websites: [
            { name: 'Java OOP Concepts', url: 'https://www.w3schools.com/java/java_oop.asp' },
            { name: 'Baeldung Classes and Objects', url: 'https://www.baeldung.com/java-classes-objects' }
        ],
        youtubeVideos: [
            { name: 'Java OOP Full Tutorial', url: 'https://www.youtube.com/watch?v=pTB0EiLXUC8' },
            { name: 'Classes and Objects Explained', url: 'https://www.youtube.com/watch?v=GoXwIVyNvX0' }
        ]
    },
    // Add similar structures for other Java topics...
    'Java Project': {
        websites: [
            { name: 'GeeksforGeeks Java Projects', url: 'https://www.geeksforgeeks.org/blogs/java-projects/' },
            { name: 'GitHub Java Projects', url: 'https://github.com/topics/java-project' }
        ],
        youtubeVideos: [
            { name: 'Java Project Tutorial', url: 'https://www.youtube.com/watch?v=GoXwIVyNvX0' },
            { name: 'Complete Java Project', url: 'https://www.youtube.com/watch?v=eIrMbAQSU34' }
        ]
    },
    'Java Interview Questions': {
        websites: [
            { name: 'GeeksforGeeks Java Interview Q&A', url: 'https://www.geeksforgeeks.org/java-interview-questions/' },
            { name: 'Baeldung Java Interview Guide', url: 'https://www.baeldung.com/java-interview-questions' }
        ],
        youtubeVideos: [
            { name: 'Top Java Interview Questions', url: 'https://www.youtube.com/watch?v=GoXwIVyNvX0' },
            { name: 'Java Interview Preparation', url: 'https://www.youtube.com/watch?v=eIrMbAQSU34' }
        ]
    },

    // Python References
    'Python Basics': {
        websites: [
            { name: 'Official Python Tutorial', url: 'https://docs.python.org/3/tutorial/' },
            { name: 'Real Python Tutorials', url: 'https://realpython.com/' }
        ],
        youtubeVideos: [
            { name: 'Python Full Course', url: 'https://www.youtube.com/watch?v=YYXdXT2l-Gg' },
            { name: 'Python for Beginners', url: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc' }
        ]
    },
    'Python Loops': {
        websites: [
            { name: 'W3Schools Python Loops', url: 'https://www.w3schools.com/python/python_for_loops.asp' },
            { name: 'Programiz Python Loops', url: 'https://www.programiz.com/python-programming/for-loop' }
        ],
        youtubeVideos: [
            { name: 'Python Loops Tutorial', url: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc' },
            { name: 'Complete Loops in Python', url: 'https://www.youtube.com/watch?v=ix9cRaBkVe0' }
        ]
    },
    'Python Operators': {
        websites: [
            { name: 'Python Operators Guide', url: 'https://www.w3schools.com/python/python_operators.asp' },
            { name: 'Real Python Operators', url: 'https://realpython.com/python-operators/' }
        ],
        youtubeVideos: [
            { name: 'Python Operators Explained', url: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc' },
            { name: 'Complete Operators Tutorial', url: 'https://www.youtube.com/watch?v=ix9cRaBkVe0' }
        ]
    },
    'Python Conditional statements': {
        websites: [
            { name: 'Python Conditional Statements', url: 'https://www.w3schools.com/python/python_conditions.asp' },
            { name: 'Real Python Conditionals', url: 'https://realpython.com/python-conditional-statements/' }
        ],
        youtubeVideos: [
            { name: 'Python Conditional Statements', url: 'https://www.youtube.com/watch?v=ix9cRaBkVe0' },
            { name: 'If-Else in Python', url: 'https://www.youtube.com/watch?v=ix9cRaBkVe0' }
        ]
    },
    'Python Classes and Objects': {
        websites: [
            { name: 'Python OOP Tutorial', url: 'https://docs.python.org/3/tutorial/classes.html' },
            { name: 'Real Python OOP', url: 'https://realpython.com/python3-object-oriented-programming/' }
        ],
        youtubeVideos: [
            { name: 'Python OOP Full Tutorial', url: 'https://www.youtube.com/watch?v=ZDa-Z5JzLYM' },
            { name: 'Classes and Objects in Python', url: 'https://www.youtube.com/watch?v=JeznW_7DlB0' }
        ]
    },
    'Python Arrays': {
        websites: [
            { name: 'Python Arrays Guide', url: 'https://www.w3schools.com/python/python_arrays.asp' },
            { name: 'Real Python Arrays', url: 'https://realpython.com/python-arrays/' }
        ],
        youtubeVideos: [
            { name: 'Python Arrays Tutorial', url: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc' },
            { name: 'Arrays in Python Explained', url: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc' }
        ]
    },
    'Python Strings': {
        websites: [
            { name: 'Python Strings Tutorial', url: 'https://www.w3schools.com/python/python_strings.asp' },
            { name: 'Real Python Strings', url: 'https://realpython.com/python-strings/' }
        ],
        youtubeVideos: [
            { name: 'Python Strings Explained', url: 'https://www.youtube.com/watch?v=k9TUPpGqYTo' },
            { name: 'Complete Guide to Strings', url: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc' }
        ]
    },
    'Python Inheritance': {
        websites: [
            { name: 'Python Inheritance Tutorial', url: 'https://www.w3schools.com/python/python_inheritance.asp' },
            { name: 'Real Python Inheritance', url: 'https://realpython.com/inheritance-composition-python/' }
        ],
        youtubeVideos: [
            { name: 'Python Inheritance Explained', url: 'https://www.youtube.com/watch?v=RSl87lqOXDE' },
            { name: 'OOP Inheritance in Python', url: 'https://www.youtube.com/watch?v=RSl87lqOXDE' }
        ]
    },
    'Python Abstraction': {
        websites: [
            { name: 'Python Abstraction Guide', url: 'https://www.w3schools.com/python/python_classes.asp' },
            { name: 'Real Python Abstract Classes', url: 'https://realpython.com/python-abstract-class/' }
        ],
        youtubeVideos: [
            { name: 'Python Abstraction Tutorial', url: 'https://www.youtube.com/watch?v=ZDa-Z5JzLYM' },
            { name: 'Abstract Classes in Python', url: 'https://www.youtube.com/watch?v=ZDa-Z5JzLYM' }
        ]
    },
    'Python Encapsulation': {
        websites: [
            { name: 'Real Python OOP Guide', url: 'https://realpython.com/python3-object-oriented-programming/' },
            { name: 'Programiz Python OOP', url: 'https://www.programiz.com/python-programming/object-oriented-programming' }
        ],
        youtubeVideos: [
            { name: 'Python Encapsulation Explained', url: 'https://www.youtube.com/watch?v=ZDa-Z5JzLYM' },
            { name: 'Encapsulation in Python', url: 'https://www.youtube.com/watch?v=ZDa-Z5JzLYM' }
        ]
    },
    'Python Exception Handling': {
        websites: [
            { name: 'Python Exception Handling', url: 'https://www.w3schools.com/python/python_try_except.asp' },
            { name: 'Real Python Exceptions', url: 'https://realpython.com/python-exceptions/' }
        ],
        youtubeVideos: [
            { name: 'Python Exception Handling Tutorial', url: 'https://www.youtube.com/watch?v=6SPDvPK38tw' },
            { name: 'Try Except in Python', url: 'https://www.youtube.com/watch?v=NIWwJbo-9_8' }
        ]
    },
    'Python File I/O': {
        websites: [
            { name: 'Python File I/O Tutorial', url: 'https://www.w3schools.com/python/python_file_handling.asp' },
            { name: 'Real Python File I/O', url: 'https://realpython.com/read-write-files-python/' }
        ],
        youtubeVideos: [
            { name: 'Python File Handling', url: 'https://www.youtube.com/watch?v=Uh2ebFW8OYM' },
            { name: 'File I/O in Python', url: 'https://www.youtube.com/watch?v=Uh2ebFW8OYM' }
        ]
    },
    'Python Collections Framework': {
        websites: [
            { name: 'Python Collections Module', url: 'https://docs.python.org/3/library/collections.html' },
            { name: 'Real Python Collections', url: 'https://realpython.com/python-collections-module/' }
        ],
        youtubeVideos: [
            { name: 'Python Collections Tutorial', url: 'https://www.youtube.com/watch?v=UdcPhnNjSEw' },
            { name: 'Collections Module Explained', url: 'https://www.youtube.com/watch?v=UdcPhnNjSEw' }
        ]
    },
    'Python Lambda Functions': {
        websites: [
            { name: 'Python Lambda Tutorial', url: 'https://www.w3schools.com/python/python_lambda.asp' },
            { name: 'Real Python Lambda', url: 'https://realpython.com/python-lambda/' }
        ],
        youtubeVideos: [
            { name: 'Python Lambda Functions Explained', url: 'https://www.youtube.com/watch?v=25ovCm9jKfA' },
            { name: 'Lambda Expressions in Python', url: 'https://www.youtube.com/watch?v=9Os0o3wzS_I' }
        ]
    },
    'Python Generators': {
        websites: [
            { name: 'Python Generators Guide', url: 'https://realpython.com/introduction-to-python-generators/' },
            { name: 'Official Python Generators', url: 'https://docs.python.org/3/howto/functional.html#generators' }
        ],
        youtubeVideos: [
            { name: 'Python Generators Explained', url: 'https://www.youtube.com/watch?v=bD05uGo_sVI' },
            { name: 'Advanced Python Generators', url: 'https://www.youtube.com/watch?v=bD05uGo_sVI' }
        ]
    },
    'Python Decorators': {
        websites: [
            { name: 'Real Python Decorators', url: 'https://realpython.com/primer-on-python-decorators/' },
            { name: 'Python Decorators Guide', url: 'https://www.programiz.com/python-programming/decorator' }
        ],
        youtubeVideos: [
            { name: 'Python Decorators Tutorial', url: 'https://www.youtube.com/watch?v=FsAPt_9Bf3U' },
            { name: 'Advanced Python Decorators', url: 'https://www.youtube.com/watch?v=FsAPt_9Bf3U' }
        ]
    },
    'Python Project': {
        websites: [
            { name: 'Python Project Ideas', url: 'https://realpython.com/tutorials/projects/' },
            { name: 'GitHub Python Projects', url: 'https://github.com/topics/python-project' }
        ],
        youtubeVideos: [
            { name: 'Python Project Tutorial', url: 'https://www.youtube.com/watch?v=PXMJ6FS7llk' },
            { name: 'Beginner Python Projects', url: 'https://www.youtube.com/watch?v=PXMJ6FS7llk' }
        ]
    },
    'Python Interview Questions': {
        websites: [
            { name: 'GeeksforGeeks Python Q&A', url: 'https://www.geeksforgeeks.org/python-interview-questions/' },
            { name: 'Real Python Interview Prep', url: 'https://realpython.com/python-interview-qa-practice-questions/' }
        ],
        youtubeVideos: [
            { name: 'Top Python Interview Questions', url: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc' },
            { name: 'Python Interview Preparation', url: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc' }
        ]
    },

    // C# References
    'C# Basics': {
        websites: [
            { name: 'Microsoft C# Docs', url: 'https://docs.microsoft.com/en-us/dotnet/csharp/' },
            { name: 'W3Schools C# Tutorial', url: 'https://www.w3schools.com/cs/' }
        ],
        youtubeVideos: [
            { name: 'C# Full Course for Beginners', url: 'https://www.youtube.com/watch?v=GhQdlIFylQ8' },
            { name: 'Complete C# Tutorial', url: 'https://www.youtube.com/watch?v=wxznTygnRfQ' }
        ]
    },
    'C# Loops': {
        websites: [
            { name: 'Microsoft Loops Documentation', url: 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/statements/iteration-statements' },
            { name: 'Programiz C# Loops', url: 'https://www.programiz.com/csharp-programming/for-loop' }
        ],
        youtubeVideos: [
            { name: 'C# Loops Explained', url: 'https://www.youtube.com/watch?v=wxznTygnRfQ' },
            { name: 'Loops in C# Tutorial', url: 'https://www.youtube.com/watch?v=wxznTygnRfQ' }
        ]
    },
    'C# Operators': {
        websites: [
            { name: 'Microsoft Operators Reference', url: 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/operators/' },
            { name: 'W3Schools C# Operators', url: 'https://www.w3schools.com/cs/cs_operators.php' }
        ],
        youtubeVideos: [
            { name: 'C# Operators Tutorial', url: 'https://www.youtube.com/watch?v=wxznTygnRfQ' },
            { name: 'Complete Operators Guide', url: 'https://www.youtube.com/watch?v=wxznTygnRfQ' }
        ]
    },
    'C# Conditional statements': {
        websites: [
            { name: 'Microsoft Conditional Statements', url: 'https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/statements/selection-statements' },
            { name: 'Programiz C# Conditionals', url: 'https://www.programiz.com/csharp-programming/if-else-statement' }
        ],
        youtubeVideos: [
            { name: 'C# Conditional Statements', url: 'https://www.youtube.com/watch?v=wxznTygnRfQ' },
            { name: 'If-Else in C#', url: 'https://www.youtube.com/watch?v=wxznTygnRfQ' }
        ]
    },
    'C# Classes and Objects': {
        websites: [
            { name: 'Microsoft OOP in C#', url: 'https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/object-oriented-programming' },
            { name: 'Microsoft C# OOP Tutorial', url: 'https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/tutorials/oop' }
        ],
        youtubeVideos: [
            { name: 'C# OOP Full Tutorial', url: 'https://www.youtube.com/watch?v=wxznTygnRfQ' },
            { name: 'Classes and Objects Explained', url: 'https://www.youtube.com/watch?v=wxznTygnRfQ' }
        ]
    },
    'C# Arrays': {
        websites: [
            { name: 'Microsoft C# Arrays', url: 'https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/arrays/' },
            { name: 'W3Schools C# Arrays', url: 'https://www.w3schools.com/cs/cs_arrays.php' }
        ],
        youtubeVideos: [
            { name: 'C# Arrays Tutorial', url: 'https://www.youtube.com/watch?v=wxznTygnRfQ' },
            { name: 'Arrays in C# Explained', url: 'https://www.youtube.com/watch?v=wxznTygnRfQ' }
        ]
    },
    'C# Strings': {
        websites: [
            { name: 'Microsoft C# Strings', url: 'https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/strings/' },
            { name: 'W3Schools C# Strings', url: 'https://www.w3schools.com/cs/cs_strings.php' }
        ],
        youtubeVideos: [
            { name: 'C# Strings Tutorial', url: 'https://www.youtube.com/watch?v=wxznTygnRfQ' },
            { name: 'Working with Strings in C#', url: 'https://www.youtube.com/watch?v=wxznTygnRfQ' }
        ]
    },
    'C# Inheritance': {
        websites: [
            { name: 'Microsoft C# Inheritance', url: 'https://docs.microsoft.com/en-us/dotnet/csharp/fundamentals/object-oriented/inheritance' },
            { name: 'W3Schools C# Inheritance', url: 'https://www.w3schools.com/cs/cs_inheritance.php' }
        ],
        youtubeVideos: [
            { name: 'C# Inheritance Tutorial', url: 'https://www.youtube.com/watch?v=wxznTygnRfQ' },
            { name: 'Inheritance in C# Explained', url: 'https://www.youtube.com/watch?v=wxznTygnRfQ' }
        ]
    },
    'C# Abstraction': {
        websites: [
            { name: 'Microsoft C# OOP Tutorial', url: 'https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/tutorials/oop' },
            { name: 'W3Schools C# Abstraction', url: 'https://www.w3schools.com/cs/cs_abstract.php' }
        ],
        youtubeVideos: [
            { name: 'C# Abstraction Explained', url: 'https://www.youtube.com/watch?v=wxznTygnRfQ' },
            { name: 'Abstract Classes in C#', url: 'https://www.youtube.com/watch?v=wxznTygnRfQ' }
        ]
    },
    'C# Encapsulation': {
        websites: [
            { name: 'Microsoft C# OOP Tutorial', url: 'https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/tutorials/oop' },
            { name: 'GeeksforGeeks C# Encapsulation', url: 'https://www.geeksforgeeks.org/c-sharp-encapsulation/' }
        ],
        youtubeVideos: [
            { name: 'C# Encapsulation Tutorial', url: 'https://www.youtube.com/watch?v=wxznTygnRfQ' },
            { name: 'Encapsulation in C#', url: 'https://www.youtube.com/watch?v=wxznTygnRfQ' }
        ]
    },
    'C# Exception Handling': {
        websites: [
            { name: 'Microsoft C# Exceptions', url: 'https://docs.microsoft.com/en-us/dotnet/csharp/fundamentals/exceptions/' },
            { name: 'W3Schools C# Exception Handling', url: 'https://www.w3schools.com/cs/cs_exceptions.php' }
        ],
        youtubeVideos: [
            { name: 'C# Exception Handling Tutorial', url: 'https://www.youtube.com/watch?v=wxznTygnRfQ' },
            { name: 'Try Catch in C#', url: 'https://www.youtube.com/watch?v=wxznTygnRfQ' }
        ]
    },
    'C# File I/O': {
        websites: [
            { name: 'Microsoft File I/O in C#', url: 'https://docs.microsoft.com/en-us/dotnet/standard/io/' },
            { name: 'W3Schools C# File Handling', url: 'https://www.w3schools.com/cs/cs_files.php' }
        ],
        youtubeVideos: [
            { name: 'C# File I/O Tutorial', url: 'https://www.youtube.com/watch?v=wxznTygnRfQ' },
            { name: 'File Handling in C#', url: 'https://www.youtube.com/watch?v=wxznTygnRfQ' }
        ]
    },
    '.net Framework': {
        websites: [
            { name: 'Microsoft .NET Documentation', url: 'https://docs.microsoft.com/en-us/dotnet/' },
            { name: '.NET Core Guide', url: 'https://docs.microsoft.com/en-us/dotnet/core/' }
        ],
        youtubeVideos: [
            { name: '.NET Framework Complete Tutorial', url: 'https://www.youtube.com/watch?v=wxznTygnRfQ' },
            { name: 'Introduction to .NET', url: 'https://www.youtube.com/watch?v=wxznTygnRfQ' }
        ]
    },
    'C# Project': {
        websites: [
            { name: 'GitHub C# Projects', url: 'https://github.com/topics/csharp-project' },
            { name: 'GeeksforGeeks C# Projects', url: 'https://www.geeksforgeeks.org/blogs/c-project-ideas-for-beginners/' }
        ],
        youtubeVideos: [
            { name: 'C# Project Tutorial', url: 'https://www.youtube.com/watch?v=GhQdlIFylQ8' },
            { name: 'Beginner C# Projects', url: 'https://www.youtube.com/watch?v=wxznTygnRfQ' }
        ]
    },
    'C# Interview Questions': {
        websites: [
            { name: 'GeeksforGeeks C# Interview Q&A', url: 'https://www.geeksforgeeks.org/c-sharp-interview-questions/' },
            { name: 'Simplilearn C# Interview Guide', url: 'https://www.simplilearn.com/tutorials/c-sharp-tutorial/c-sharp-interview-questions' }
        ],
        youtubeVideos: [
            { name: 'Top C# Interview Questions', url: 'https://www.youtube.com/watch?v=wxznTygnRfQ' },
            { name: 'C# Interview Preparation', url: 'https://www.youtube.com/watch?v=wxznTygnRfQ' }
        ]
    },

    // QA References
    'Testing Concepts': {
        websites: [
            { name: 'Software Testing Fundamentals', url: 'https://softwaretestingfundamentals.com/' },
            { name: 'Guru99 Software Testing', url: 'https://www.guru99.com/software-testing.html' }
        ],
        youtubeVideos: [
            { name: 'Software Testing Concepts', url: 'https://www.youtube.com/watch?v=jydYq7oAtD8' },
            { name: 'Complete Testing Guide', url: 'https://www.youtube.com/watch?v=jydYq7oAtD8' }
        ]
    },
    'Test Cases and Test Scenarios': {
        websites: [
            { name: 'Guru99 Test Case vs Test Scenario', url: 'https://www.guru99.com/test-case-vs-test-scenario.html' },
            { name: 'SoftwareTestingHelp Test Case Template', url: 'https://www.softwaretestinghelp.com/test-case-template-examples/' }
        ],
        youtubeVideos: [
            { name: 'Test Cases and Scenarios Tutorial', url: 'https://www.youtube.com/watch?v=cHYq1MRoyI0' },
            { name: 'Writing Test Cases', url: 'https://www.youtube.com/watch?v=cHYq1MRoyI0' }
        ]
    },
    'JIRA and Defect logging': {
        websites: [
            { name: 'Atlassian JIRA Guide', url: 'https://www.atlassian.com/software/jira' },
            { name: 'JIRA Tutorial', url: 'https://www.guru99.com/jira-tutorial-a-complete-guide-for-beginners.html' }
        ],
        youtubeVideos: [
            { name: 'JIRA Complete Tutorial', url: 'https://www.youtube.com/watch?v=8jWKwiIcWPI' },
            { name: 'Defect Logging in JIRA', url: 'https://www.youtube.com/watch?v=8jWKwiIcWPI' }
        ]
    },
    'SDLC and STLC': {
        websites: [
            { name: 'SDLC Explained', url: 'https://www.tutorialspoint.com/sdlc/index.htm' },
            { name: 'Software Testing Life Cycle', url: 'https://www.guru99.com/software-testing-life-cycle.html' }
        ],
        youtubeVideos: [
            { name: 'SDLC and STLC Tutorial', url: 'https://www.youtube.com/watch?v=OKU6Efm4Ybc' },
            { name: 'Complete Software Development Lifecycle', url: 'https://www.youtube.com/watch?v=OKU6Efm4Ybc' }
        ]
    },
    'Status Reports': {
        websites: [
            { name: 'ProjectManager Status Report', url: 'https://www.projectmanager.com/templates/status-report-template' },
            { name: 'Atlassian Status Report Guide', url: 'https://www.atlassian.com/work-management/project-management/status-report' }
        ],
        youtubeVideos: [
            { name: 'Status Reports in Testing', url: 'https://www.youtube.com/watch?v=4C5LYI1DLR4' },
            { name: 'Daily Status Report Tips', url: 'https://www.youtube.com/watch?v=4C5LYI1DLR4' }
        ]
    },
    'Unit testing': {
        websites: [
            { name: 'Unit Testing Guide', url: 'https://www.guru99.com/unit-testing-guide.html' },
            { name: 'Unit Testing Best Practices', url: 'https://www.softwaretestinghelp.com/unit-testing/' }
        ],
        youtubeVideos: [
            { name: 'Unit Testing Tutorial', url: 'https://www.youtube.com/watch?v=cHYq1MRoyI0' },
            { name: 'Unit Testing Explained', url: 'https://www.youtube.com/watch?v=cHYq1MRoyI0' }
        ]
    },
    'Selenium': {
        websites: [
            { name: 'Selenium Official Site', url: 'https://www.selenium.dev/' },
            { name: 'Selenium Tutorial', url: 'https://www.guru99.com/selenium-tutorial.html' }
        ],
        youtubeVideos: [
            { name: 'Selenium Full Course', url: 'https://www.youtube.com/watch?v=j7VZsCCnptM' },
            { name: 'Selenium WebDriver Tutorial', url: 'https://www.youtube.com/watch?v=j7VZsCCnptM' }
        ]
    },
    'QA Project': {
        websites: [
            { name: 'TestLikeAGirl QA Portfolio', url: 'https://testlikeagirl.com/career-transition/qa-portfolio-projects-impress-hiring-managers/' },
            { name: 'GitHub QA Projects', url: 'https://github.com/topics/software-testing' }
        ],
        youtubeVideos: [
            { name: 'QA Project Tutorial', url: 'https://www.youtube.com/watch?v=cHYq1MRoyI0' },
            { name: 'Real World QA Projects', url: 'https://www.youtube.com/watch?v=cHYq1MRoyI0' }
        ]
    },
    'QA Interview Questions': {
        websites: [
            { name: 'Software Testing Interview Q&A', url: 'https://www.softwaretestinghelp.com/qa-interview-questions/' },
            { name: 'Top QA Interview Questions', url: 'https://www.guru99.com/software-testing-interview-questions.html' }
        ],
        youtubeVideos: [
            { name: 'QA Interview Preparation', url: 'https://www.youtube.com/watch?v=jydYq7oAtD8' },
            { name: 'Top QA Interview Questions', url: 'https://www.youtube.com/watch?v=jydYq7oAtD8' }
        ]
    },

    // DB References
    'SQL Content': {
        websites: [
            { name: 'SQL intro', url: 'https://www.w3schools.com/sql/sql_intro.asp' },
            { name: 'DDL, DQL, DML, DCL', url: 'https://www.geeksforgeeks.org/sql-ddl-dql-dml-dcl-tcl-commands/' },
            { name: 'SQL Joins', url: 'https://www.geeksforgeeks.org/sql-join-set-1-inner-left-right-and-full-joins/' }
        ],
        youtubeVideos: [
            { name: 'SQL Full Course for Beginners', url: 'https://www.youtube.com/watch?v=HXV3zeQKqGY' },
            { name: 'SQL Tutorial - Database Course', url: 'https://www.youtube.com/watch?v=7S_tz1z_5bA' }
        ]
    },
    'SQL Interview Questions': {
        websites: [
            { name: 'SQL Interview Questions', url: 'https://www.geeksforgeeks.org/sql-interview-questions/' },
            { name: 'GeeksforGeeks SQL Interview Q&A', url: 'https://www.geeksforgeeks.org/sql-interview-questions/' }
        ],
        youtubeVideos: [
            { name: 'SQL Interview Questions & Answers', url: 'https://www.youtube.com/watch?v=7S_tz1z_5bA' },
            { name: 'Top SQL Interview Questions', url: 'https://www.youtube.com/watch?v=7S_tz1z_5bA' }
        ]
    },

    // UI References
    'HTML5': {
        websites: [
            { name: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
            { name: 'W3Schools HTML Tutorial', url: 'https://www.w3schools.com/html/' }
        ],
        youtubeVideos: [
            { name: 'HTML Full Course', url: 'https://www.youtube.com/watch?v=pQN-pnXPaVg' },
            { name: 'HTML Crash Course', url: 'https://www.youtube.com/watch?v=UB1O30fR-EE' }
        ]
    },
    'CSS': {
        websites: [
            { name: 'CSS-Tricks', url: 'https://css-tricks.com/' },
            { name: 'MDN CSS Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' }
        ],
        youtubeVideos: [
            { name: 'CSS Full Course', url: 'https://www.youtube.com/watch?v=WyxzAU3p8CE' },
            { name: 'CSS Crash Course', url: 'https://www.youtube.com/watch?v=yfoY53QXEnI' }
        ]
    },
    'JavaScript': {
        websites: [
            { name: 'JavaScript.info', url: 'https://javascript.info/' },
            { name: 'MDN JavaScript Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' }
        ],
        youtubeVideos: [
            { name: 'JavaScript Full Course', url: 'https://www.youtube.com/watch?v=PkZNo7MFNFg' },
            { name: 'JavaScript Crash Course', url: 'https://www.youtube.com/watch?v=hdI2bqOjy3c' }
        ]
    },
    'JQuery': {
        websites: [
            { name: 'jQuery Official Site', url: 'https://jquery.com/' },
            { name: 'jQuery Learning Center', url: 'https://learn.jquery.com/' }
        ],
        youtubeVideos: [
            { name: 'jQuery Full Tutorial', url: 'https://www.youtube.com/watch?v=wxznTygnRfQ' },
            { name: 'jQuery Crash Course', url: 'https://www.youtube.com/watch?v=3nrLc_JOF7k' }
        ]
    },
    'Project': {
        websites: [
            { name: 'GitHub Projects', url: 'https://github.com/topics/web-development' },
            { name: 'ProjectLibre', url: 'https://www.projectlibre.com/' }
        ],
        youtubeVideos: [
            { name: 'Web Development Project Tutorial', url: 'https://www.youtube.com/watch?v=R8_veQiYBjI' },
            { name: 'Project Management Crash Course', url: 'https://www.youtube.com/watch?v=4C5LYI1DLR4' }
        ]
    },
    'UI Interview Questions': {
        websites: [
            { name: 'GeeksforGeeks UI Interview Questions', url: 'https://www.geeksforgeeks.org/ui-interview-questions/' },
            { name: 'Simplilearn UI Interview Guide', url: 'https://www.simplilearn.com/ui-ux-interview-questions-article' }
        ],
        youtubeVideos: [
            { name: 'UI Interview Preparation', url: 'https://www.youtube.com/watch?v=XKu_SEDAykw' },
            { name: 'UI/UX Interview Tips', url: 'https://www.youtube.com/watch?v=XKu_SEDAykw' }
        ]
    },

    // Cybersecurity (CS) References
    'CS Basics': {
        websites: [
            { name: 'NIST Cybersecurity', url: 'https://www.nist.gov/cybersecurity' },
            { name: 'Cybersecurity Fundamentals', url: 'https://www.sans.org/cyber-security-courses/' }
        ],
        youtubeVideos: [
            { name: 'Cybersecurity Basics Full Course', url: 'https://www.youtube.com/watch?v=2_lswM1S264' },
            { name: 'Introduction to Cybersecurity', url: 'https://www.youtube.com/watch?v=2_lswM1S264' }
        ]
    },
    'Types of Cyber Threats': {
        websites: [
            { name: 'CISA Cyber Threats', url: 'https://www.cisa.gov/news-events/cybersecurity-advisories' },
            { name: 'IBM Cyber Threats', url: 'https://www.ibm.com/think/topics/cyberthreats-types' }
        ],
        youtubeVideos: [
            { name: 'Cyber Threat Landscape', url: 'https://www.youtube.com/watch?v=2_lswM1S264' },
            { name: 'Understanding Cyber Threats', url: 'https://www.youtube.com/watch?v=qiQR5rTSshw' }
        ]
    },
    'Network Security': {
        websites: [
            { name: 'Cisco Network Security', url: 'https://www.cisco.com/site/us/en/products/security/network-security/index.html' },
            { name: 'Network Security Fundamentals', url: 'https://www.comptia.org/content/guides/network-security-fundamentals' }
        ],
        youtubeVideos: [
            { name: 'Network Security Full Course', url: 'https://www.youtube.com/watch?v=qiQR5rTSshw' },
            { name: 'Network Security Explained', url: 'https://www.youtube.com/watch?v=qiQR5rTSshw' }
        ]
    },
    'Common Attack Vectors': {
        websites: [
            { name: 'CrowdStrike Attack Vectors', url: 'https://www.crowdstrike.com/en-us/cybersecurity-101/threat-intelligence/attack-vector/' },
            { name: 'TechTarget Attack Vector', url: 'https://www.techtarget.com/searchsecurity/definition/attack-vector' }
        ],
        youtubeVideos: [
            { name: 'Attack Vectors Explained', url: 'https://www.youtube.com/watch?v=F5KJVuii0Yw' },
            { name: 'Cyber Attack Vectors', url: 'https://www.youtube.com/watch?v=F5KJVuii0Yw' }
        ]
    },
    'Cryptography': {
        websites: [
            { name: 'Cryptography Introduction', url: 'https://www.ibm.com/topics/cryptography' },
            { name: 'TutorialsPoint Cryptography', url: 'https://www.tutorialspoint.com/cryptography/index.htm' }
        ],
        youtubeVideos: [
            { name: 'Cryptography Full Tutorial', url: 'https://www.youtube.com/watch?v=qiQR5rTSshw' },
            { name: 'Cryptography for Beginners', url: 'https://www.youtube.com/watch?v=ZghMPWGXexs' }
        ]
    },
    'Firewalls and IDS': {
        websites: [
            { name: 'Palo Alto Firewall vs IDS vs IPS', url: 'https://www.paloaltonetworks.com/cyberpedia/firewall-vs-ids-vs-ips' },
            { name: 'Understanding Network Security', url: 'https://www.cloudflare.com/learning/security/what-is-an-intrusion-detection-system/' }
        ],
        youtubeVideos: [
            { name: 'Firewalls and IDS Explained', url: 'https://www.youtube.com/watch?v=qiQR5rTSshw' },
            { name: 'Network Security Tools', url: 'https://www.youtube.com/watch?v=qiQR5rTSshw' }
        ]
    },

    // Data Science (DS) References
    'Key Components of AI': {
        websites: [
            { name: 'IBM AI Basics', url: 'https://www.ibm.com/topics/artificial-intelligence' },
            { name: 'GeeksforGeeks AI Components', url: 'https://www.geeksforgeeks.org/artificial-intelligence/components-of-artificial-intelligence-ai/' }
        ],
        youtubeVideos: [
            { name: 'AI Components Full Course', url: 'https://www.youtube.com/watch?v=qYNweeDHiyU' },
            { name: 'Understanding AI Components', url: 'https://www.youtube.com/watch?v=qYNweeDHiyU' }
        ]
    },
    'Expert Systems':{
        websites: [
            { name: 'IBM AI Basics', url: 'https://www.ibm.com/topics/artificial-intelligence' },
            { name: 'GeeksforGeeks AI Components', url: 'https://www.geeksforgeeks.org/artificial-intelligence/components-of-artificial-intelligence-ai/' }
        ],
        youtubeVideos: [
            { name: 'AI Components Full Course', url: 'https://www.youtube.com/watch?v=qYNweeDHiyU' },
            { name: 'Understanding AI Components', url: 'https://www.youtube.com/watch?v=qYNweeDHiyU' }
        ]
    },
    'NumPy': {
        websites: [
            { name: 'NumPy Official Documentation', url: 'https://numpy.org/doc/stable/' },
            { name: 'NumPy Tutorial', url: 'https://www.w3schools.com/python/numpy/default.asp' }
        ],
        youtubeVideos: [
            { name: 'NumPy Full Tutorial', url: 'https://www.youtube.com/watch?v=QUT1VHiLmmI' },
            { name: 'NumPy for Data Science', url: 'https://www.youtube.com/watch?v=LHBE6Q9XlzI' }
        ]
    },
    'Pandas': {
        websites: [
            { name: 'Pandas Official Documentation', url: 'https://pandas.pydata.org/docs/' },
            { name: 'Pandas Tutorial', url: 'https://www.w3schools.com/python/pandas/default.asp' }
        ],
        youtubeVideos: [
            { name: 'Pandas Full Course', url: 'https://www.youtube.com/watch?v=vmEHCJofslg' },
            { name: 'Pandas for Data Analysis', url: 'https://www.youtube.com/watch?v=gtjxAH8uaP0' }
        ]
    },
    'Machine Learning': {
        websites: [
            { name: 'Machine Learning by Google', url: 'https://developers.google.com/machine-learning' },
            { name: 'ML Fundamentals', url: 'https://www.coursera.org/learn/machine-learning' }
        ],
        youtubeVideos: [
            { name: 'Machine Learning Full Course', url: 'https://www.youtube.com/watch?v=i_LwzRVP7bg' },
            { name: 'ML for Beginners', url: 'https://www.youtube.com/watch?v=_Z9TRANg4c0' }
        ]
    },
    'Data Visualization': {
        websites: [
            { name: 'Data Visualization Guide', url: 'https://www.tableau.com/learn/articles/data-visualization' },
            { name: 'Python Data Visualization', url: 'https://realpython.com/python-data-visualization/' }
        ],
        youtubeVideos: [
            { name: 'Data Visualization Full Course', url: 'https://www.youtube.com/watch?v=3Xc3CA655Y4' },
            { name: 'Data Visualization with Python', url: 'https://www.youtube.com/watch?v=UO98lJQ3QGI' }
        ]
    },
    'EDA': {
        websites: [
            { name: 'DataCamp EDA Tutorial', url: 'https://www.datacamp.com/tutorial/exploratory-data-analysis-python' },
            { name: 'Exploratory Data Analysis', url: 'https://realpython.com/python-data-cleaning/' }
        ],
        youtubeVideos: [
            { name: 'EDA Full Tutorial', url: 'https://www.youtube.com/watch?v=r-uOLxNrNk8' },
            { name: 'Exploratory Data Analysis Explained', url: 'https://www.youtube.com/watch?v=r-uOLxNrNk8' }
        ]
    },
    'Data Preparation for ML': {
        websites: [
            { name: 'Data Preparation Guide', url: 'https://developers.google.com/machine-learning/data-prep' },
            { name: 'GeeksforGeeks Data Preprocessing', url: 'https://www.geeksforgeeks.org/data-analysis/data-preprocessing-machine-learning-python/' }
        ],
        youtubeVideos: [
            { name: 'Data Preparation for ML', url: 'https://www.youtube.com/watch?v=r-uOLxNrNk8' },
            { name: 'Data Preprocessing Tutorial', url: 'https://www.youtube.com/watch?v=r-uOLxNrNk8' }
        ]
    },

    // DevOps References
    'DevOps Introduction': {
        websites: [
            { name: 'AWS DevOps Guide', url: 'https://aws.amazon.com/devops/what-is-devops/' },
            { name: 'DevOps Fundamentals', url: 'https://www.atlassian.com/devops' }
        ],
        youtubeVideos: [
            { name: 'DevOps Full Course', url: 'https://www.youtube.com/watch?v=Wvf0mBNGjXY' },
            { name: 'DevOps Explained', url: 'https://www.youtube.com/watch?v=kBV8gPVZNEE' }
        ]
    },
    'DevOps Lifecycle': {
        websites: [
            { name: 'DevOps Lifecycle Guide', url: 'https://www.atlassian.com/devops/devops-lifecycle' },
            { name: 'DevOps Lifecycle Phases', url: 'https://www.simplilearn.com/devops-lifecycle-article' }
        ],
        youtubeVideos: [
            { name: 'DevOps Lifecycle Explained', url: 'https://www.youtube.com/watch?v=Wvf0mBNGjXY' },
            { name: 'DevOps Lifecycle Tutorial', url: 'https://www.youtube.com/watch?v=4C5LYI1DLR4' }
        ]
    },
    'Continuous Delivery (CD)': {
        websites: [
            { name: 'CD Explained', url: 'https://www.redhat.com/en/topics/devops/what-is-ci-cd' },
            { name: 'Continuous Delivery Guide', url: 'https://www.atlassian.com/continuous-delivery' }
        ],
        youtubeVideos: [
            { name: 'Continuous Delivery Tutorial', url: 'https://www.youtube.com/watch?v=qP8kir2GUgo' },
            { name: 'CI/CD Pipeline Explained', url: 'https://www.youtube.com/watch?v=qP8kir2GUgo' }
        ]
    },
    'Configuration Management': {
        websites: [
            { name: 'Configuration Management Guide', url: 'https://www.redhat.com/en/topics/automation/what-is-configuration-management' },
            { name: 'Ansible Configuration Management', url: 'https://www.ansible.com/configuration-management' }
        ],
        youtubeVideos: [
            { name: 'Configuration Management Explained', url: 'https://www.youtube.com/watch?v=l5k1ai_GBDE' },
            { name: 'Configuration Management Tools', url: 'https://www.youtube.com/watch?v=4C5LYI1DLR4' }
        ]
    },
    'Continuous Integration (CI)': {
        websites: [
            { name: 'CI/CD Guide', url: 'https://www.redhat.com/en/topics/devops/what-is-ci-cd' },
            { name: 'Jenkins CI Tutorial', url: 'https://www.jenkins.io/doc/book/pipeline/overview/' }
        ],
        youtubeVideos: [
            { name: 'CI Full Tutorial', url: 'https://www.youtube.com/watch?v=qP8kir2GUgo' },
            { name: 'Continuous Integration Explained', url: 'https://www.youtube.com/watch?v=qP8kir2GUgo' }
        ]
    },
    'Infrastructure as Code (IaC)': {
        websites: [
            { name: 'Terraform IaC', url: 'https://www.terraform.io/intro' },
            { name: 'HashiCorp IaC Tutorial', url: 'https://developer.hashicorp.com/terraform/tutorials/aws-get-started/infrastructure-as-code' }
        ],
        youtubeVideos: [
            { name: 'IaC Full Course', url: 'https://www.youtube.com/watch?v=l5k1ai_GBDE' },
            { name: 'Infrastructure as Code Tutorial', url: 'https://www.youtube.com/watch?v=l5k1ai_GBDE' }
        ]
    }
};

async function showContent(topic) {
    const contentArea = document.getElementById('content-area');
    
    // Get references for the selected topic
    const references = topicReferences[topic] || { websites: [], youtubeVideos: [] };
    
    // Generate website references HTML
    const websiteRefsHTML = references.websites.map(site => 
        `<a href="${site.url}" target="_blank">${site.name}</a>`
    ).join(' | ');
    
    // Generate YouTube references HTML
    const youtubeRefsHTML = references.youtubeVideos.map(video => 
        `<a href="${video.url}" target="_blank">${video.name}</a>`
    ).join(' | ');
    
    // Update content area
    contentArea.innerHTML = `
        <div class="tiles">
            <div class="tile"><strong>Topic:</strong> ${topic}</div>
            <div class="tile"><strong>Outcome:</strong> Learn ${topic} in-depth.</div>
            <div class="tile"><strong>Duration:</strong> 2-4 hours</div>
            <div class="tile"><strong>Website References:</strong> ${websiteRefsHTML || 'No references available'}</div>
            <div class="tile"><strong>Youtube Video References:</strong> ${youtubeRefsHTML || 'No references available'}</div>
            <div class="tile"><strong>Assignments:</strong> Contact the <a href="contact.html"><b>Technical Co-ordinator</b></a> for Assignments.</div>
        </div>
    `;

    // Hide all dropdowns
    const dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach(dropdown => {
        dropdown.style.display = 'none';
    });

    // Call the existing footer image setting function
    await setFooterImages();
}

// Add event listeners for all dropdown buttons
document.querySelectorAll('.dropbtn').forEach(button => {
    const dropdown = button.nextElementSibling; // Get the associated dropdown content
    let hideTimeout; // Timeout reference for delay

    // Show dropdown on hover
    button.addEventListener('mouseover', () => {
        clearTimeout(hideTimeout); // Cancel hide timeout
        dropdown.style.display = 'block';
    });

    // Ensure dropdown stays visible when mouse enters dropdown content
    dropdown.addEventListener('mouseover', () => {
        clearTimeout(hideTimeout); // Cancel hide timeout
        dropdown.style.display = 'block';
    });

    // Hide dropdown with a delay when mouse leaves the button
    button.addEventListener('mouseleave', () => {
        hideTimeout = setTimeout(() => {
            dropdown.style.display = 'none';
        }, 300); // 300ms delay
    });

    // Hide dropdown with a delay when mouse leaves the dropdown content
    dropdown.addEventListener('mouseleave', () => {
        hideTimeout = setTimeout(() => {
            dropdown.style.display = 'none';
        }, 300); // 300ms delay
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navbar = document.querySelector('.navbar');
    const subCategoryLinks = document.querySelectorAll('.dropdown-content a');

    // Function to check if we're in mobile view
    const isMobileView = () => window.matchMedia('(max-width: 768px)').matches;

    // Toggle navbar visibility on hamburger menu click
    hamburgerMenu.addEventListener('click', (e) => {
        if (isMobileView()) {
            e.stopPropagation();
            navbar.style.display = (navbar.style.display === 'block') ? 'none' : 'block';
        }
    });

    // Hide navbar when a sub-category link is clicked (mobile only)
    subCategoryLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (isMobileView()) {
                navbar.style.display = 'none';
            }
        });
    });

    // Close dropdowns and hide navbar if clicked outside (mobile only)
    document.addEventListener('click', (event) => {
        if (isMobileView() && 
            !navbar.contains(event.target) && 
            !hamburgerMenu.contains(event.target)) {
            navbar.style.display = 'none';
        }
    });

    // Handle window resize
    let previousIsMobile = isMobileView();
    window.addEventListener('resize', () => {
        const currentIsMobile = isMobileView();
        if (previousIsMobile !== currentIsMobile) {
            // Reset navbar display when switching between mobile and desktop
            navbar.style.display = currentIsMobile ? 'none' : 'block';
            previousIsMobile = currentIsMobile;
        }
    });
});


const tiles = document.querySelectorAll('.tile');
    
            tiles.forEach(tile => {
                tile.addEventListener('click', () => {
                    // Close other answers
                    tiles.forEach(t => {
                        if (t !== tile) {
                            t.classList.remove('active');
                            t.querySelector('.answer').style.maxHeight = null;
                        }
                    });
    
                    // Toggle the current tile
                    const answer = tile.querySelector('.answer');
                    if (tile.classList.contains('active')) {
                        tile.classList.remove('active');
                        answer.style.maxHeight = null;
                    } else {
                        tile.classList.add('active');
                        answer.style.maxHeight = answer.scrollHeight + 'px';
                    }
                });
            });

// Corrected image paths (adjust based on your actual project structure)
// Directory of images
// Generates paths dynamically for 115 images
function generateImagePaths() {
    const basePath = './assets/Advs/';
    const images = [];
    
    // Generate paths for img (1) to img (115) with multiple extensions
    for (let i = 1; i <= 125; i++) {
        ['jpeg'].forEach(ext => {
            images.push(`${basePath}img (${i}).${ext}`);
        });
    }
    
    return images;
}

// Global image directory
const imageDirectory = generateImagePaths();

// Function to get 3 unique random images
function getRandomImages(directory, count) {
    const shuffled = [...directory].sort(() => 0.5 - Math.random()); 
    return shuffled.slice(0, count);
}

// Function to set images in footer
async function setFooterImages() {
    // Select the footer image elements
    const footerImg1 = document.getElementById('footer-img1');
    const footerImg2 = document.getElementById('footer-img2');
    const footerImg3 = document.getElementById('footer-img3');

    // Get 3 random images
    const randomImages = getRandomImages(imageDirectory, 3);

    // Set the src for each image
    if (footerImg1 && randomImages[0]) {
        footerImg1.src = randomImages[0];
        footerImg1.alt = 'Random Program Image 1';
    }

    if (footerImg2 && randomImages[1]) {
        footerImg2.src = randomImages[1];
        footerImg2.alt = 'Random Program Image 2';
    }

    if (footerImg3 && randomImages[2]) {
        footerImg3.src = randomImages[2];
        footerImg3.alt = 'Random Program Image 3';
    }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', setFooterImages);


// Function to update footer images
function updateFooterImages() {
    const randomImages = getRandomImages(imageDirectory, 3);

    document.getElementById('footer-img1').src = randomImages[0];
    document.getElementById('footer-img2').src = randomImages[1];
    document.getElementById('footer-img3').src = randomImages[2];
}

// Function to handle dropdown option clicks
function handleDropdownClick(content) {
    // Show content dynamically (if needed, you can define this function)
    showContent(content);

    // Update footer images with random selection
    updateFooterImages();
}

// Initial Footer Images on Page Load
window.onload = updateFooterImages;

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navbar = document.querySelector('.navbar');
    const dropdowns = document.querySelectorAll('.dropdown');

    // Hamburger menu toggle
    hamburgerMenu.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // Dropdown toggle for mobile
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.currentTarget.classList.toggle('active');
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && 
            !navbar.contains(e.target) && 
            e.target !== hamburgerMenu) {
            navbar.classList.remove('active');
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
});
