import { useState, useRef } from 'react';
import Editor from '@monaco-editor/react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import {
  PlayIcon, ArrowPathIcon, ClipboardDocumentIcon, ClipboardDocumentCheckIcon,
  CodeBracketIcon, ChevronDownIcon, InformationCircleIcon, SparklesIcon,
  TrashIcon, DocumentDuplicateIcon
} from '@heroicons/react/24/outline';
import { useTheme } from '../context/ThemeContext';

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
const GROQ_API_URL = import.meta.env.VITE_GROQ_API_URL || 'https://api.groq.com/openai/v1/chat/completions';
const GROQ_MODEL = import.meta.env.VITE_GROQ_MODEL || 'llama-3.3-70b-versatile';

const codeTemplates = {
  'Hello World': `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World! 🚀");
        System.out.println("Welcome to Java In My Style!");
        System.out.println("Powered by Groq AI ⚡");
    }
}`,

  'Calculator': `public class Main {
    public static void main(String[] args) {
        int a = 25, b = 10;
        System.out.println("=== Java Calculator ===");
        System.out.println("a = " + a + ", b = " + b);
        System.out.println("Addition:       " + (a + b));
        System.out.println("Subtraction:    " + (a - b));
        System.out.println("Multiplication: " + (a * b));
        System.out.println("Division:       " + (a / b));
        System.out.println("Modulus:        " + (a % b));
        System.out.printf("Power (a^2):    %.0f%n", Math.pow(a, 2));
        System.out.println("======================");
    }
}`,

  'Fibonacci': `public class Main {
    static long fibonacci(int n) {
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    public static void main(String[] args) {
        System.out.println("=== Fibonacci Series ===");
        System.out.print("First 15 terms: ");
        for (int i = 0; i < 15; i++) {
            System.out.print(fibonacci(i));
            if (i < 14) System.out.print(", ");
        }
        System.out.println();
        System.out.println("fib(10) = " + fibonacci(10));
        System.out.println("fib(20) = " + fibonacci(20));
        System.out.println("========================");
    }
}`,

  'OOP / Polymorphism': `public class Main {

    static abstract class Shape {
        String color;
        Shape(String color) { this.color = color; }
        abstract double area();
        void describe() {
            System.out.printf("%s %s - Area: %.2f%n",
                color, getClass().getSimpleName(), area());
        }
    }

    static class Circle extends Shape {
        double radius;
        Circle(String color, double r) { super(color); this.radius = r; }
        @Override double area() { return Math.PI * radius * radius; }
    }

    static class Rectangle extends Shape {
        double w, h;
        Rectangle(String color, double w, double h) { super(color); this.w = w; this.h = h; }
        @Override double area() { return w * h; }
    }

    static class Triangle extends Shape {
        double base, height;
        Triangle(String color, double b, double h) { super(color); this.base = b; this.height = h; }
        @Override double area() { return 0.5 * base * height; }
    }

    public static void main(String[] args) {
        System.out.println("=== OOP Polymorphism Demo ===");
        Shape[] shapes = {
            new Circle("Red", 5),
            new Rectangle("Blue", 4, 6),
            new Triangle("Green", 3, 8),
            new Circle("Gold", 3.5)
        };
        for (Shape s : shapes) s.describe();
        System.out.println("=============================");
    }
}`,

  'Sorting Algorithms': `import java.util.Arrays;

public class Main {

    static void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n-1; i++)
            for (int j = 0; j < n-i-1; j++)
                if (arr[j] > arr[j+1]) {
                    int t = arr[j]; arr[j] = arr[j+1]; arr[j+1] = t;
                }
    }

    static void selectionSort(int[] arr) {
        for (int i = 0; i < arr.length-1; i++) {
            int minIdx = i;
            for (int j = i+1; j < arr.length; j++)
                if (arr[j] < arr[minIdx]) minIdx = j;
            int t = arr[minIdx]; arr[minIdx] = arr[i]; arr[i] = t;
        }
    }

    public static void main(String[] args) {
        int[] original = {64, 34, 25, 12, 22, 11, 90, 45, 7, 53};
        System.out.println("=== Sorting Algorithms Demo ===");
        System.out.println("Original:       " + Arrays.toString(original));

        int[] arr1 = original.clone();
        bubbleSort(arr1);
        System.out.println("Bubble Sort:    " + Arrays.toString(arr1));

        int[] arr2 = original.clone();
        selectionSort(arr2);
        System.out.println("Selection Sort: " + Arrays.toString(arr2));

        int[] arr3 = original.clone();
        Arrays.sort(arr3);
        System.out.println("Built-in Sort:  " + Arrays.toString(arr3));
        System.out.println("================================");
    }
}`,

  'Exception Handling': `public class Main {

    static int divide(int a, int b) {
        if (b == 0) throw new ArithmeticException("Division by zero!");
        return a / b;
    }

    static int parseAndAdd(String s1, String s2) {
        return Integer.parseInt(s1) + Integer.parseInt(s2);
    }

    public static void main(String[] args) {
        System.out.println("=== Exception Handling Demo ===");

        // Catching ArithmeticException
        try {
            System.out.println("10 / 2 = " + divide(10, 2));
            System.out.println("10 / 0 = " + divide(10, 0));
        } catch (ArithmeticException e) {
            System.out.println("Caught: " + e.getMessage());
        }

        // Catching NumberFormatException
        try {
            System.out.println("5 + 3 = " + parseAndAdd("5", "3"));
            System.out.println("5 + ? = " + parseAndAdd("5", "abc"));
        } catch (NumberFormatException e) {
            System.out.println("Caught: Invalid number format!");
        } finally {
            System.out.println("Finally block always runs.");
        }

        // Array index
        try {
            int[] arr = {1, 2, 3};
            System.out.println(arr[10]);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Caught: Array index out of bounds!");
        }

        System.out.println("================================");
    }
}`,

  'Collections': `import java.util.*;

public class Main {
    public static void main(String[] args) {
        System.out.println("=== Java Collections Demo ===");

        // ArrayList
        List<String> list = new ArrayList<>(Arrays.asList("Java", "Python", "C++", "Go"));
        list.add("Rust");
        Collections.sort(list);
        System.out.println("ArrayList (sorted): " + list);

        // HashMap
        Map<String, Integer> scores = new HashMap<>();
        scores.put("Alice", 95); scores.put("Bob", 87);
        scores.put("Charlie", 92); scores.put("Diana", 98);
        System.out.println("HashMap: " + scores);
        System.out.println("Top scorer: Diana = " + scores.get("Diana"));

        // HashSet (unique values)
        Set<Integer> set = new HashSet<>(Arrays.asList(1,2,3,2,1,4,3,5));
        System.out.println("HashSet (unique): " + set);

        // LinkedList as Queue
        Queue<String> queue = new LinkedList<>(Arrays.asList("First","Second","Third"));
        System.out.println("Queue peek: " + queue.peek());
        System.out.println("Queue poll: " + queue.poll());
        System.out.println("Queue now: " + queue);
        System.out.println("=============================");
    }
}`,
};

export default function Compiler() {
  const { isDark } = useTheme();
  const [code, setCode] = useState(codeTemplates['Hello World']);
  const [output, setOutput] = useState('');
  const [stdinInput, setStdinInput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | 'warning'
  const [selectedTemplate, setSelectedTemplate] = useState('Hello World');
  const [showTemplates, setShowTemplates] = useState(false);
  const [execTime, setExecTime] = useState(null);
  const [editorTheme, setEditorTheme] = useState(isDark ? 'vs-dark' : 'light');
  const outputRef = useRef(null);

  const runCode = async () => {
    if (!code.trim()) { toast.error('Please write some Java code first!'); return; }

    // Detect if code needs stdin input
    const needsInput = /Scanner|BufferedReader|System\.in|nextLine|nextInt|nextDouble|nextFloat|nextLong|next\(\)/.test(code);
    if (needsInput && !stdinInput.trim()) {
      toast.error('This program needs console input — fill in the stdin panel first!', { duration: 4000, icon: '⌨️' });
      // Scroll to stdin panel
      document.getElementById('stdin-panel')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    setIsRunning(true);
    setOutput('');
    setStatus(null);
    setExecTime(null);
    const startTime = Date.now();

    if (!GROQ_API_KEY) {
      await new Promise(r => setTimeout(r, 800));
      setOutput('⚠️  VITE_GROQ_API_KEY not found in .env file.\n\nCreate a .env file in the project root:\n  VITE_GROQ_API_KEY=your_groq_key\n\nGet a free key at: https://console.groq.com');
      setStatus('warning');
      setIsRunning(false);
      return;
    }

    try {
      const systemPrompt = `You are a precise Java code executor. When given Java code:
1. Execute it mentally and return ONLY the exact console output (stdout).
2. If the program reads from stdin (Scanner, BufferedReader, etc.) use the provided input values in order.
3. If there are compilation errors, return: "Compilation Error:\n<error details>"
4. If there are runtime exceptions, return: "Runtime Exception:\n<exception message and stack trace>"
5. Do NOT add any explanation, commentary, or markdown formatting.
6. Return ONLY what System.out.println / System.out.print / System.err would produce.
7. Be 100% accurate - simulate the JVM exactly.`;

      const userContent = stdinInput.trim()
        ? `Execute this Java code and return only the output.\n\nStdin input (use these values in order for Scanner/BufferedReader):\n${stdinInput}\n\nJava code:\n\`\`\`java\n${code}\n\`\`\``
        : `Execute this Java code and return only the output:\n\n\`\`\`java\n${code}\n\`\`\``;

      const response = await fetch(GROQ_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: GROQ_MODEL,
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userContent }
          ],
          temperature: 0.1,
          max_tokens: 2048,
        }),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error?.message || `API Error: ${response.status}`);
      }

      const data = await response.json();
      const result = data.choices?.[0]?.message?.content?.trim() || '';
      const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);
      setExecTime(elapsed);

      if (result.startsWith('Compilation Error') || result.startsWith('Runtime Exception')) {
        setOutput(result);
        setStatus('error');
        toast.error('Code has errors — check the output terminal');
      } else {
        setOutput(result);
        setStatus('success');
        toast.success(`Executed in ${elapsed}s ⚡`);
      }
    } catch (err) {
      const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);
      setExecTime(elapsed);
      setOutput(`Error connecting to Groq API:\n${err.message}\n\nPlease check your API key and internet connection.`);
      setStatus('error');
      toast.error('Failed to connect to Groq API');
    } finally {
      setIsRunning(false);
      setTimeout(() => outputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 100);
    }
  };

  const resetCode = () => {
    setCode(codeTemplates[selectedTemplate]);
    setOutput('');
    setStatus(null);
    setExecTime(null);
    setStdinInput('');
    toast('Code reset to template', { icon: '🔄' });
  };

  const clearOutput = () => {
    setOutput('');
    setStatus(null);
    setExecTime(null);
  };

  const copyCode = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success('Code copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const loadTemplate = (name) => {
    setSelectedTemplate(name);
    setCode(codeTemplates[name]);
    setOutput('');
    setStatus(null);
    setShowTemplates(false);
  };

  const editorThemes = ['vs-dark', 'light', 'hc-black'];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-java-darker">
      {/* ===== HEADER ===== */}
      <section className="relative py-14 bg-gradient-to-br from-java-dark via-[#0a1628] to-java-darker overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(#0074BD 1px,transparent 1px),linear-gradient(90deg,#0074BD 1px,transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-java-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-java-orange/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-java-blue/10 border border-java-blue/20 text-java-orange text-xs font-semibold mb-4 font-poppins">
                <SparklesIcon className="w-3.5 h-3.5" /> AI-Powered Java IDE · Groq ⚡
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold font-poppins text-white mb-2">
                Java{' '}
                <span className="bg-gradient-to-r from-java-blue to-java-orange bg-clip-text text-transparent">
                  Compiler
                </span>
              </h1>
              <p className="text-gray-300 text-sm max-w-xl">
                Write Java code and run it instantly — powered by{' '}
                <strong className="text-java-orange">Groq AI</strong> (llama-3.3-70b). Get accurate
                output for any Java program.
              </p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <div className="flex items-center gap-2 text-xs text-gray-400 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Groq · llama-3.3-70b-versatile
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 bg-white/5 px-4 py-2 rounded-xl border border-white/10">
                <div className="w-2 h-2 rounded-full bg-java-orange animate-pulse" />
                Java OpenJDK 17 Simulation
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-5 text-sm text-gray-400">
            <Link to="/java-course" className="hover:text-java-orange transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-java-orange">Compiler</span>
          </div>
        </div>
      </section>

      {/* ===== IDE SECTION ===== */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ---- TOOLBAR ---- */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4 p-3 sm:p-4 bg-white dark:bg-java-card-dark rounded-2xl border border-gray-200 dark:border-java-border-dark shadow-sm">

            {/* Template Selector */}
            <div className="relative z-20">
              <button
                onClick={() => setShowTemplates(!showTemplates)}
                className="flex items-center gap-2 px-3 sm:px-4 py-2 text-sm font-medium font-poppins bg-gray-100 dark:bg-java-darker text-gray-700 dark:text-gray-300 rounded-xl border border-gray-200 dark:border-java-border-dark hover:border-java-blue dark:hover:border-java-orange transition-all"
              >
                <CodeBracketIcon className="w-4 h-4 text-java-blue dark:text-java-orange" />
                <span className="hidden xs:inline">{selectedTemplate}</span>
                <span className="xs:hidden">Templates</span>
                <ChevronDownIcon
                  className={`w-4 h-4 transition-transform duration-200 ${showTemplates ? 'rotate-180' : ''}`}
                />
              </button>
              {showTemplates && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-java-card-dark border border-gray-200 dark:border-java-border-dark rounded-2xl shadow-2xl overflow-hidden">
                  {Object.keys(codeTemplates).map(name => (
                    <button
                      key={name}
                      onClick={() => loadTemplate(name)}
                      className={`w-full text-left px-4 py-3 text-sm font-poppins hover:bg-java-blue/5 dark:hover:bg-java-orange/5 transition-colors border-b border-gray-50 dark:border-java-border-dark last:border-0 ${
                        selectedTemplate === name
                          ? 'text-java-blue dark:text-java-orange font-semibold bg-java-blue/5 dark:bg-java-orange/5'
                          : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Editor Theme Switcher */}
            <div className="hidden md:flex items-center gap-1 bg-gray-100 dark:bg-java-darker rounded-xl p-1 border border-gray-200 dark:border-java-border-dark">
              {editorThemes.map(t => (
                <button
                  key={t}
                  onClick={() => setEditorTheme(t)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium font-poppins transition-all ${
                    editorTheme === t
                      ? 'bg-java-blue text-white shadow-sm'
                      : 'text-gray-500 dark:text-gray-400 hover:text-java-blue dark:hover:text-java-orange'
                  }`}
                >
                  {t === 'vs-dark' ? 'Dark' : t === 'light' ? 'Light' : 'High Contrast'}
                </button>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={copyCode}
                title="Copy code"
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-java-darker rounded-xl border border-gray-200 dark:border-java-border-dark hover:border-java-blue dark:hover:border-java-orange transition-all font-poppins"
              >
                {copied
                  ? <ClipboardDocumentCheckIcon className="w-4 h-4 text-green-500" />
                  : <ClipboardDocumentIcon className="w-4 h-4" />}
                <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy'}</span>
              </button>
              <button
                onClick={resetCode}
                title="Reset to template"
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-java-darker rounded-xl border border-gray-200 dark:border-java-border-dark hover:border-java-blue dark:hover:border-java-orange transition-all font-poppins"
              >
                <ArrowPathIcon className="w-4 h-4" />
                <span className="hidden sm:inline">Reset</span>
              </button>
              <button
                onClick={runCode}
                disabled={isRunning}
                className="flex items-center gap-2 px-4 sm:px-6 py-2.5 text-sm font-bold font-poppins bg-java-blue text-white rounded-xl hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition-all hover:shadow-lg hover:shadow-java-blue/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                {isRunning ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span className="hidden sm:inline">Running...</span>
                    <span className="sm:hidden">...</span>
                  </>
                ) : (
                  <>
                    <PlayIcon className="w-4 h-4 fill-white" />
                    <span className="hidden sm:inline">Run Code</span>
                    <span className="sm:hidden">Run</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* ---- EDITOR + OUTPUT ---- */}
          <div className="grid lg:grid-cols-2 gap-4">

            {/* Code Editor + Stdin */}
            <div className="flex flex-col gap-3">
              <div className="bg-white dark:bg-java-card-dark rounded-2xl border border-gray-200 dark:border-java-border-dark overflow-hidden shadow-sm">
                {/* Editor Tab Bar */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-gray-50 dark:bg-[#1e2433] border-b border-gray-200 dark:border-java-border-dark">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">Main.java</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold px-2 py-0.5 bg-java-blue/10 dark:bg-java-orange/10 text-java-blue dark:text-java-orange rounded">
                      Java
                    </span>
                    <span className="text-xs text-gray-400">{code.split('\n').length} lines</span>
                  </div>
                </div>
                <Editor
                  height="420px"
                  language="java"
                  value={code}
                  onChange={val => setCode(val || '')}
                  theme={editorTheme}
                  options={{
                    fontSize: 14,
                    fontFamily: '"JetBrains Mono","Fira Code",monospace',
                    fontLigatures: true,
                    minimap: { enabled: false },
                    scrollBeyondLastLine: false,
                    lineNumbers: 'on',
                    renderLineHighlight: 'all',
                    tabSize: 4,
                    wordWrap: 'on',
                    padding: { top: 16, bottom: 16 },
                    smoothScrolling: true,
                    cursorBlinking: 'smooth',
                    cursorSmoothCaretAnimation: 'on',
                    bracketPairColorization: { enabled: true },
                    guides: { bracketPairs: true },
                    formatOnPaste: true,
                    autoIndent: 'full',
                    suggest: { showKeywords: true },
                  }}
                />
              </div>

              {/* ---- STDIN INPUT PANEL ---- */}
              <div id="stdin-panel" className={`bg-[#0d1117] rounded-2xl border overflow-hidden shadow-sm transition-all duration-300 ${
                /Scanner|BufferedReader|System\.in|nextLine|nextInt|nextDouble|nextFloat|nextLong|next\(\)/.test(code) && !stdinInput.trim()
                  ? 'border-java-orange shadow-java-orange/20 shadow-md'
                  : 'border-java-border-dark'
              }`}>
                <div className="flex items-center justify-between px-4 py-2.5 bg-[#161b22] border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      /Scanner|BufferedReader|System\.in|nextLine|nextInt|nextDouble|nextFloat|nextLong|next\(\)/.test(code) && !stdinInput.trim()
                        ? 'bg-java-orange animate-pulse'
                        : 'bg-gray-600'
                    }`} />
                    <span className="text-xs text-gray-400 font-mono">stdin — Console Input</span>
                    {/Scanner|BufferedReader|System\.in|nextLine|nextInt|nextDouble|nextFloat|nextLong|next\(\)/.test(code) && !stdinInput.trim() && (
                      <span className="text-xs text-java-orange font-semibold bg-java-orange/10 px-2 py-0.5 rounded-full">
                        ⚠ Required
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500 font-mono">one value per line</span>
                    {stdinInput && (
                      <button
                        onClick={() => setStdinInput('')}
                        title="Clear input"
                        className="text-gray-600 hover:text-red-400 transition-colors"
                      >
                        <TrashIcon className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
                <textarea
                  value={stdinInput}
                  onChange={e => setStdinInput(e.target.value)}
                  placeholder={
                    /Scanner|BufferedReader|System\.in|nextLine|nextInt|nextDouble|nextFloat|nextLong|next\(\)/.test(code)
                      ? '⚠ This program reads input — enter values here (one per line)\nExample:\nNikhil\n20\n7'
                      : 'Enter program input here (one value per line)...'
                  }
                  rows={4}
                  className="w-full bg-transparent text-green-300 font-mono text-sm p-4 resize-none focus:outline-none placeholder-gray-600 leading-relaxed"
                  spellCheck={false}
                />
              </div>
            </div>

            {/* Output Terminal */}
            <div
              ref={outputRef}
              className="bg-[#0d1117] rounded-2xl border border-gray-200 dark:border-java-border-dark overflow-hidden shadow-sm flex flex-col"
            >
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#161b22] border-b border-white/5 flex-shrink-0">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  </div>
                  <span className="text-xs text-gray-400 font-mono">stdout — Output Terminal</span>
                </div>
                <div className="flex items-center gap-3">
                  {execTime && (
                    <span className="text-xs text-gray-500 font-mono">⏱ {execTime}s</span>
                  )}
                  {status === 'success' && (
                    <span className="flex items-center gap-1 text-xs text-green-400 font-mono">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" /> Success
                    </span>
                  )}
                  {status === 'error' && (
                    <span className="flex items-center gap-1 text-xs text-red-400 font-mono">
                      <span className="w-1.5 h-1.5 bg-red-400 rounded-full" /> Error
                    </span>
                  )}
                  {status === 'warning' && (
                    <span className="flex items-center gap-1 text-xs text-yellow-400 font-mono">
                      <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full" /> Warning
                    </span>
                  )}
                  {output && (
                    <button
                      onClick={clearOutput}
                      title="Clear output"
                      className="text-gray-600 hover:text-red-400 transition-colors"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Stdin used indicator */}
              {stdinInput.trim() && output && (
                <div className="px-4 py-2 bg-java-orange/5 border-b border-java-orange/10 flex items-center gap-2">
                  <span className="text-java-orange text-xs font-mono">stdin:</span>
                  <span className="text-gray-400 text-xs font-mono truncate">
                    {stdinInput.trim().split('\n').join(' · ')}
                  </span>
                </div>
              )}

              {/* Terminal Body */}
              <div className="flex-1 overflow-y-auto scrollbar-thin p-5 font-mono text-sm" style={{ minHeight: '500px', maxHeight: '580px' }}>
                {isRunning ? (
                  <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                    <div className="relative">
                      <div className="w-14 h-14 border-4 border-java-blue/20 border-t-java-blue rounded-full animate-spin" />
                      <div
                        className="absolute inset-2 border-4 border-java-orange/20 border-b-java-orange rounded-full animate-spin"
                        style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}
                      />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm font-semibold mb-1">
                        Groq AI is executing your code...
                      </p>
                      <p className="text-gray-600 text-xs">
                        llama-3.3-70b-versatile ⚡ Ultra-fast inference
                      </p>
                    </div>
                    <div className="flex gap-1 mt-2">
                      {[0, 1, 2, 3].map(i => (
                        <div
                          key={i}
                          className="w-2 h-2 bg-java-blue rounded-full animate-bounce"
                          style={{ animationDelay: `${i * 0.15}s` }}
                        />
                      ))}
                    </div>
                  </div>
                ) : output ? (
                  <div>
                    <div className="flex items-center gap-2 text-xs text-gray-600 mb-3 pb-2 border-b border-white/5">
                      <span className="text-green-500">$</span>
                      <span>javac Main.java &amp;&amp; java Main</span>
                    </div>
                    <pre
                      className={`whitespace-pre-wrap leading-relaxed break-words ${
                        status === 'error'
                          ? 'text-red-400'
                          : status === 'warning'
                          ? 'text-yellow-300'
                          : 'text-green-300'
                      }`}
                    >
                      {output}
                    </pre>
                    {status === 'success' && (
                      <p className="text-gray-700 text-xs mt-4 pt-3 border-t border-white/5">
                        ✓ Process finished with exit code 0 · {execTime}s · Groq AI ⚡
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-center gap-5">
                    <div className="w-20 h-20 rounded-3xl bg-java-blue/10 border border-java-blue/20 flex items-center justify-center">
                      <PlayIcon className="w-10 h-10 text-java-blue/40" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-base font-semibold font-poppins mb-2">
                        Ready to Execute
                      </p>
                      <p className="text-gray-600 text-xs leading-relaxed max-w-xs">
                        Click{' '}
                        <span className="text-java-blue font-semibold">Run Code</span> to execute
                        your Java program.
                        <br />
                        Output will appear here instantly.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {['Hello World', 'OOP / Polymorphism', 'Collections'].map(t => (
                        <button
                          key={t}
                          onClick={() => loadTemplate(t)}
                          className="px-3 py-1 text-xs text-gray-500 border border-white/10 rounded-lg hover:border-java-blue/40 hover:text-java-blue transition-colors font-mono"
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ---- INFO BANNER ---- */}
          <div className="mt-5 grid sm:grid-cols-2 gap-4">
            <div className="p-5 bg-java-blue/5 dark:bg-java-blue/10 border border-java-blue/20 rounded-2xl flex gap-4">
              <SparklesIcon className="w-6 h-6 text-java-blue flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-poppins font-semibold text-gray-900 dark:text-white text-sm mb-1">
                  AI-Powered Execution
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
                  Uses{' '}
                  <strong className="text-java-blue dark:text-java-orange">Groq API</strong> with
                  llama-3.3-70b to accurately simulate Java execution — no server required. Supports
                  standard Java output, exceptions, OOP, and collections.
                </p>
              </div>
            </div>
            <div className="p-5 bg-java-orange/5 dark:bg-java-orange/10 border border-java-orange/20 rounded-2xl flex gap-4">
              <InformationCircleIcon className="w-6 h-6 text-java-orange flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-poppins font-semibold text-gray-900 dark:text-white text-sm mb-1">
                  How to Use
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
                  Choose a template or write your own Java code. Your class must be named{' '}
                  <code className="bg-gray-200 dark:bg-gray-800 px-1 rounded font-mono text-java-blue dark:text-java-orange">
                    Main
                  </code>
                  . For programs using <code className="bg-gray-200 dark:bg-gray-800 px-1 rounded font-mono text-java-blue dark:text-java-orange">Scanner</code>, enter input values in the <strong>stdin</strong> panel (one per line) before clicking Run.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
